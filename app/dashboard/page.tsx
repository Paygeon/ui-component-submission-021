import axios from 'axios';
import { CATEGORIES_DESC, GENERAL_FAQS } from '@/constants';
import { CATEGORIES } from '@/constants';
import Hero from '@/components/Hero';
import Breaker_LG_3Features from '@/components/Breaker_LG_3Features';
import CategoryOverview from '@/components/CategoryOverview';
import BreakerWithIcons from '@/components/BreakerWithIcons';
import FAQ from '@/components/FAQ';
import NewsletterBox_BeeHiiv from '@/components/NewsletterBox_BeeHiiv';
import Loading from '../loading';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

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

  const websiteInformation = await fetchWebsiteInformation();

  return (
    <div className="flex flex-col mx-auto">
      <Hero />
      <Breaker_LG_3Features
        // @ts-ignore
        features={CATEGORIES_DESC}
        title={websiteInformation.breakerTopSubtext}
        subTitle={websiteInformation.breakerHeader}
        contentSubtext={websiteInformation.breakerSubHeader}
        content={websiteInformation.breakerContent}
      />
      {CATEGORIES.map((category) => (
        <CategoryOverview // @ts-ignore 
        key={category}  categoryName={category} />
      ))}
      <BreakerWithIcons />
      <FAQ faqs={GENERAL_FAQS} className="text-center max-w-3xl mt-8" />
      <NewsletterBox_BeeHiiv />
    </div>
  );
}
