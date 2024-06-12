import Key from "@/app/models/Keys";
import { NextResponse } from "next/server";
import connectMongoDB from "@/app/libs/mongodb";


//POST REQUEST(REPLACES PREVIOUS KEY)

export async function POST(req:Request){
    const {key,value} = await req.json();

    let k = await Key.findOne({key});
    if(k){
        k.value = value;
    }
    else{
        k = new Key({key,value});
    }
    await k.save();
    return NextResponse.json({message: 'Key saved successfully'});
}


//GETS ALL KEYS(FILTER IN FRONTEND)

export async function GET(req:Request){
    await connectMongoDB();
    try{
        const keys = await Key.find();
        return NextResponse.json(keys);

    }catch(error){
        return NextResponse.json({error: error.message}, {status: 500});
    }
}

