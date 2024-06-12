import { NextResponse } from 'next/server';
import connectMongoDB from '@/app/libs/mongodb';
import Product from '@/app/models/Product';
import Category from '@/app/models/Category';

export async function POST(req: Request) {
  await connectMongoDB();
  
  try {
    const productData = await req.json();

    // Check if the category exists
    const category = await Category.findOne({ slug: productData.category });

    if (!category) {
      return NextResponse.json(
        { error: `Category with slug ${productData.category} not found.` },
        { status: 404 }
      );
    }

    // Create a new product
    const newProduct = new Product({
      componentName: productData.componentName,
      category: productData.category,
      slug: productData.slug,
      shortDescription: productData.shortDescription,
      longDescription: productData.longDescription,
      hasImage: productData.hasImage,
      imageUrl: productData.imageUrl,
      imageAlt: productData.imageAlt,
      hasComponentCode: productData.hasComponentCode,
      tags: productData.tags,
      techStack: productData.techStack,
      examples: productData.examples,
      faq: productData.faq,
      metaDescription: productData.metaDescription,
      metaTitle: productData.metaTitle,
      license: productData.license,
      markdown: productData.markdown,
      typescript: productData.typescript
    });

    // Save the new product to the database
    await newProduct.save();

    return NextResponse.json({ message: 'Product created successfully', product: newProduct });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

