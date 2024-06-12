'use client'
// Import Types
// Import External Packages
// Import Components
import ConfettiButton from '@/components/ConfettiButton';
// Import Functions & Actions & Hooks & State
import { cn } from '@/lib/utils';
// Import Data
// Import Assets & Icons
import {Suspense, useEffect,useState} from 'react';
import axios from 'axios';


/**
 * Renders the Hero component.
 *
 * @param className - The optional class name for the component.
 * @returns The rendered Hero component.
 */
export default function Hero({ className }: { className?: string }) {
	const [heroHeader, setHeroHeader] = useState('');
	const [heroSubHeader, setHeroSubHeader] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get('/api/websiteInformation');
			setHeroHeader(response.data.websiteInformation[0].heroHeader);
			setHeroSubHeader(response.data.websiteInformation[0].heroSubHeader);
		}
		fetchData();
	}
		
	, []);


	return (
		<Suspense fallback={<div>Loading...</div>}>
		<div className={cn('dark:bg-black max-w-5xl mx-auto', className)}>
			<div className="mx-auto max-w-7xl py-16">
				<div className="mx-auto text-center">
					<h1 className="transition-opacity duration-5000 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl max-w-2xl mx-auto">
						{heroHeader}
					</h1>

					<p className="transition-opacity duration-5000 mt-6 text-lg leading-8 text-muted-foreground dark:text-zinc-200 max-w-4xl mx-auto">
						{heroSubHeader}
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<ConfettiButton />
					</div>
				</div>
			</div>
		</div>
		</Suspense>
	);
}
