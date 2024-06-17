
'use client'
// Import Types
import { Metadata } from 'next';
import Link from 'next/link';
import Loading from '@/app/loading';
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
import { buttonVariants } from "@/ui/Button"
import CategoryUpload from '@/app/_components/_ui/CategoryUpload';
import DeleteItem from '@/app/_components/_ui/DeleteItem';
import { useEffect } from 'react';
import axios from 'axios';
import router from 'next/router';

import ImageUpload  from '@/app/_components/_ui/ImageUpload';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
  } from "@/ui/Accordion"
  import { Button } from '@/app/_components/_ui/Button';
// Import Assets & Icons
import BusinessDetailForm from '@/app/_components/_ui/BusinessDetailForm';
import WebsiteEditor from '@/app/_components/_ui/WebsiteEditor';
import SecretKeysForm from '@/app/_components/_ui/SecretKeyForm';
import { useKindeBrowserClient} from '@kinde-oss/kinde-auth-nextjs';
import React from 'react';



function DarkandLightModeLogoUpload() {
	return (
		
		<SubSectionOuterContainer className="max-w-3xl py-0">
			<h2 className="text-black dark:text-zinc-200">Logo Update</h2>
			<SubSectionInnerContainer className="items-start py-0 flex-row justify-between">
				<ImageUpload class='m-8' heading="Dark Mode Logo (light image)" apiKey="/logos/dark"  />
				<ImageUpload class='m-8' heading="Light Mode Image (dark image)" apiKey="/logos/light"  />
			</SubSectionInnerContainer>
		</SubSectionOuterContainer>
	);
}


function IconImageUpload() {
	return (
		<SubSectionOuterContainer className="max-w-3xl py-0">
			<h2 className="text-black dark:text-zinc-200">Icon Update</h2>
				<SubSectionInnerContainer className="items-start py-0 flex-row justify-around">
					<div className = "scale-0.5" >
                    <ImageUpload class='m-8' heading = "Your icon in 512x512" apiKey = "/icons/512"  />
					<ImageUpload class='m-8' heading = "Your icon in 128x128" apiKey = "/icons/128" />
					<ImageUpload class='m-8' heading = "Your icon in 190x190" apiKey = "/icons/190"  />
					</div>
					<div>
					<ImageUpload class='m-8' heading = "Your icon in 190x190" apiKey = "/icons/190" />
					<ImageUpload class='m-8' heading = "SVG of your icon" apiKey = "/icons/svg"  />
					<ImageUpload class='m-8' heading = ".ico version in 48x48" apiKey = "/icons/ico" />
					</div>
				</SubSectionInnerContainer>
			</SubSectionOuterContainer>
	)
}

function OpenGraphImageUpload() { 
	return (
		<SubSectionOuterContainer className="max-w-3xl py-0">
			<h2 className="text-black dark:text-zinc-200">Open Graph Image Update</h2>
				<SubSectionInnerContainer className="items-start py-0 flex-row justify-between">
                    <ImageUpload class='m-8' heading = "Image for Social Media in format 1080x1080" apiKey = "/images/1080"  />
					<ImageUpload class='m-8' heading = "Image for Social Media in format 1200x630" apiKey = "/images/1200" />
					<ImageUpload class='m-8' heading = "Image for Social Media in format 1600x900" apiKey = "/images/1600"  />
				</SubSectionInnerContainer>
			</SubSectionOuterContainer>

	)
}




export default function CMSPage() {
	const [loading,setLoading] = React.useState(true);

	const {user,isAuthenticated, getPermission,isLoading} = useKindeBrowserClient();
	useEffect(() => {
		const fetchData = async () => {
		const res =  axios.get('http://localhost:3000/api/populateConstants');
		if (isAuthenticated) {
			const requiredPermission = getPermission("access:cms");
			if (!requiredPermission.isGranted) {
				window.location.href = '/dashboard';
			}
		} else {
			window.location.href = '/dashboard';
		}

	
	
		
	}
	fetchData();

	}, []);
	
	if (isLoading) {
		return (<Loading />)
	}
	
	
	return (
		
		<SectionOuterContainer >
            <Breadcrumps />
			<SectionTitle>CMS Page</SectionTitle>
			<SectionDescription>Update your website dynamically by changing information on this page!</SectionDescription>
				
				<Accordion type="single" collapsible className="max-w">
					<AccordionItem value="item-1">
						<AccordionTrigger className="dark:text-white">Edit Business Details</AccordionTrigger>
						<AccordionContent>
							<BusinessDetailForm />
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-2">
						<AccordionTrigger className="dark:text-white">Add a Category</AccordionTrigger>
						<AccordionContent>
							<CategoryUpload />
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-3">
						<AccordionTrigger className="dark:text-white">Delete Product/Category</AccordionTrigger>
						<AccordionContent>
							<DeleteItem />
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-4">
						<AccordionTrigger className="dark:text-white">Edit Hero / SideKick text</AccordionTrigger>
						<AccordionContent>
							<WebsiteEditor />
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-5">
						<AccordionTrigger className="dark:text-white">Update Secret Keys</AccordionTrigger>
						<AccordionContent>
							<SecretKeysForm />
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-6">
						<AccordionTrigger className="dark:text-white">Dark and Light Mode Logos</AccordionTrigger>
						<AccordionContent>
						<DarkandLightModeLogoUpload />
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-7">
						<AccordionTrigger className="dark:text-white">Icon Images by Dimension</AccordionTrigger>
						<AccordionContent>
						<IconImageUpload />
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-8">
						<AccordionTrigger className="dark:text-white">Open Graph Images</AccordionTrigger>
						<AccordionContent>
						<OpenGraphImageUpload />
						</AccordionContent>
					</AccordionItem>

				</Accordion>

				
				
				
				
				
				<Link href="/cms-system/product-upload"><Button variant ='default' className ='w-100vw justify-center mt-10'>Add Product</Button></Link>
				
				 

				
				
				
				
				
				

			

			
		</SectionOuterContainer>
	);
}
