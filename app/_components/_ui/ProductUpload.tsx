"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/ui/Carousel";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/ui/Card";
import { Label } from "@/ui/Label";
import { Input } from "@/ui/Input";
import { Textarea } from "@/ui/Textarea";
import { Button } from "@/ui/Button";
import { useNavigate } from "react-router-dom";
import { capitalize } from "@/app/_lib/utils";
import { TECH_STACK } from "@/app/_constants/techstack"; // Assuming this is the correct path to the TECH_STACK constant
import axios from 'axios'
import registry from '@/registry'
import {toast} from 'sonner'

import {
  BarChart3Icon,
  Code2Icon,
  CodeIcon,
  ComponentIcon,
  DatabaseIcon,
  DatabaseZapIcon,
  DollarSignIcon,
  FileLockIcon,
  FingerprintIcon,
  Heading1Icon,
  LucideIcon,
  MailIcon,
  PyramidIcon,
  SwatchBookIcon,
  UploadCloudIcon,
} from "lucide-react";
import { CATEGORIES } from "@/constants"; // Assuming this is the correct path to the CATEGORIES constant
import MarkdownEditor from "./MarkdownEditor";



const techstack = TECH_STACK.map((item) => ({
  name: item.techStackName,
  icon: item.TechStackSVGComponent
})) ||
[
  {
    name: 'Next.js 14',
    icon: Code2Icon,
  },
  {
    name: 'React 18',
    icon: CodeIcon,
  },
  {
    name: 'shadcn/ui',
    icon: ComponentIcon,
  },
  {
    name: 'TailwindCSS',
    icon: SwatchBookIcon,
  },
  {
    name: 'TypeScript',
    icon: FileLockIcon,
  },
  {
    name: 'Framer Motion',
    icon: DatabaseZapIcon,
  },
];

/**
 * Renders a form to upload a new product to the database.
 * @param product - The product object to upload.
 * @param handleProductChange - Function to update the product object.
 * @returns The rendered product upload form.
 */



export default function ProductUpload({ product, handleProductChange }) {

  const [typescriptFile, setTypescriptFile] = useState<any>();
  const [showMarkdownEditor, setShowMarkdownEditor] = useState(false);


  const handleTagChange = (tagsString) => {
    const updatedTags = tagsString.split(',').map(tag => capitalize(tag.trim()));
    handleProductChange({ ...product, tags: updatedTags });
  };

  const handleTechStackChange = (techStackItem) => {
    const updatedTechStack = product.techStack.includes(techStackItem)
      ? product.techStack.filter(item => item !== techStackItem)
      : [...product.techStack, techStackItem];
    handleProductChange({ ...product, techStack: updatedTechStack });
  };

  const handleExampleAdd = () => {
    toast.message("Example successfully added!")
    handleProductChange({
      ...product,
      examples: [
        ...product.examples,
        {
          nameOfPage: "",
          urlToPage: "",
          descriptionOfUsage: "",
          imageSrcOfUsage: "",
        },
      ],
    });
  };

  const handleMarkdownSubmit = (markdownContent) => {
    toast.message("Markdown content successfully uploaded!")
    handleProductChange({ ...product, markdown: markdownContent });
  }

  const handleExampleChange = (index, field, value) => {
    const updatedExamples = [...product.examples];
    updatedExamples[index][field] = value;
    handleProductChange({ ...product, examples: updatedExamples });
  };

  const handleExampleRemove = (index) => {
    const updatedExamples = [...product.examples];
    updatedExamples.splice(index, 1);
    handleProductChange({ ...product, examples: updatedExamples });
  };

  const handleFaqAdd = () => {
    toast.message("FAQ successfully added!")
    handleProductChange({
      ...product,
      faq: [
        ...product.faq,
        {
          question: "",
          answer: "",
        },
      ],
    });
  };

  const handleFaqChange = (index, field, value) => {
    const updatedFaqs = [...product.faq];
    updatedFaqs[index][field] = value;
    handleProductChange({ ...product, faq: updatedFaqs });
  };

  const handleFaqRemove = (index) => {
    const updatedFaqs = [...product.faq];
    updatedFaqs.splice(index, 1);
    handleProductChange({ ...product, faq: updatedFaqs });
  };

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {

      const reader = new FileReader();
      reader.onload = () => {
        const content = reader.result;
        if (type === 'typescript') {
          const formData = new FormData();
          formData.append('file', file);
          setTypescriptFile(formData);
         
          handleProductChange({ ...product, typescript: content });
        } else if (type === 'markdown') {
          handleProductChange({ ...product, markdown: content });
        }
      };
      reader.readAsText(file);
    }
  };

  const base64 = (file: File): Promise<string | ArrayBuffer | null> => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        const file = target.files[0];
        try {
          const result = await base64(file);
          handleProductChange({ ...product, imageUrl: result as string });
          toast.message("Image successfully uploaded!")
          
        } catch (error) {
          console.log(error);
        }
      }
    };
    input.click();
  };


  const submitProduct = () => {
    // Check if any required field is empty
    if (
      !product.componentName ||
      !product.category ||
      !product.slug ||
      !product.shortDescription ||
      !product.longDescription ||
      !product.imageUrl ||
      !product.tags.length ||
      !product.techStack.length ||
      !product.examples.length ||
      !product.faq.length
    ) {
      toast.error("Please fill out all required fields before saving the product.");
      return;
    }
  
    // If all required fields are filled, proceed with the submission
    axios
      .post('http://localhost:3000/api/products', product)
      .then((response) => {
        console.log(response);
        axios
          .post(`http://localhost:3000/api/products/typescript/${product.category}/${product.slug}`, typescriptFile)
          .then((response) => {
            console.log(response);
            toast.success('Product uploaded successfully! 🎉');
          })
          .catch((error) => {
            console.error(error.response.data);
            toast.error("Error uploading TS file.");
          });
  
        // Redirect to the new product page
      })
      .catch((error) => {
        console.error(error.response.data);
        toast.error("Error uploading product.");
      });
  };
  
  return (

    <Carousel className="max-w-fit">
      <CarouselContent>
        <CarouselItem>
          <Card>
            <CardHeader>
              <CardTitle class = 'dark:text-white' >Create New Product</CardTitle>
              <CardDescription>Fill out the form to create a new product.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="componentName">Component Name</Label>
                <Input
                  id="componentName"
                  value={product.componentName}
                  onChange={(e) => handleProductChange({ ...product, componentName: e.target.value,metaTitle: e.target.value})}
                  placeholder="Enter component name"
                />
              </div>
              <div className="space-y-2 dark:text-white">
                <Label htmlFor="category">Category</Label>
                <select
                  id="categorySlug"
                  value={product.category}
                  onChange={(e) => handleProductChange({ ...product, category: e.target.value })}
                  className="block w-full p-2 border border-gray-300 rounded-md dark:text-black "
                >
                  {CATEGORIES.map((category, index) => (
                    <option key={index} value={category} className = 'dark:text-white'>{category}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  value={product.slug}
                  onChange={(e) => {product.catagory && product.slug && registry[category] == e.target.value ? alert("This Slug already exits in the category!")  : handleProductChange({ ...product, slug: e.target.value })}}
                  placeholder="Enter slug"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shortDescription">Short Description</Label>
                <Textarea
                  id="shortDescription"
                  value={product.shortDescription}
                  onChange={(e) => handleProductChange({ ...product, shortDescription: e.target.value,metaDescription: e.target.value})}
                  placeholder="Enter short description"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="longDescription">Long Description</Label>
                <Textarea
                  id="longDescription"
                  value={product.longDescription}
                  onChange={(e) => handleProductChange({ ...product, longDescription: e.target.value })}
                  placeholder="Enter long description"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="imageUpload">Upload Image</Label>
                <div onClick={uploadImage}> 
                  <input
                    id="imageUrl"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                  />
                  <label htmlFor="imageUpload" className="cursor-pointer border border-gray-300 p-2 rounded-md">
                    Choose Image
                  </label>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="imageAlt">Image Alt Text</Label>
                <Input
                  id="imageAlt"
                  value={product.imageAlt}
                  onChange={(e) => handleProductChange({ ...product, imageAlt: e.target.value })}
                  placeholder="Enter image alt text"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input
                  id="tags"
                  value={product.tags.join(', ')}
                  onChange={(e) => handleTagChange(e.target.value)}
                  placeholder="Enter tags separated by commas"
                />
              </div>
              <div className="space-y-2">
                <Label>Tech Stack</Label>
                <div className="flex flex-wrap gap-2">
                  {techstack.map((tech, index) => (
                    <Button
                      key={index}
                      variant={product.techStack.includes(tech.name) ? "outline" : "solid"}
                      onClick={() => handleTechStackChange(tech.name)}
                    >
                      {tech.name}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label>Examples</Label>
                {product.examples.map((example, index) => (
                  <div key={index} className="grid grid-cols-[1fr_auto] items-center gap-4">
                    <div className="grid gap-2">
                      <Input
                        placeholder="Name of Page"
                        value={example.nameOfPage}
                        onChange={(e) => handleExampleChange(index, "nameOfPage", e.target.value)}
                      />
                      <Input
                        placeholder="URL to Page"
                        value={example.urlToPage}
                        onChange={(e) => handleExampleChange(index, "urlToPage", e.target.value)}
                      />
                      <Textarea
                        placeholder="Description of Usage"
                        value={example.descriptionOfUsage}
                        onChange={(e) => handleExampleChange(index, "descriptionOfUsage", e.target.value)}
                      />
                      <Input
                        placeholder="Image Source"
                        value={example.imageSrcOfUsage}
                        onChange={(e) => handleExampleChange(index, "imageSrcOfUsage", e.target.value)}
                      />
                    </div>
                    <Button variant="ghost" onClick={() => handleExampleRemove(index)}>
                      <TrashIcon className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button onClick={handleExampleAdd}>Add Example</Button>
              </div>
              <div className="space-y-2">
                <Label>FAQs</Label>
                {product.faq.map((faq, index) => (
                  <div key={index} className="grid grid-cols-[1fr_auto] items-center gap-4">
                    <div className="grid gap-2">
                      <Input
                        placeholder="Question"
                        value={faq.question}
                        onChange={(e) => handleFaqChange(index, "question", e.target.value)}
                      />
                      <Textarea
                        placeholder="Answer"
                        value={faq.answer}
                        onChange={(e) => handleFaqChange(index, "answer", e.target.value)}
                      />
                    </div>
                    <Button variant="ghost" onClick={() => handleFaqRemove(index)}>
                      <TrashIcon className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button onClick={handleFaqAdd}>Add FAQ</Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={submitProduct}>Save Product</Button>
            </CardFooter>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card>
            <CardHeader>
              <CardTitle className="dark:text-white">Upload TSX File</CardTitle>
              <CardDescription>Select a TSX file to upload.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="tsx-file">TSX File</Label>
                <Input
                  id="tsx-file"
                  type="file"
                  onChange={(e) => handleFileUpload(e, 'typescript')}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={()=> {toast.message("TSX File successfully uploaded!")}}>Upload TSX</Button>
              <a href="https://codesandbox.io/p/devbox/next-js-fxis37?file=%2Fapp%2Fpage.tsx%3A114%2C1"><Button variant="ghost" className="dark:text-white">Create TSX Here</Button></a>
            </CardFooter>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card>
            <CardHeader>
              <CardTitle className="dark:text-white">Upload MDX File</CardTitle>
              <CardDescription>Select an MDX file to upload.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="mdx-file">MDX File</Label>
                <Input
                  id="mdx-file"
                  type="file"
                  onChange={(e) => handleFileUpload(e, 'markdown')}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={()=> {toast.message("TSX File successfully uploaded!")}} >Upload MDX</Button>
              <Button variant="ghost" onClick = {()=> setShowMarkdownEditor(!showMarkdownEditor)}>Create MDX Here</Button>
            </CardFooter>
          </Card>
          {showMarkdownEditor && <MarkdownEditor handleMarkdownSubmit= {handleMarkdownSubmit} />}
        </CarouselItem>
        
      </CarouselContent>
      
      <CarouselPrevious className="absolute top-0 left-0 mt-8 ml-4" />
      <CarouselNext className="absolute top-0 right-0 mt-8 mr-4" />
    </Carousel>
    
   
  );
}

function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
