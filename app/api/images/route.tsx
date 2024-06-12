import { NextResponse } from 'next/server';
import connectMongoDB from '../../libs/mongodb'; 
import Image from '../../models/Images'; 



//POST REQUEST(REPLACES PREVIOUS LOGO)
export async function POST(req:Request){
    const {type,img} = await req.json();

    let image = await Image.findOne({type});
    if(image){
        image.svg = img;
    }
    else{
        image = new Image({type,img});
    }
    await image.save();
    return NextResponse.json({message: 'Image saved successfully'});
}


//GETS ALL LOGOS(FILTER IN FRONTEND)
export async function GET(req:Request){
    await connectMongoDB();
    try{
        const logos = await Image.find();
        return NextResponse.json(logos);

    }catch(error){
        return NextResponse.json({error: error.message}, {status: 500});
    }
}