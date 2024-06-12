'use client'
import { Suspense, useState, useEffect } from 'react';
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

export default function Home() {
  const [websiteInformation, setWebsiteInformation] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [websiteRes, constantsRes] = await Promise.all([
          axios.get('/api/websiteInformation'),
          axios.get('http://localhost:3000/api/populateConstants'),
        ]);
        setWebsiteInformation(websiteRes.data.websiteInformation[0]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col mx-auto">
      <Suspense fallback={<Loading />}>
      <Hero  />

        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Breaker_LG_3Features
              features={CATEGORIES_DESC}
              title={websiteInformation.breakerTopSubtext}
              subTitle={websiteInformation.breakerHeader}
              contentSubtext={websiteInformation.breakerSubHeader}
              content={websiteInformation.breakerContent}
            />
            {CATEGORIES.map((category) => (
              <CategoryOverview key={category} categoryName={category} />
            ))}
            <BreakerWithIcons />
            <FAQ faqs={GENERAL_FAQS} className="text-center max-w-3xl mt-8" />
            <NewsletterBox_BeeHiiv />
          </>
        )}
      </Suspense>
    </div>
  );
}
