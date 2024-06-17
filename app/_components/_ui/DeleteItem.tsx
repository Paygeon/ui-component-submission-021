import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/ui/Card";
import { RadioGroup, RadioGroupItem } from "@/ui/Radio-group";
import { Label } from "@/ui/Label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/ui/Select";
import { Button } from "@/ui/Button";
import { toast } from "sonner";
// @ts-nocheck

/*

THIS IS THE COMPONENT THAT WILL BE USED TO DELETE CATEGORIES AND PRODUCTS FROM THE DATABASE

*/



export default function DeleteItem() {
  const [selectedOption, setSelectedOption] = useState("category");
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [CATEGORIES,setCATEGORIES] = useState(["Electronics", "Clothing", "Books", "Home & Kitchen", "Beauty & Personal Care"]);

  useEffect(() => {

    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/categories/allSlugs");
        setCATEGORIES(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error.response.data);
      }
      
    }
    fetchCategories();
    if (selectedCategory) {
      // Fetch products for the selected category
      axios.get(`/api/categories/${selectedCategory}`)
        .then(response => {
          setProducts(response.data.map(product => product.slug));
        })
        .catch(error => {
          console.error("Error fetching products:", error.response.data);
        });
    }
  }, [selectedCategory,CATEGORIES]);

  const handleDelete = async () => {
    try {
      if (selectedOption === "category") {
        if (selectedCategory) {
          await axios.delete(`http://localhost:3000/api/categories/${selectedCategory}`);
          toast.success('Category successfully deleted! 🎉');
        } else {
          toast.error('Please select a category to delete.');
        }
      } else if (selectedOption === "product") {
        if (selectedCategory && selectedProduct) {
          await axios.delete(`http://localhost:3000/api/products/${selectedCategory}/${selectedProduct}`);
          toast.success('Product successfully deleted! 🎉');
        } else {
          if (!selectedCategory) {
            toast.error('Please select a category first.');
          } else {
            toast.error('Please select a product to delete.');
          }
        }
      } else {
        toast.error('Please select an option to delete.');
      }
    } catch (error) {
      console.error("Error deleting item:", error.response?.data || error.message);
      toast.error("An error occurred while deleting the item.");
    }
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Delete Item</CardTitle>
        <CardDescription>Choose whether to delete a category or a product.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <RadioGroup defaultValue="category" className="grid grid-cols-2 gap-4" onValueChange={setSelectedOption}>
          <div>
            <RadioGroupItem value="category" id="category" className="peer sr-only" />
            <Label
              htmlFor="category"
              className="flex flex-col items-center justify-between rounded-md border-2 border-gray-100 bg-white p-4 hover:bg-gray-100 hover:text-gray-900 peer-data-[state=checked]:border-gray-900 [&:has([data-state=checked])]:border-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:peer-data-[state=checked]:border-gray-50 dark:[&:has([data-state=checked])]:border-gray-50"
            >
              Category
            </Label>
          </div>
          <div>
            <RadioGroupItem value="product" id="product" className="peer sr-only" />
            <Label
              htmlFor="product"
              className="flex flex-col items-center justify-between rounded-md border-2 border-gray-100 bg-white p-4 hover:bg-gray-100 hover:text-gray-900 peer-data-[state=checked]:border-gray-900 [&:has([data-state=checked])]:border-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:peer-data-[state=checked]:border-gray-50 dark:[&:has([data-state=checked])]:border-gray-50"
            >
              Product
            </Label>
          </div>
        </RadioGroup>
        {selectedOption === "category" && (
          <div className="grid gap-2">
            <Label htmlFor="category-select">Select Category</Label>
            <Select  onValueChange={setSelectedCategory}>
              
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((category, index) => (
                  <SelectItem key={index} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
        {selectedOption === "product" && (
          <>
            <div className="grid gap-2">
              <Label htmlFor="category-select">Select Category</Label>
              <Select  onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((category, index) => (
                    <SelectItem key={index} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="product-select">Select Product</Label>
              <Select  onValueChange={setSelectedProduct}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a product" />
                </SelectTrigger>
                <SelectContent>
                  {products.map((product, index) => (
                    <SelectItem key={index} value={product}>{product}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </>
        )}
        <div className="flex flex-col gap-2 lg:flex-row">
          <Button size="lg" variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
          <Button size="lg" variant="outline">
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
