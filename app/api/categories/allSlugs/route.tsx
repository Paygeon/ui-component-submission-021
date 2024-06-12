import { NextResponse } from 'next/server';
import connectMongoDB from '@/app/libs/mongodb'; 
import Category from '@/app/models/Category';



// GET REQUEST (Returns a list of category slugs)
export async function GET(req: Request) {
    await connectMongoDB();
    try {
        const categories = await Category.find().select('slug');
        const slugs = categories.map(category => category.slug);
        return NextResponse.json(slugs);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
