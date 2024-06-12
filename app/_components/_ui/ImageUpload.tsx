'use client'
import { Card, CardHeader, CardTitle, CardContent } from "@/ui/Card";
import { Button } from '@/ui/Button';
import axios from 'axios';
import { useState } from 'react';
import Image from 'next/image';

/*
THIS IS THE COMPONENT THAT WILL BE USED TO UPLOAD IMAGES TO THE DATABASE
*/



export default function ImageUpload(props: any) {
  const [image, setImage] = useState<string>('');

  const handleApiUpload = async () => {
    if (image !== '') {
      const response = await axios.post(`/api${props.apiKey}`, { img: image}).then((res) => {
        alert('Image uploaded successfully')
        setImage('');
        }).catch((error) => {
          console.log(props.apiKey)
          console.log(error.response.data);
        }
      );  
  }
  else {
    alert('Please upload an image')
  }
}
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
          setImage(result as string);
        } catch (error) {
          console.log(error);
        }
      }
    };
    input.click();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.heading}</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className="border-dashed border-2 border-gray-500 dark:border-gray-300 rounded-md h-60 flex items-center justify-center flex-col gap-4 cursor-pointer"
          onClick={uploadImage} // Move onClick here
        >
          <UploadIcon className="h-10 w-10 text-gray-500 dark:text-gray-300" />
          <p className="text-gray-500 dark:text-gray-300">Click or drag & drop to upload images</p>
        </div>
        {image && <img src={image} alt="Uploaded" className="mt-4 max-h-60" />}
        <Button className="mt-4 w-full" onClick={handleApiUpload}>Upload</Button>
      </CardContent>
    </Card>
  );
}

function UploadIcon(props: any) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
