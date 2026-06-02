import type { Metadata } from 'next';
import { DM_Mono, DM_Sans, Playfair_Display } from 'next/font/google';
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
				className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
