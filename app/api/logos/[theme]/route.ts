import connectMongoDB from "@/app/libs/mongodb";
import Logo from "@/app/models/Logos";
import { NextResponse } from "next/server";



//GET REQUEST(GETS LOGO BY THEME)
export async function GET(
    request : Request,
    {params} : {params: {theme: string}}
){
    const {theme} = params;
    await connectMongoDB();
    try{
        const logo = await Logo.findOne({theme});
        if(!logo){
            return NextResponse.json({error: `Logo for theme ${theme} not found.`}, {status: 404});
        }
        return NextResponse.json(logo);
}
    catch(error){
        return NextResponse.json({error: error.message}, {status: 500});
    }
}


export async function POST(
    request : Request,
    {params} : {params: {theme: string}}
){
    const {theme} = params;
    const body = await request.json();
    console.log(body);
    await connectMongoDB();
    try{
        const logo = await Logo.findOneAndUpdate({theme}, body, {new: true, upsert: true});
        return NextResponse.json(logo);
    }
    catch(error){
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
