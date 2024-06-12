// Purpose: This file contains all helper functions in regards to server-only utilities.

// Import Types
import { Category, ProductMeta } from '@/types';
// Import External Packages
import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';
import axios from 'axios';
// Import Components
// Import Functions & Actions & Hooks & State
// Import Data
// Import Assets & Icons

/**
 * Retrieves the PRODUCT metadata and MDX content for a given category and product slug.
 * @param categorySlug - The slug of the category.
 * @param productSlug - The slug of the product.
 * @returns An object containing the product metadata, MDX content, and an error flag.
 */

export async function getProductMetaAndMDXContent(
    categorySlug: string,
    productSlug: string
) {
    try {
        // Function to fetch front matter (metadata) from the server
        const fetchFrontMatter = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:3000/api/products/frontmatter/${categorySlug}/${productSlug}`
                );
               
                return res.data;
            } catch (error) {
                console.error('Error fetching product metadata:', error);
                return { frontmatter: {} };
            }
        };

        // Function to fetch MDX content from the server
        const fetchMDXContent = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:3000/api/products/markdown/${categorySlug}/${productSlug}`
                );
                
                return res.data;
            } catch (error) {
                console.error('Error fetching product content:', error);
                return { markdownContent: '' };
            }
        };

        // Use Promise.all to fetch both front matter and MDX content concurrently
        const [frontMatterAPI, contentAPI] = await Promise.all([
            fetchFrontMatter(),
            fetchMDXContent(),
        ]);

      
        // Extract frontmatter and content
        const { frontmatter } = frontMatterAPI;
        const { markdownContent: content } = contentAPI;

        return {
            meta: frontmatter as ProductMeta,
            content,
            error: false,
        };
    } catch (error) {
        console.error('Error fetching product metadata and content:', error);
        return { meta: {} as ProductMeta, content: '', error: true };
    }
}


/**
 * Retrieves the paths of all the content files with the '.mdx' extension in a directory and its subdirectories - e.g. for static data like the sitemap.
 * @param basePath - The base path of the directory to search in.
 * @param currentPath - The current path relative to the base path (used for recursion, should not be provided when calling the function).
 * @returns An array of arrays representing the paths of the content files.
 */
export const getDocsContentPaths = (
	basePath: string,
	currentPath: string[] = []
): string[][] => {
	const entries = fs.readdirSync(basePath, { withFileTypes: true });
	let paths: string[][] = [];

	entries.forEach((entry) => {
		if (entry.isDirectory()) {
			const subDirPaths = getDocsContentPaths(path.join(basePath, entry.name), [
				...currentPath,
				entry.name,
			]);
			paths = paths.concat(subDirPaths);
		} else if (entry.isFile() && entry.name.endsWith('.mdx')) {
			const modifiedEntryName = entry.name
				.replace('.mdx', '')
				.replace('_index', '');
			if (modifiedEntryName) {
				paths.push([...currentPath, modifiedEntryName]);
			} else {
				paths.push([...currentPath]);
			}
		}
	});

	return paths;
};



export async function  useDownloadTsxFile (category: string, componentSlug: string){
    const fetchAndWriteTsxFile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/products/typescript/${category}/${componentSlug}`
        );
        const { message, filePath } = response.data;

        if (message === 'File created successfully') {
            
          console.log(`TSX file written to ${filePath}`);
          return(true)
        } else {
          console.error('Error writing TSX file:', response.data.error);
        }
      } catch (error) {
        console.error('Error fetching and writing TSX file:', error);
        return(false)
      }
    };

    fetchAndWriteTsxFile();
};