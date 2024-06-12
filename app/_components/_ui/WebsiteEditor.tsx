import { useState, useEffect } from 'react';
import { Label } from "@/ui/Label";
import { Input } from "@/ui/Input";
import { Textarea } from "@/ui/Textarea";
import { Button } from "@/ui/Button";
import { toast } from "sonner";
import Loading from '@/app/loading';


/*
THIS IS THE COMPONENT THAT WILL BE USED TO UPLOAD WEBSITE INFORMATION TO THE DATABASE
*/

export default function WebsiteEditor() {
  const [formData, setFormData] = useState({
    heroHeader: '',
    heroSubHeader: '',
    breakerTopSubtext: '',
    breakerHeader: '',
    breakerSubHeader: '',
    breakerContent: ''
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/websiteInformation');
        const data = await response.json();
        if (data.websiteInformation && data.websiteInformation.length > 0) {
          const info = data.websiteInformation[0];
          setFormData({
            heroHeader: info.heroHeader,
            heroSubHeader: info.heroSubHeader,
            breakerTopSubtext: info.breakerTopSubtext,
            breakerHeader: info.breakerHeader,
            breakerSubHeader: info.breakerSubHeader,
            breakerContent: info.breakerContent
          });
        }
      } catch (error) {
        console.error('Failed to fetch website information:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/websiteInformation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success(
          'Website information successfully updated! 🎉'
        );;
      } else {
        toast.error(
          'Please make sure to fill out all the fields!'
        );;
      }
    } catch (error) {
      console.error('Error updating website information:', error);
      alert('An error occurred while updating website information.');
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-4 md:px-0">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="dark:text-white">
          <Label htmlFor="heroHeader">Hero Header</Label>
          <Input id="heroHeader" value={formData.heroHeader} onChange={handleChange} placeholder="Enter hero header" maxLength={50} required />
        </div>
        <div className="dark:text-white">
          <Label htmlFor="heroSubHeader">Hero Subheader</Label>
          <Input id="heroSubHeader" value={formData.heroSubHeader} onChange={handleChange} placeholder="Enter hero subheader" maxLength={100} required />
        </div>
        <div className="dark:text-white">
          <Label htmlFor="breakerTopSubtext">Page Top Text</Label>
          <Input id="breakerTopSubtext" value={formData.breakerTopSubtext} onChange={handleChange} placeholder="Enter page top text" maxLength={50} required />
        </div>
        <div className="dark:text-white">
          <Label htmlFor="breakerHeader">Page Header</Label>
          <Input id="breakerHeader" value={formData.breakerHeader} onChange={handleChange} placeholder="Enter page header" maxLength={50} required />
        </div>
        <div className="dark:text-white">
          <Label htmlFor="breakerSubHeader">Page Subheader</Label>
          <Input id="breakerSubHeader" value={formData.breakerSubHeader} onChange={handleChange} placeholder="Enter page subheader" maxLength={100} required />
        </div>
        <div className="dark:text-white"> 
          <Label htmlFor="breakerContent">Page Content</Label>
          <Textarea id="breakerContent" value={formData.breakerContent} onChange={handleChange} placeholder="Enter page content" className="h-40" maxLength={500} required />
        </div>
        <div className="flex justify-end ">
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  );
}
