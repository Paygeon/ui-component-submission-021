import { NextResponse } from 'next/server';
import connectMongoDB from '@/app/libs/mongodb'; 
import Category from '@/app/models/Category';


export const GET = async (req: Request) => {
    await connectMongoDB();
    try {
        const categories = await Category.find();
        const slugs = categories.map(category => {
            return {
                name: category.name,
                slug: category.slug,
                description: category.description,
                addTextToProductPage: category.addTextToProductPage,
                href: category.href

            }
        });
        return NextResponse.json(slugs);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}