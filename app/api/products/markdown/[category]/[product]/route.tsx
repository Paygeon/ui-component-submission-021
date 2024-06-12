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

    // Find the product by slug and category skyg
    const productData = await Product.findOne({ slug: product, category: category});

    if (!productData) {
      return NextResponse.json(
        { error: `Product with slug ${product} in category ${category} not found.` },
        { status: 404 }
      );
    }

    // Extract the markdown content
    const markdownContent = productData.markdown;

    return NextResponse.json({ markdownContent });
  } catch (error : any) {
    return NextResponse.json({ error : error.message }, { status: 500 });
  }
}
