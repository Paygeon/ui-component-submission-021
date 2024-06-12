import { NextResponse } from 'next/server';
import connectMongoDB from '@/app/libs/mongodb';
import Product from '@/app/models/Product';
import Category from '@/app/models/Category';
import fs from 'fs';
import path from 'path';


export async function GET(
  request: Request,
  { params }: { params: { category: string; product: string } }
) {
  try {
    const { category, product } = params;

    // Connect to MongoDB
    await connectMongoDB();

    // Find the category by slug
    const categoryFound = await Category.findOne({ slug: category });
    if (!categoryFound) {
      return NextResponse.json(
        { error: `Category with slug ${category} not found.` },
        { status: 404 }
      );
    }

    // Find the product by slug and category slug
    const productData = await Product.findOne({
      slug: product,
      category: category,
    });
    if (!productData) {
      return NextResponse.json(
        { error: `Product with slug ${product} in category ${category} not found.` },
        { status: 404 }
      );
    }

    // Extract the typescript content
    const typescriptContent = productData.typescript;

    // Define the directory and file path
    const directoryPath = path.join(process.cwd(), 'app', 'typescripts');
    const filePath = path.join(directoryPath, `${category}-${product}.tsx`);

    // Ensure the directory exists
    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath, { recursive: true });
    }

    // Write the TypeScript content to the file
    fs.writeFileSync(filePath, typescriptContent);

    return NextResponse.json({ message: 'File created successfully', filePath });
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request, { params }: { params: { category: string; product: string } }) {
  try {
    const { category, product } = params;
    const contentType = request.headers.get('content-type');
    console.log("params are",category,product );
    if (!contentType || !contentType.includes('multipart/form-data')) {
      return NextResponse.json({ error: 'Invalid Content-Type' }, { status: 400 });
    }

    const formData = await request.formData();
    const file = formData.get('file');

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: 'No file uploaded or invalid file' }, { status: 400 });
    }

    const content = await file.text();

    // Save the typescript content as a file
    const directoryPath = path.join(process.cwd(), 'app', 'typescripts');
    const filePath = path.join(directoryPath, `${category}-${product}.tsx`);

    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath, { recursive: true });
    }

    fs.writeFileSync(filePath, content);

    return NextResponse.json({ message: 'File saved successfully' });
  } catch (error) {
    console.error('Error saving file:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

