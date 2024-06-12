import { NextResponse } from 'next/server';
import connectMongoDB from '../../libs/mongodb'; 
import {Icon} from '../../models/Icons'; 



//POST REQUEST(REPLACES PREVIOUS Icon IF EXISTS ELSE CREATES NEW Icon)
export async function POST(req:Request){
    const {dimension,img} = await req.json();

    let icon = await Icon.findOne({dimension});
    if(icon){
        icon.svg = img;
    }
    else{
        icon = new Icon({dimension,img});
    }
    await icon.save();
    return NextResponse.json({message: 'Logo saved successfully'});
}


//GETS ALL LOGOS(FILTER IN FRONTEND)
export async function GET(req:Request){
    await connectMongoDB();
    try{
        const logos = await Icon.find();
        return NextResponse.json(logos);

    }catch(error){
        return NextResponse.json({error: error.message}, {status: 500});
    }
}