import { useState,useEffect, use } from "react";
import axios from "axios";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/ui/Card";
import { Label } from "@/ui/Label";
import { Input } from "@/ui/Input";
import { Textarea } from "@/ui/Textarea";
import { Button } from "@/ui/Button";
import {toast} from 'sonner'


/*

THIS IS THE COMPONENT THAT WILL BE USED TO UPLOAD CATEGORIES TO THE DATABASE

*/





export default function CategoryUpload() {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    addTextToProductPage: "",
    href: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/categories", formData);
      // Clear form after successful submission if needed
      setFormData({
        name: "",
        slug: "",
        description: "",
        addTextToProductPage: "",
        href: "",
      });
      toast.success(
        'Category Successfully uploaded! 🎉'
      );
    } catch (error) {
      console.error("Error uploading category:", error);
    }
  };

  use

  return (
    <Card className="w-full max-w-md">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Create New Component</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Buttons"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="slug">Slug</Label>
            <Input
              id="slug"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              placeholder="buttons"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Buttons rule the world. Get the best buttons for your next project."
              className="min-h-[100px]"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="addTextToProductPage">Add Text to Product Page</Label>
            <Input
              id="addTextToProductPage"
              name="addTextToProductPage"
              value={formData.addTextToProductPage}
              onChange={handleChange}
              placeholder="Enter text"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="href">Link</Label>
            <Input
              id="href"
              name="href"
              value={formData.href}
              onChange={handleChange}
              placeholder="#buttons"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="ml-auto">
            Save
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
