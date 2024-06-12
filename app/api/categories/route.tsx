import { NextResponse } from 'next/server';
import connectMongoDB from '@/app/libs/mongodb'; 
import Category from '@/app/models/Category';

// POST REQUEST (Creates or updates a category)
export async function POST(req: Request) {
    const { name, slug, description, addTextToProductPage, href } = await req.json();

    await connectMongoDB();

    let category = await Category.findOne({ slug });
    if (category) {
        category.name = name;
        category.description = description;
        category.addTextToProductPage = addTextToProductPage;
        category.href = href;
    } else {
        category = new Category({ name, slug, description, addTextToProductPage, href });
    }

    await category.save();
    return NextResponse.json({ message: 'Category saved successfully' });
}




