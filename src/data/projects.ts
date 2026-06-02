export type ProjectCaseStudy = {
	slug: string;
	title: string;
	eyebrow: string;
	location: string;
	category: string;
	summary: string;
	heroImage: string;
	images: string[];
	services: string[];
	challenge: string;
	approach: string;
	result: string;
};

export const projectCaseStudies: ProjectCaseStudy[] = [
	{
		slug: 'kitchen-remodel',
		title: 'Kitchen Remodel',
		eyebrow: 'Residential Remodel',
		location: 'Aptos, California',
		category: 'Remodel',
		summary:
			'A residential kitchen transformation focused on improved function, elevated finishes, and a cleaner everyday living experience.',
		heroImage: '/projects/kitchen-01.webp',
		images: [
			'/projects/641-kitchen-2.webp',
			'/projects/kitchen-03.webp',
			'/projects/project-04.webp',
		],
		services: [
			'Kitchen Remodel',
			'Finish Carpentry',
			'Cabinetry',
			'Interior Updates',
		],
		challenge:
			'The existing kitchen needed a more functional layout, better visual flow, and finishes that felt current without losing warmth.',
		approach:
			'Mirelez Construction focused on clear planning, careful sequencing, and detail-driven execution to create a space that feels polished, practical, and built to last.',
		result:
			'The finished remodel delivers a more refined kitchen experience with stronger usability, better light, and a higher-end finish throughout.',
	},
	{
		slug: 'custom-home-build',
		title: 'Custom Home Build',
		eyebrow: 'Ground-Up Construction',
		location: 'Central Valley, California',
		category: 'Custom Home',
		summary:
			'A custom residential build shaped around planning, craftsmanship, communication, and long-term quality.',
		heroImage: '/projects/project-05.webp',
		images: [
			'/projects/homebuild-05.webp',
			'/projects/homebuild-06.webp',
			'/projects/homebuild-07.webp',
			'/projects/project-08.webp',
		],
		services: ['Custom Home', 'Framing', 'Exterior Work', 'Interior Build-Out'],
		challenge:
			'Ground-up construction requires tight coordination, dependable communication, and attention to every stage of the build.',
		approach:
			'The project was handled with a focus on planning, structural execution, clean workmanship, and consistent communication from start to finish.',
		result:
			'A custom home project built with care, clarity, and the kind of craftsmanship that creates confidence throughout the process.',
	},
	{
		slug: 'commercial-build-out',
		title: 'Commercial Build-Out',
		eyebrow: 'Commercial Construction',
		location: 'Central Valley, California',
		category: 'Commercial',
		summary:
			'A commercial construction project built around dependable execution, clean finishes, and a professional client experience.',
		heroImage: '/projects/project-09.webp',
		images: [
			'/projects/project-09.webp',
			'/projects/project-10.webp',
			'/projects/project-11.webp',
			'/projects/project-12.webp',
		],
		services: [
			'Commercial Construction',
			'Build-Out',
			'Site Improvements',
			'Finish Work',
		],
		challenge:
			'Commercial projects need efficient execution, durable workmanship, and clear communication so businesses can keep moving forward.',
		approach:
			'Mirelez Construction brought a practical, organized approach to the build with attention to schedule, scope, and professional presentation.',
		result:
			'The completed project provides a reliable commercial space with clean construction, strong usability, and a professional finish.',
	},
];

export function getProjectBySlug(slug: string) {
	return projectCaseStudies.find(project => project.slug === slug);
}
