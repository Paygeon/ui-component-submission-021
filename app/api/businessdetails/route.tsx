
import { NextResponse } from 'next/server';
import connectMongoDB from '../../libs/mongodb';
import BusinessDetails from '@/app/models/BusinessDetails';

//GET REQUEST FOR BUSINESS DETAILS

export async function GET(req: Request) {
    await connectMongoDB();
    try {
        const businessDetails = await BusinessDetails.find();
        return NextResponse.json(businessDetails);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
export async function POST(req: Request) {
    await connectMongoDB();
    try {
        // Parse the incoming request body to extract the business details
        const businessDetailsData = await req.json();
        //replace the old business data with the new one by deleting old and replacing new

        await BusinessDetails.deleteMany();
        await BusinessDetails.create(businessDetailsData);
        return NextResponse.json({ message: 'Business Details saved successfully' });
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

}
        
       


       

    