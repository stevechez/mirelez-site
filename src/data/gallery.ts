export type GalleryImage = {
	id: string;
	src: string;
};

export type BeforeAfterProject = {
	id: string;
	title: string;
	category: string;
	description: string;
	beforeSrc: string;
	afterSrc: string;
	beforeAlt: string;
	afterAlt: string;
};

export const galleryImages: GalleryImage[] = [
	{
		id: 'project-01',
		src: '/projects/project-01.webp',
	},
	{
		id: 'project-02',
		src: '/projects/project-02.webp',
	},
	{
		id: 'project-03',
		src: '/projects/project-03.webp',
	},
	{
		id: 'project-04',
		src: '/projects/project-04.webp',
	},
	{
		id: 'project-05',
		src: '/projects/project-05.webp',
	},
	{
		id: 'project-06',
		src: '/projects/project-06.webp',
	},
	{
		id: 'project-07',
		src: '/projects/project-07.webp',
	},
	{
		id: 'project-08',
		src: '/projects/project-08.webp',
	},
	{
		id: 'project-09',
		src: '/projects/project-09.webp',
	},
	{
		id: 'project-10',
		src: '/projects/project-10.webp',
	},
	{
		id: 'project-11',
		src: '/projects/project-11.webp',
	},
	{
		id: 'project-12',
		src: '/projects/project-12.webp',
	},
	{
		id: 'project-13',
		src: '/projects/project-13.webp',
	},
	{
		id: 'project-14',
		src: '/projects/project-14.webp',
	},
	{
		id: 'project-15',
		src: '/projects/project-15.webp',
	},
];

export const beforeAfterProjects: BeforeAfterProject[] = [
	{
		id: 'kitchen-transformation',
		title: 'Kitchen Remodel Transformation',
		category: 'Residential Remodel',
		description:
			'A transformation-focused project showing the difference between the original layout and the finished remodel.',
		beforeSrc: '/projects/kitchen-before.jpg',
		afterSrc: '/projects/kitchen-after.jpg',
		beforeAlt: 'Kitchen before remodel',
		afterAlt: 'Kitchen after remodel',
	},
];
