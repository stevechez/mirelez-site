const businessSchema = {
	'@context': 'https://schema.org',
	'@type': 'GeneralContractor',
	name: 'Mirelez Construction',
	url: 'https://mirelez-site.vercel.app',
	logo: 'https://mirelez-site.vercel.app/images/mirelez-logo-transparent-light.png',
	image: 'https://mirelez-site.vercel.app/images/og-image.jpg',
	description:
		'Custom homes, remodels, commercial construction, kitchen remodels, bathroom renovations, and project build-outs in California’s Central Valley.',
	telephone: '+12096311892',
	email: 'MirelezConstruction@gmail.com',
	areaServed: [
		{
			'@type': 'Place',
			name: 'California Central Valley',
		},
	],
	address: {
		'@type': 'PostalAddress',
		addressRegion: 'CA',
		addressCountry: 'US',
	},
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '09:00',
			closes: '17:00',
		},
	],
	sameAs: ['https://www.instagram.com/mirelezconstruction'],
	priceRange: '$$',
};

export function LocalBusinessSchema() {
	return (
		<script
			type="application/ld+json"
			suppressHydrationWarning
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(businessSchema),
			}}
		/>
	);
}
