import type { Metadata } from 'next';
import { DM_Mono, DM_Sans, Playfair_Display } from 'next/font/google';

import { ThemeProvider } from '@/components/providers/theme-provider';
import { SiteFooter } from '@/components/site/site-footer';
import { SiteHeader } from '@/components/site/site-header';

import './globals.css';

const playfair = Playfair_Display({
	variable: '--font-serif',
	subsets: ['latin'],
	weight: ['400', '700'],
	style: ['normal', 'italic'],
});

const dmSans = DM_Sans({
	variable: '--font-sans',
	subsets: ['latin'],
	weight: ['300', '400', '500'],
});

const dmMono = DM_Mono({
	variable: '--font-mono',
	subsets: ['latin'],
	weight: ['400'],
});

const siteUrl = 'https://mirelez-site.vercel.app';

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: 'Mirelez Construction | Central Valley Contractor',
		template: '%s | Mirelez Construction',
	},
	description:
		'Custom homes, remodels, commercial construction, kitchen remodels, bathroom renovations, and project build-outs in California’s Central Valley.',
	keywords: [
		'Mirelez Construction',
		'Central Valley contractor',
		'Central Valley construction',
		'custom homes Central Valley',
		'kitchen remodel Central Valley',
		'bathroom remodel Central Valley',
		'commercial construction Central Valley',
		'residential remodel contractor',
	],
	authors: [{ name: 'Mirelez Construction' }],
	creator: 'Mirelez Construction',
	publisher: 'Mirelez Construction',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: siteUrl,
		siteName: 'Mirelez Construction',
		title: 'Mirelez Construction | Central Valley Contractor',
		description:
			'Custom homes, remodels, and commercial construction in California’s Central Valley.',
		images: [
			{
				url: '/images/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Mirelez Construction project work',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Mirelez Construction | Central Valley Contractor',
		description:
			'Custom homes, remodels, and commercial construction in California’s Central Valley.',
		images: ['/images/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-image-preview': 'large',
			'max-snippet': -1,
			'max-video-preview': -1,
		},
	},
	alternates: {
		canonical: '/',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable} bg-[var(--site-bg)] font-sans text-[var(--site-fg)] antialiased`}
			>
				<ThemeProvider>
					<SiteHeader />
					{children}
					<SiteFooter />
				</ThemeProvider>
			</body>
		</html>
	);
}
