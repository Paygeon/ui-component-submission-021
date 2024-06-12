// Import Types
// Import External Packages
import Link from 'next/link';
// Import Components
// Import Functions & Actions & Hooks & State
// Import Data
// Import Assets & Icons

/**
 * Renders a sticky top banner component.
 * This component displays a banner with a message.
 */
export default function StickyTopBanner() {
	return (
		<div className="w-full bg-neutral-200 text-center text-black space-y-2 py-2 px-12">
			<p className="text-center leading-6 tracking-wide">
				Customizable template with inbuilt CMS system by Madhav Murali{' '}
				<Link
					href="https://madhav-murali-nitc.github.io/github-portfolio/"
					className="underline"
				>
					<span className="font-semibold">(Portfolio)</span>
				</Link>{' '}
				{' '}
				<Link href="https://madhav-murali-nitc.github.io/github-portfolio/" className="underline">
					
				</Link>
				.
			</p>
			<p>
				What you see is what you get. Meaning, this is exactly what you get when
				you clone the repository and run the project.
			</p>
		</div>
	);
}
