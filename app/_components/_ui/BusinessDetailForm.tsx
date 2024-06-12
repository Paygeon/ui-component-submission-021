'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/ui/Card"
import { Label } from "@/ui/Label"
import { Input } from "@/ui/Input"
import { Textarea } from "@/ui/Textarea"
import { Button } from "@/ui/Button"
import { useEffect, useState } from "react"
import axios from 'axios'
import { toast } from 'sonner'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/Accordion"
import LinkList from "@/ui/LinkList"
import FAQList from "@/ui/FAQList"

const defaultBusinessDetails = {
  creatorName: 'Till Kahlen',
  creatorHref: 'https://x.com/tkahlen',
  creatorXHandle: '@tkahlen',
  yearOfCreation: '2024',
  companyName: 'The Button Company',
  companyWebsiteUrl: 'https://thebuttoncompany.com',
  companySupportEmail: 'support@boilerplatehq.com',
  companyMetaTitle: 'React Buttons and nothing else - The BUTTON COMPANY',
  companyMetaDescription: 'Beautifully crafted react buttons for your next project.',
  companyTags: ['buttons', 'react', 'components'],
  socialFollowLinks: [
    {
      channelName: 'X',
      channelHref: 'https://twitter.com/boilerplatehq',
      username: '@boilerplatehq',
      Icon: "IconX",
    },
  ],
  parentCompanyName: '',
  parentCompanyHref: '',
  parentCompanyAddress: '',
  navbarAddLinks: [{ name: 'About', slug: 'about' },{name:"Cms",slug:"cms-system"}],
  footerDisclaimers: [
    'Disclaimer: We know that the button logo is "the other kind of button". We like to spice things up! ;)',
  ],
  footerSlogan: 'Jumpstart your idea-to-button journey with best in class buttons.',
  footerExternalLinkList: [
    {
      label: 'Boilerplates @ BoilerplateHQ.com',
      href: 'https://boilerplatehq.com',
    },
    {
      label: 'Domain Hacks @ Domainhacks.info',
      href: 'https://domainhacks.info',
    },
    {
      label: 'Expired .COM Domains @ DroppedHub.com',
      href: 'https://droppedhub.com',
    },
  ],
  generalFaqs: [
    {
      question: 'What is a button?',
      answer:
        'A button is a user interface element that users can click or tap to perform an action. Buttons are typically found in forms, dialog boxes, and other areas of a website or app where users need to interact with the interface.',
    },
    {
      question: 'Why should I care about buttons?',
      answer:
        'Buttons are an essential part of any user interface. They help users navigate through a website or app, submit forms, and perform other actions. Well-designed buttons can improve the user experience and make it easier for users to interact with your product.',
    },
    {
      question: 'Are all Buttons Free?',
      answer:
        'Yes, all buttons are free to use. You can download them and use them in your projects without any restrictions.',
    },
  ],
  socialShareLinks: [
    {
      channelName: 'facebook',
      channelHref: 'https://www.facebook.com/sharer/sharer.php?u=',
      Icon: "Icons.Facebook",
      shareTextInFrontOfURL: 'something from The Button Company:',
    },
    {
      channelName: 'X',
      channelHref: 'https://twitter.com/intent/tweet?text=',
      Icon: "Icons.X",
      shareTextInFrontOfURL: 'I found this on The Button Company: ',
    },
  ],
};


/*
THIS COMOPNENT IS A FORM THAT ALLOWS THE USER TO ENTER/UPDATE/ BUSINESS DETAILS

*/


export default function BusinessDetailForm() {
  const [businessDetails, setBusinessDetails] = useState<any>(defaultBusinessDetails);
  const [socialMediaLinks, setSocialMediaLinks] = useState<any[]>(defaultBusinessDetails.socialFollowLinks || []);
  
  useEffect(()=> {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/businessdetails');
        if (res.data.length > 0){
          setBusinessDetails(res.data[0]);
          setSocialMediaLinks(res.data[0].socialFollowLinks);
        }
      } catch (error) {
        console.error('Error fetching business details:', error);
      }
    }
    fetchData();  // Fetch data, but don't wait for it
  },[])

  const handleBusinessDetailChange = (e: any) => {
    const {id, value} = e.target
    const name = id
    if (name === 'companyMetaTitle'){ 
      if(value.length > 60){
        setBusinessDetails({...businessDetails, [name]: value.substring(0, 60)});
        alert('Title should be less than 60 characters!');
        return;
      }
    }

    if (name === 'companyMetaDescription'){ 
      if(value.length > 120){
        setBusinessDetails({...businessDetails, [name]: value.substring(0, 120)});
        alert('Description should be less than 120 characters!');
        return;
      }
    }

    if (name === 'companyTags'){
      const tags = value.split(',');
      if(tags.length > 5){
        setBusinessDetails({...businessDetails, [name]: tags.slice(0, 5)});
        alert('Tags should be less than 5!');
        return;
      }
    }

    if (name === 'channelHref' || name === 'username'){
      const index = socialMediaLinks.findIndex((link) => link.channelName === name);
      const updatedLinks = [...socialMediaLinks];
      updatedLinks[index][name] = value;
      setSocialMediaLinks(updatedLinks);
      setBusinessDetails({...businessDetails, socialFollowLinks: updatedLinks});
      return;
    }

    console.log(businessDetails);
    setBusinessDetails({...businessDetails, [name]: value});
    console.log(businessDetails);
  }

  const handleSubmitDetails = async () => {
    try{
      const response = await axios.post('/api/businessdetails', businessDetails);
      console.log(response);
      toast.success('Details saved successfully!');

    } catch (error) {
      console.log(error.response.data);
    }
  }

  const [links, setLinks] = useState<any[]>(businessDetails.footerExternalLinkList || [
    {
      label: 'Google',
      href: 'https://www.google.com',
    },
    {
      label: 'GitHub',
      href: 'https://github.com',
    },
    {
      label: 'Vercel',
      href: 'https://vercel.com',
    },
  ]);

  const handleUpdateLinks = (updatedLinks) => {
    console.log(updatedLinks)
    setLinks(updatedLinks);
    setBusinessDetails({...businessDetails, footerExternalLinkList: updatedLinks});
  };

  const [faqs,setFaqs] = useState<any[]>(businessDetails.generalFaqs || [
    {
      question: 'What is the meaning of life?',
      answer: '42',
    },
    {
      question: 'What is the air-speed velocity of an unladen swallow?',
      answer: 'African or European swallow?',
    }
  ]);

  const handleUpdateFAQs = (updatedFaqs) => {
    setFaqs(updatedFaqs);
    setBusinessDetails({...businessDetails, generalFaqs: updatedFaqs});
  }

  const [socialshare,setSocialShare] = useState<any[]>(businessDetails.socialShareLinks || [
    {
      channelName: 'Facebook',
      channelHref: 'https://www.facebook.com',
      Icon: "facbookicon",
      shareTextInFrontOfURL: 'Share on Facebook',
    },
    {
      channelName: 'X',
      channelHref: 'https://www.twitter.com',
      Icon: "xIcon",
      shareTextInFrontOfURL: 'Tweet this',
    }
  ])

  const handleSocialShareChange = (e: any) => {
    const {id, value} = e.target
    const name = id
    if (name === 'Facebook' || name === 'X'){
      const index = socialshare.findIndex((link) => link.channelName === name);
      const updatedLinks = [...socialshare];
      updatedLinks[index].shareTextInFrontOfURL = value;
      setSocialShare(updatedLinks);
      setBusinessDetails({...businessDetails, socialShareLinks: updatedLinks});
      return;
    }
  }

  return (
    <Card className="max-w-fit">
      <CardHeader>
        <CardTitle>Business Details</CardTitle>
        <CardDescription>Fill out the form to provide comprehensive details about your business.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <h4 className="underline underline-offset-8">Creator Information</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Creator Name</Label>
            <Input 
              id="creatorName" 
              placeholder="Enter your creator name" 
              value={businessDetails.creatorName || ''} 
              onChange={handleBusinessDetailChange} 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Creator Twitter</Label>
            <Input 
              id="creatorHref" 
              placeholder="Enter your creator Twitter URL" 
              value={businessDetails.creatorHref || ''} 
              onChange={handleBusinessDetailChange} 
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Creator Handle</Label>
            <Input 
              id="creatorXHandle" 
              placeholder="Enter your creator handle" 
              value={businessDetails.creatorXHandle || ''} 
              onChange={handleBusinessDetailChange} 
            />
          </div>
        </div>

        <h4 className="underline underline-offset-8">Company Information</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="website">Year of Creation</Label>
            <Input 
              id="yearOfCreation" 
              placeholder="Enter the year of creation" 
              value={businessDetails.yearOfCreation || ''} 
              onChange={handleBusinessDetailChange} 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="industry">Company Name</Label>
            <Input 
              id="companyName" 
              placeholder="Enter your company name" 
              value={businessDetails.companyName || ''} 
              onChange={handleBusinessDetailChange} 
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="website">Company Title (60 characters)</Label>
            <Input 
              id="companyMetaTitle" 
              placeholder="Enter your company title" 
              value={businessDetails.companyMetaTitle || ''} 
              onChange={handleBusinessDetailChange} 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="industry">Company Tags (5 tags maximum)</Label>
            <Input 
              id="companyTags" 
              placeholder="Enter your company tags" 
              value={businessDetails.companyTags?.join(', ') || ''} 
              onChange={handleBusinessDetailChange} 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="industry">Company Support Email</Label>
            <Input 
              id="companySupportEmail" 
              placeholder="Enter your support email" 
              value={businessDetails.companySupportEmail || ''} 
              onChange={handleBusinessDetailChange} 
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="website">Twitter Link</Label>
            <Input 
              id="channelHref" 
              placeholder="Enter your Twitter URL" 
              value={socialMediaLinks.find(link => link.channelName === 'X')?.channelHref || ''} 
              onChange={handleBusinessDetailChange} 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="industry">Twitter Handle</Label>
            <Input 
              id="username" 
              placeholder="Enter your Twitter handle" 
              value={socialMediaLinks.find(link => link.channelName === 'X')?.username || ''} 
              onChange={handleBusinessDetailChange} 
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Business Description (120 characters)</Label>
          <Textarea
            id="companyMetaDescription"
            placeholder="Provide a brief description of your business"
            value={businessDetails.companyMetaDescription || ''}
            className="min-h-[120px]"
            onChange={handleBusinessDetailChange}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="website">Parent Company Name</Label>
            <Input 
              id="parentCompanyName" 
              placeholder="Enter your parent company name" 
              value={businessDetails.parentCompanyName || ''} 
              onChange={handleBusinessDetailChange} 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="industry">Parent Company Website</Label>
            <Input 
              id="parentCompanyHref" 
              placeholder="Enter your parent company website" 
              value={businessDetails.parentCompanyHref || ''} 
              onChange={handleBusinessDetailChange} 
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="website">Parent Company Address</Label>
            <Input 
              id="parentCompanyAddress" 
              placeholder="Enter your parent company address" 
              value={businessDetails.parentCompanyAddress || ''} 
              onChange={handleBusinessDetailChange} 
            />
          </div>
        </div>
        <h4 className="underline underline-offset-8">Website Information</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="website">Footer Disclaimer</Label>
            <Input 
              id="footerDisclaimers" 
              placeholder="Enter your footer disclaimer" 
              value={businessDetails.footerDisclaimers.join(', ') || ''} 
              onChange={handleBusinessDetailChange} 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="industry">Footer Slogan</Label>
            <Input 
              id="footerSlogan" 
              placeholder="Enter your footer slogan" 
              value={businessDetails.footerSlogan || ''} 
              onChange={handleBusinessDetailChange} 
            />
          </div>
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Footer Link List</AccordionTrigger>
            <AccordionContent>
              <LinkList links={links} onUpdateLinks={handleUpdateLinks} heading="Footer Links"/>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>FAQ List</AccordionTrigger>
            <AccordionContent>
              <FAQList faqs={faqs} onUpdateFaqs={handleUpdateFAQs} heading="General FAQs"/>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="website">Facebook Post Link Search</Label>
            <Input 
              id="facebook" 
              placeholder="Enter your Facebook post link text" 
              value={socialshare.find(link => link.channelName === 'facebook')?.shareTextInFrontOfURL || ''} 
              onChange={handleSocialShareChange} 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="industry">X Post Link Search</Label>
            <Input 
              id="X" 
              placeholder="Enter your X post link text" 
              value={socialshare.find(link => link.channelName === 'X')?.shareTextInFrontOfURL || ''} 
              onChange={handleSocialShareChange} 
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-end">
        <Button type="submit" onClick={handleSubmitDetails}>Save</Button>
      </CardFooter>
    </Card>
  )
}
