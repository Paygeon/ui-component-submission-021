import axios from 'axios';
import { CATEGORIES_DESC, GENERAL_FAQS } from '@/constants';
import { CATEGORIES } from '@/constants';
import Hero from '@/components/Hero';
import Breaker_LG_3Features from '@/components/Breaker_LG_3Features';
import CategoryOverview from '@/components/CategoryOverview';
import BreakerWithIcons from '@/components/BreakerWithIcons';
import FAQ from '@/components/FAQ';
import NewsletterBox_BeeHiiv from '@/components/NewsletterBox_BeeHiiv';
import Loading from './loading';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { Sign } from 'crypto';

const fetchWebsiteInformation = async () => {
  try {
    const websiteRes = await axios.get('http://localhost:3000/api/websiteInformation');
    return websiteRes.data.websiteInformation[0];
  } catch (error) {
    console.error('Error fetching website information:', error);
    throw new Error('Website information not found');
  }
};

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();

  if (!isLoggedIn) {
    console.log("User not logged in, redirecting to login page");
    redirect('/api/auth/login');
  }
  else{
    redirect('/dashboard');
  }



  return (
    <div className="flex flex-col min-h-[100dvh]">
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Simplify your workflow
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Our platform helps you focus on what matters most - building great products.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <RegisterLink
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                >
                  Sign Up
                </RegisterLink>
                <LoginLink
                
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                
                >
                  Sign In
                </LoginLink>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
  
  );
}
