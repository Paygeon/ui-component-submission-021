const fs = require('fs');
const path = require('path');
const axios = require('axios');
const matter = require('gray-matter');
function capitalize(str) {
	if (!str || typeof str !== 'string') return str;
	return str.charAt(0).toUpperCase() + str.slice(1);
}


const productsDirectory = path.join(process.cwd(), './app/_products');
const outputDirectory = path.join(process.cwd(), './app/_registry');
const productRegistryFile = path.join(outputDirectory, 'productRegistry.json');
const constantsFilePath = path.join(process.cwd(), './app/_constants/constants.ts');

if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
}

const getProductLines = () =>
    fs
        .readdirSync(productsDirectory, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);

const getProductsForLine = (productLine) => {
    const productLinePath = path.join(productsDirectory, productLine);
    return fs
        .readdirSync(productLinePath, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => {
            const productPath = path.join(
                productLinePath,
                dirent.name,
                `${dirent.name}.docs.mdx`
            );
            const fileContents = fs.readFileSync(productPath, 'utf8');
            const { data } = matter(fileContents);
            return { ...data, productLine };
        });
};

const fetchCategories = async () => {
    try {
        const res = await axios.get('http://localhost:3000/api/categories/allSlugs');
        return res.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

const fetchCatDesc = async () => {
    try {
        const res = await axios.get('http://localhost:3000/api/categories/descriptions');
        return res.data;
    } catch (error) {
        console.error('Error fetching category descriptions:', error);
        throw error;
    }
};

const fetchBusinessDetails = async () => {
    try {
        const res = await axios.get('http://localhost:3000/api/businessdetails');
        return res.data[0]; // Assuming the API returns an array
    } catch (error) {
        console.error('Error fetching business details:', error);
        throw error;
    }
};

const fetchRegistry = async () => {
    let registry = {};
    try {
        // Fetch category slugs
        const categoriesData = await fetchCategories();

        // Fetch products for each category in parallel
        await Promise.all(categoriesData.map(async (category) => {
            try {
                const products = await fetchProductsOfCategory(category);
                registry[category] = products;
            } catch (error) {
                console.error(`Error fetching products for category ${category}:`, error.response.data);
                throw error; // Stop execution if any category fetch fails
            }
        }));
    } catch (error) {
        console.error('Error fetching registry:', error.response.data);
        throw error;
    }
    return registry;
};

const fetchProductsOfCategory = async (category) => {
    try {
        const res = await axios.get(`http://localhost:3000/api/categories/${category}`);
        return res.data || []; // Return empty array if no products
    } catch (error) {
        console.error(`Error fetching products for category ${category}:`, error.response.data);
        throw error;
    }
};

Promise.all([fetchCategories(), fetchCatDesc(), fetchBusinessDetails(), fetchRegistry()])
    .then(([categoriesData, catDescData, businessDetails,registryAPI]) => {
        

        const {
            creatorName = '',
            creatorHref = '',
            creatorXHandle = '',
            yearOfCreation = '',
            companyName = '',
            companyWebsiteUrl = '',
            companySupportEmail = '',
            companyMetaTitle = '',
            companyMetaDescription = '',
            companyTags = [],
            socialFollowLinks = [],
            parentCompanyName = '',
            parentCompanyHref = '',
            parentCompanyAddress = '',
            navbarAddLinks = [],
            footerDisclaimers = [],
            footerSlogan = '',
            footerExternalLinkList = [],
            generalFaqs = [],
            socialShareLinks = []
        } = businessDetails || {};

        const footerNavigationLinks = {
            products: categoriesData.map((category) => {
                return { label: capitalize(category), href: `/${category}` };
            }),
            legal: [
                { label: 'Terms', href: '/terms' },
                { label: 'Privacy', href: '/privacy-policy' },
                { label: 'Cookies', href: '/cookie-policy' },
                { label: 'License', href: '/license' },
            ],
        };

        const constantsFileContent =
            `export const CREATOR_LINK = ${JSON.stringify({ creatorName, creatorHref, creatorXHandle })};\n` +
            `export const YEAR_OF_CREATION = '${yearOfCreation}';\n` +
            `export const COMPANY_NAME = '${companyName}';\n` +
            `export const COMPANY_WEBSITE_URL = '${companyWebsiteUrl}';\n` +
            `export const COMPANY_SUPPORT_EMAIL = '${companySupportEmail}';\n` +
            `export const COMPANY_META_TITLE = '${companyMetaTitle}';\n` +
            `export const COMPANY_META_DESCRIPTION = '${companyMetaDescription}';\n` +
            `export const COMPANY_TAGS = ${JSON.stringify(companyTags)};\n` +
            `export const SOCIAL_FOLLOW_LINKS = ${JSON.stringify(socialFollowLinks)};\n` +
            `export const PARENT_COMPANY_LINK = ${JSON.stringify({ parentCompanyName, parentCompanyHref, parentCompanyAddress })};\n` +
            `export const NAVBAR_ADD_LINKS = ${JSON.stringify(navbarAddLinks)};\n` +
            `export const FOOTER_DISCLAIMERS = ${JSON.stringify(footerDisclaimers)};\n` +
            `export const FOOTER_SLOGAN = '${footerSlogan}';\n` +
            `export const FOOTER_EXTERNAL_LINK_LIST = ${JSON.stringify(footerExternalLinkList)};\n` +
            `export const GENERAL_FAQS = ${JSON.stringify(generalFaqs)};\n` +
            `export const SOCIAL_SHARE_LINKS = ${JSON.stringify(socialShareLinks)};\n` +
            `export const CATEGORIES = ${JSON.stringify(categoriesData)};\n` +
            `export const CATEGORIES_DESC = ${JSON.stringify(catDescData)} as const;\n` +
            `export const FOOTER_NAVIGATION_LINKS = ${JSON.stringify(footerNavigationLinks)};\n`;

        // Write the constants to a file
        fs.writeFileSync(constantsFilePath, constantsFileContent);
    

        const productLines = getProductLines();
        const registry = registryAPI
        console.log('registry',registry)

        fs.writeFileSync(productRegistryFile, JSON.stringify(registry, null, 2));
        console.log('Product registry generated successfully:', productRegistryFile);
    })
    .catch((error) => {
        console.error('Error generating product registry:', error);
    });
