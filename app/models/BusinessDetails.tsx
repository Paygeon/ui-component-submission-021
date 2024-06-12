import mongoose, { Schema, Document } from 'mongoose';

interface ICategoryDesc {
    name: string;
    slug: string;
    description: string;
    addTextToProductPage: string;
    href: string;
}

interface ILinkListItem {
    label: string;
    href: string;
}

interface ISocialFollowLinkObject {
    channelName: string;
    channelHref: string;
    username: string;
    Icon: string; // Assuming Icon is a string representing the icon component
}

interface ISocialShareLinkObject {
    channelName: string;
    channelHref: string;
    Icon: string; // Assuming Icon is a string representing the icon component
    shareTextInFrontOfURL: string;
}

interface IFAQ_PAIR {
    question: string;
    answer: string;
}

interface IBusinessDetails extends Document {
    creatorName: string;
    creatorHref: string;
    creatorXHandle: string;
    yearOfCreation: string;
    companyName: string;
    companyWebsiteUrl: string;
    companySupportEmail: string;
    companyMetaTitle: string;
    companyMetaDescription: string;
    companyTags: string[];
    socialFollowLinks: ISocialFollowLinkObject[];
    parentCompanyName: string;
    parentCompanyHref: string;
    parentCompanyAddress: string;
    categories: string[];
    categoriesDesc: ICategoryDesc[];
    navbarAddLinks: ILinkListItem[];
    footerNavigationLinks: { [key: string]: ILinkListItem[] };
    footerDisclaimers: string;
    footerSlogan: string;
    footerExternalLinkList: ILinkListItem[];
    generalFaqs: IFAQ_PAIR[];
    socialShareLinks: ISocialShareLinkObject[];
}

const BusinessDetailsSchema: Schema = new Schema({
    creatorName: { type: String, required: true },
    creatorHref: { type: String, required: true },
    creatorXHandle: { type: String, required: true },
    yearOfCreation: { type: String, required: true },
    companyName: { type: String, required: true },
    companyWebsiteUrl: { type: String, required: true },
    companySupportEmail: { type: String, required: true },
    companyMetaTitle: { type: String, required: true },
    companyMetaDescription: { type: String, required: true },
    companyTags: { type: [String], required: true },
    socialFollowLinks: [
        {
            channelName: { type: String, required: true },
            channelHref: { type: String, required: true },
            username: { type: String, required: true },
            Icon: { type: String, required: true }
        }
    ],
    parentCompanyName: { type: String, default: "" },
    parentCompanyHref: { type: String, default: "" },
    parentCompanyAddress: { type: String, default: "" },
    navbarAddLinks: [
        {
            name: { type: String, required: true },
            slug: { type: String, required: true }
        }
    ],
    footerNavigationLinks: {
        type: Map,
        of: [
            {
                label: { type: String, required: true },
                href: { type: String, required: true }
            }
        ]
    },
    footerDisclaimers: { type: [String], required: true },
    footerSlogan: { type: String, required: true },
    footerExternalLinkList: [
        {
            label: { type: String, required: true },
            href: { type: String, required: true }
        }
    ],
    generalFaqs: [
        {
            question: { type: String, required: true },
            answer: { type: String, required: true }
        }
    ],
    socialShareLinks: [
        {
            channelName: { type: String, required: true },
            channelHref: { type: String, required: true },
            Icon: { type: String, required: true },
            shareTextInFrontOfURL: { type: String, required: true }
        }
    ]
});

export default mongoose.models.BusinessDetails || mongoose.model<IBusinessDetails>('BusinessDetails', BusinessDetailsSchema);
