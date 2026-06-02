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

export const metadata: Metadata = {
	title: 'Mirelez Construction — Built With Integrity',
	description:
		'Premium residential and commercial construction in California’s Central Valley.',
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
