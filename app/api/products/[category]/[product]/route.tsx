import { NextResponse } from 'next/server';
import connectMongoDB from '@/app/libs/mongodb';
import Product from '@/app/models/Product';
import Category from '@/app/models/Category';

export async function DELETE(request: Request, { params }: { params: { category: string; product: string } }) {
    const { category, product } = params;
    await connectMongoDB();

    try {
        const categoryExists = await Category.exists({ slug: category });
        if (!categoryExists) {
            return NextResponse.json({ message: 'Category not found' }, { status: 403 });
        }

        const productExists = await Product.exists({ slug: product });
        if (!productExists) {
            return NextResponse.json({ message: 'Product not found' }, { status: 403 });
        }

        await Product.deleteOne({ slug: product });
        return NextResponse.json({ message: 'Product deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting product:', error);
        return NextResponse.json({ message: 'An error occurred while deleting the product' }, { status: 500 });
    }
}
