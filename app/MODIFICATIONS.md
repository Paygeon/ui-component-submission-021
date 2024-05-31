change product registry to api call from backend
change constants (categories and desc of each cata) using api calls

change the imports in the registry.ts

change the parse of the frontmatter to take input from a form (for backup do the frontmatter format as well if possible)

include slug component and everything in the backend as well for each product 
make an image model to store the preview image for each product and link the api in the front matter to each product before uplaoding
change the category overview to do an api call to the image for preview instead of filepath
change the tsx fetch to do it with api call instead of the current file path
update slugs in the registry for each but im not sure if it really matters in the end.

(mabye just have the content as a seperate markdown file and just directly return instead of parsing and stuff)

#export async function getProductMetaAndMDXContent change this to 2 api calls that fetch each info (i think as string im not sure)