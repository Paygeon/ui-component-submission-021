import { NextResponse } from 'next/server';
import connectMongoDB from '@/app/libs/mongodb';
import Product from '@/app/models/Product';
import Category from '@/app/models/Category';

export const GET = async (
  request: Request,
  { params }: { params: { category: string } }
) => {
  const { category } = params;
  await connectMongoDB();

  try {
    // Find the category by slug
    const categoryCheck = await Category.findOne({ slug : category });

    if (!categoryCheck) {
      return NextResponse.json(
        { error: `Category with slug ${category} not found.` },
        { status: 404 }
      );
    }

    // Find all products by category slug
    const products = await Product.find({ category : category });

    // Map products to their frontmatter
    const frontmatters = products.map(product => ({
      componentName: product.componentName,
      category: category,
      slug: product.slug,
      shortDescription: product.shortDescription,
      longDescription: product.longDescription,
      hasImage: product.hasImage,
      imageUrl: product.imageUrl,
      imageAlt: product.imageAlt,
      hasComponentCode: product.hasComponentCode,
      tags: product.tags,
      techStack: product.techStack,
      examples: product.examples,
      faq: product.faq,
      metaDescription: product.metaDescription,
      metaTitle: product.metaTitle,
      license: product.license,
      productLine: product.categorySlug
    }));

    return NextResponse.json(frontmatters);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};



// DELETE Handler
export const DELETE = async (
  request: Request,
  { params }: { params: { category: string } }
) => {
  const { category } = params;
  console.log('DELETE request:', request); // Debug log
  console.log('DELETE params:', params); // Debug log
  await connectMongoDB();

  try {
    // Find the category by slug
    const categoryFound = await Category.findOne({ slug: category });

    if (!categoryFound) {
      return NextResponse.json(
        { error: `Category with slug ${category} not found.` },
        { status: 404 }
      );
    }

    // Delete the category
    await Category.deleteOne({ slug: category });

    return NextResponse.json({ message: `Category with slug ${category} deleted.` });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};