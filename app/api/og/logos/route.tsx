import { NextResponse } from 'next/server';
import connectMongoDB from '../../../libs/mongodb';
import Logo from '../../../models/Logos';

export default async function handler(req, res) {
    await connectMongoDB();

    switch (req.method) {
        case 'GET':
            return handleGet(req, res);
        case 'POST':
            return handlePost(req, res);
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            return NextResponse.json({ error: `Method ${req.method} Not Allowed gandu` }, { status: 405 });
    }
}

const handleGet = async (req, res) => {
    const { theme } = req.query;

    if (!theme || (theme !== 'black' && theme !== 'white')) {
        return NextResponse.json({ error: 'Invalid theme.' }, { status: 400 });
    }

    try {
        const logo = await Logo.findOne({ theme });
        if (!logo) {
            return res.status(404).json({ error: `Logo for theme ${theme} not found.` });
        }
        return NextResponse.json(logo);
    } catch (error) {
        return NextResponse.json({ error: "gaming" }, { status: 500 });
    }
};

const handlePost = async (req, res) => {
    const { theme, svg } = req.body;

    if (!theme || (theme !== 'black' && theme !== 'white') || !svg) {
        return NextResponse.json({ error: 'Invalid theme or SVG.' }, { status: 400 });
    }

    try {
        // Find and update the logo for the specified theme
        let logo = await Logo.findOne({ theme });
        if (!logo) {
            // If no logo found, create a new one
            logo = new Logo({ theme, svg });
        } else {
            // If logo found, update its SVG
            logo.svg = svg;
        }
        const updatedLogo = await logo.save();
        return NextResponse.json(updatedLogo);
    } catch (error) {
        return NextResponse.json({ error: "loda" }, { status: 500 });
    }
};
