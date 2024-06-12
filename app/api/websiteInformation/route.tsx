import { NextResponse } from 'next/server';
import connectMongoDB from '@/app/libs/mongodb';
import WebsiteInformation from '@/app/models/WebsiteInformation';  // Capitalized the model name to follow conventions

export async function POST(req: Request) {
  await connectMongoDB();
  
  try {
    const websiteInformationData = await req.json();

    // Remove the old website information if present
    await WebsiteInformation.deleteMany({});

    // Create new website information
    const newWebsiteInformation = new WebsiteInformation({
      heroHeader: websiteInformationData.heroHeader,
      heroSubHeader: websiteInformationData.heroSubHeader,
      breakerTopSubtext: websiteInformationData.breakerTopSubtext,
      breakerHeader: websiteInformationData.breakerHeader,
      breakerSubHeader: websiteInformationData.breakerSubHeader,
      breakerContent: websiteInformationData.breakerContent
    });

    // Save the new website information
    await newWebsiteInformation.save();

    return NextResponse.json({ message: 'Website Information created successfully', websiteInformation: newWebsiteInformation });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  await connectMongoDB();
  
  try {
    const websiteInformation = await WebsiteInformation.find();

    return NextResponse.json({ websiteInformation });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
