
'use client'
// Import Types
import { Metadata } from 'next';
// Import External Packages
// Import Components
import {
	SectionOuterContainer,
	SectionTitle,
	SectionDescription,
	SubSectionOuterContainer,
	SubSectionInnerContainer,
} from '@/ui/Section';
// Import Functions & Actions & Hooks & State
// Import Data
import { COMPANY_NAME } from '@/constants';
import Breadcrumps from '@/app/_components/_ui/Breadcrumps';
import ImageUpload from '@/app/_components/_ui/ImageUpload';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
  } from "@/ui/Accordion"

import ProductUpload from '@/app/_components/_ui/ProductUpload';
import { Button } from '@/app/_components/_ui/Button';
import {useState,useEffect} from 'react';
import { CATEGORIES } from '@/constants';
import axios from 'axios';











export default function ProductUploadPage() {

  useEffect(() => {
		const res =  axios.get('http://localhost:3000/api/populateConstants');
	}, []);
	

    const [product, setProduct] = useState({
        componentName: "",
        category: CATEGORIES[0],
        slug: "",
        shortDescription: "",
        longDescription: "",
        hasImage: true,
        imageUrl: "",
        imageAlt: "",
        hasComponentCode: true,
        tags: [],
        techStack: [],
        examples: [
          {
            nameOfPage: "",
            urlToPage: "",
            descriptionOfUsage: "",
            imageSrcOfUsage: "",
          },
        ],
        faq: [
          {
            question: "",
            answer: "",
          },
        ],
        metaDescription: "filler",
        metaTitle: "filler",
        license: "MIT",
        markdown: "",
        typescript: null // Assuming this will be populated with a valid ObjectId
    }
      );

    const handleProductChange = (newProduct) => {
      console.log(newProduct);
        setProduct(newProduct);
    }


	return (
		<SectionOuterContainer id="CMS-System" className="prose">
      <Breadcrumps />
			<SectionTitle>CMS Page</SectionTitle>
			<SectionDescription>Update your website dynamically by changing information on this page!</SectionDescription>
            <SubSectionInnerContainer className='w-100'>
                <ProductUpload product={product} handleProductChange={handleProductChange} />
            </SubSectionInnerContainer>
			
				
				
				
        
				

			

			
		</SectionOuterContainer>
	);
}
