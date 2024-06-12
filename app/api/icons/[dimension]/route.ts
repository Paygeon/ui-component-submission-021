import connectMongoDB from "@/app/libs/mongodb";
import {Icon} from "@/app/models/Icons";
import { NextResponse } from "next/server";



//GET REQUEST(GETS ICON BY THEME)
export async function GET(
    request : Request,
    {params} : {params: {dimension: string}}
){
    const {dimension} = params;
    await connectMongoDB();
    try{
        const icon= await Icon.findOne({dimension});
        if(!icon){
            return NextResponse.json({error: `Logo for theme ${dimension} not found.`}, {status: 404});
        }
        return NextResponse.json(icon);
}
    catch(error){
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
//POST REQUEST REPLACES ICON IF EXISTS ELSE CREATES NEW LOGO
export async function POST(
    request : Request,
    {params} : {params: {dimension: string}}
){

    const {dimension} = params;
    const {img} = await request.json();
    await connectMongoDB();
    try{
        let icon = await Icon.findOne({dimension});
        if(icon){
            icon.img = img;
        }
        else{
            icon = new Icon({dimension,img});
        }
        await icon.save();
        return NextResponse.json({message: 'Logo saved successfully'});
    }
    catch(error){
        console.log("this is an api error")
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
    