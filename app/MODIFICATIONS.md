change product registry to api call from backend
change constants (categories and desc of each cata) using api calls

change the imports in the registry.ts

change the parse of the frontmatter to take input from a form (for backup do the frontmatter format as well if possible)

include slug component and everything in the backend as well for each product 
make an image model to store the preview image for each product and link the api in the front matter to each product before uplaoding//change this to just encode in base64 and directly upload.change the images in each to call the api for each and import into the others
change the category overview to do an api call to the image for preview instead of filepath
change the tsx fetch to do it with api call instead of the current file path
update slugs in the registry for each but im not sure if it really matters in the end.

(mabye just have the content as a seperate markdown file and just directly return instead of parsing and stuff)

#export async function getProductMetaAndMDXContent change this to 2 api calls that fetch each info (i think as string im not sure)




apis for the constants


just fetch everything and make another folder with the parameter and just directly post that constant



//issue with the constants file,the api calls dont export but the og files work in other components,fix that.

//fix the (as const) export of the categories,change the product registry generation 
complete the cms page in public


//use https://v0.dev/ 

handle md and ts upload (use matter for md when uploading) 
check if ts can be rendered as a string instead of storing as a file in the backend (hassle)
change all images to export and change locations
not sure if the as const thing matters but mabyue look into it
//change all the imporst and exports in the other files as ajax shit is screweing up everything
nvm run the script node ./scripts/generateProductRegistry.js/ after build it complete (do this while hosting as part of the build process)

idea rn is make one giant function and just return an object of those types,so that u can just import a single funiction and the object mapping is directly done in each files import



import getBusinessConfig from '@/constants'

const {CATEGORIES}  = await getBusinessConfig


{
  "creatorName": "Till Kahlen",
  "creatorHref": "https://x.com/tkahlen",
  "creatorXHandle": "@tkahlen",
  "yearOfCreation": "2024",
  "companyName": "The Button Company",
  "companyWebsiteUrl": "https://thebuttoncompany.com",
  "companySupportEmail": "support@boilerplatehq.com",
  "companyMetaTitle": "React Buttons and nothing else - The BUTTON COMPANY",
  "companyMetaDescription": "Beautifully crafted react buttons for your next project.",
  "companyTags": ["buttons", "react", "components"],
  "socialFollowLinks": [
    {
      "channelName": "X",
      "channelHref": "https://twitter.com/boilerplatehq",
      "username": "@boilerplatehq",
      "Icon": "IconX"
    }
  ],
  "parentCompanyName": "",
  "parentCompanyHref": "",
  "parentCompanyAddress": "",
  "navbarAddLinks": [
    {
      "name": "About",
      "slug": "about"
    }
  ],
  "footerDisclaimers": [
    "Disclaimer: We know that the button logo is \"the other kind of button\". We like to spice things up! ;)"
  ],
  "footerSlogan": "Jumpstart your idea-to-button journey with best in class buttons.",
  "footerExternalLinkList": [
    {
      "label": "Boilerplates @ BoilerplateHQ.com",
      "href": "https://boilerplatehq.com"
    },
    {
      "label": "Domain Hacks @ Domainhacks.info",
      "href": "https://domainhacks.info"
    },
    {
      "label": "Expired .COM Domains @ DroppedHub.com",
      "href": "https://droppedhub.com"
    }
  ],
  "generalFaqs": [
    {
      "question": "What is a button?",
      "answer": "A button is a user interface element that users can click or tap to perform an action. Buttons are typically found in forms, dialog boxes, and other areas of a website or app where users need to interact with the interface."
    },
    {
      "question": "Why should I care about buttons?",
      "answer": "Buttons are an essential part of any user interface. They help users navigate through a website or app, submit forms, and perform other actions. Well-designed buttons can improve the user experience and make it easier for users to interact with your product."
    },
    {
      "question": "Are all Buttons Free?",
      "answer": "Yes, all buttons are free to use. You can download them and use them in your projects without any restrictions."
    }
  ],
  "socialShareLinks": [
    {
      "channelName": "facebook",
      "channelHref": "https://www.facebook.com/sharer/sharer.php?u=",
      "Icon": "Icons.Facebook",
      "shareTextInFrontOfURL": "something from The Button Company:"
    },
    {
      "channelName": "X",
      "channelHref": "https://twitter.com/intent/tweet?text=",
      "Icon": "Icons.X",
      "shareTextInFrontOfURL": "I found this on The Button Company: "
    }
  ]
}


get the tyescript to run off a string
mabye build a auth system
check where other images are used

completed for the most part everything