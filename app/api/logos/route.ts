import { NextResponse } from 'next/server';
import connectMongoDB from '../../libs/mongodb'; 
import Logo from '../../models/Logos'; 



//POST REQUEST(REPLACES PREVIOUS LOGO)
export async function POST(req:Request){
    const {theme,img} = await req.json();

    let logo = await Logo.findOne({theme});
    if(logo){
        logo.img = img;
    }
    else{
        logo = new Logo({theme,img});
    }
    await logo.save();
    return NextResponse.json({message: 'Logo saved successfully'});
}


//GETS ALL LOGOS(FILTER IN FRONTEND)
export async function GET(req:Request){
    await connectMongoDB();
    try{
        const logos = await Logo.find();
        return NextResponse.json(logos);

    }catch(error :any){
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
    



