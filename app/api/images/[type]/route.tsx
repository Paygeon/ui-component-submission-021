import connectMongoDB from "@/app/libs/mongodb";
import Image from "@/app/models/Images";
import { NextResponse } from "next/server";



//GET REQUEST(GETS LOGO BY THEME)
export async function GET(
    request : Request,
    {params} : {params: {type: string}}
){
    const {type} = params;
    await connectMongoDB();
    try{
        const logo = await Image.findOne({type});
        if(!logo){
            return NextResponse.json({error: `Image for theme ${type} not found.`}, {status: 404});
        }
        return NextResponse.json(logo);
}
    catch(error){
        return NextResponse.json({error: error.message}, {status: 500});
    }
}

//POST REQUEST TO REPLACE OLD IMAGE OR ADD NEW IMAGE TO THE BACKEND
export async function POST(
    request : Request,
    {params} : {params: {type: string}}
){
    
        const {type} = params;
        const {img} = await request.json();
        await connectMongoDB();
        try{
            let image = await Image.findOne({type});
            if(image){
                image.img = img;
            }
            else{
                image = new Image({type,img});
            }
            await image.save();
            return NextResponse.json({message: 'Image saved successfully'});
        }
        catch(error){
            console.log("this is an api error")
            return NextResponse.json({error: error.message}, {status: 500});
        }
    }