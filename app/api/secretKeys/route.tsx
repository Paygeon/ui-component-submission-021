import { NextResponse } from 'next/server';
import connectMongoDB from '@/app/libs/mongodb';
import SecretKeys from '@/app/models/SecretKeys';
import fs from 'fs';
import path from 'path';

// Function to update .env.local file
const updateEnvFile = ({ umamiKey, beehiivKey }) => {
  // Path to the .env.local file
  const envPath = path.resolve(process.cwd(), '.env.local');

  // Read the existing .env.local file
  let envVariables = '';
  if (fs.existsSync(envPath)) {
    envVariables = fs.readFileSync(envPath, 'utf-8');
  }

  // Update the environment variables with new keys
  const newEnvVariables = envVariables
    .split('\n')
    .filter(line => !line.startsWith('NEXT_PUBLIC_BEEHIIV_EMBED_URL=') && !line.startsWith('NEXT_PUBLIC_UMAMI_ID='))
    .concat([
      `NEXT_PUBLIC_BEEHIIV_EMBED_URL='${beehiivKey}'`,
      `NEXT_PUBLIC_UMAMI_ID='${umamiKey}'`
    ])
    .join('\n');

  // Write the updated environment variables back to the .env.local file
  fs.writeFileSync(envPath, newEnvVariables, 'utf-8');
};

export async function GET() {
  await connectMongoDB();
  const secretKeys = await SecretKeys.findOne();

  if (secretKeys) {
    updateEnvFile(secretKeys);
  }

  return NextResponse.json(secretKeys);
}

export async function POST(req) {
  await connectMongoDB();
  const { umamiKey, beehiivKey } = await req.json();

  // Update the keys in the database or create if it doesn't exist
  const secretKeys = await SecretKeys.findOneAndUpdate(
    {},
    { umamiKey, beehiivKey },
    { new: true, upsert: true }
  );

  updateEnvFile(secretKeys);

  return NextResponse.json(secretKeys);
}
