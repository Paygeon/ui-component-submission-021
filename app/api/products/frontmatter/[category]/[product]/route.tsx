import { NextResponse } from 'next/server';
import connectMongoDB from '@/app/libs/mongodb';
import Product from '@/app/models/Product';
import Category from '@/app/models/Category';

export async function GET(
  request: Request,
  { params }: { params: { category: string; product: string } }
) {
  const { category, product } = params;
  await connectMongoDB();

  try {
    // Find the category by slug
    const categoryFound = await Category.findOne({ slug: category });

    if (!category) {
      return NextResponse.json(
        { error: `Category with slug ${category} not found.` },
        { status: 404 }
      );
    }

    // Find the product by slug and category slug
    const productData = await Product.findOne({
      slug: product,
      category: category
    });
   

    if (!productData) {
      return NextResponse.json(
        { error: `Product with slug ${product} in category ${category} not found.` },
        { status: 404 }
      );
    }

    // Extract the frontmatter content
    const frontmatter = {
        "componentName": productData.componentName,
        "category": productData.category,
        "slug": productData.slug,
        "shortDescription": productData.shortDescription,
        "longDescription": productData.longDescription,
        "hasImage": true,
        "imageUrl": productData.imageUrl,
        "imageAlt": productData.imageAlt,
        "hasComponentCode": true,
        "tags": productData.tags,
        "examples": productData.examples,
        "faq": productData.faq,
        "metaDescription": productData.metaDescription,
        "metaTitle": productData.metaTitle,
        "license": productData.license,
        "productLine": productData.category,
        "techStack": productData.techStack
      }

    return NextResponse.json({ frontmatter });
  } catch (error : any) {
    return NextResponse.json({ error : error.message }, { status: 500 });
  }
}
