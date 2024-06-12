import connectMongoDB from "@/app/libs/mongodb";
import Key from "@/app/models/Keys";
import { NextResponse } from "next/server";



//GET REQUEST(GETS LOGO BY THEME)
export async function GET(
    request : Request,
    {params} : {params: {key: string}}
){
    const {key} = params;
    await connectMongoDB();
    try{
        const keys = await Key.findOne({key});
        if(!keys){
            return NextResponse.json({error: `Logo for theme ${key} not found.`}, {status: 404});
        }
        return NextResponse.json(keys);
}
    catch(error :any){
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
