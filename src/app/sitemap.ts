import type { MetadataRoute } from 'next';

import { projectCaseStudies } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://mirelez-site.vercel.app';

	const staticRoutes = [
		'',
		'/gallery',
		'/before-and-after',
	].map(route => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: 'monthly' as const,
		priority: route === '' ? 1 : 0.8,
	}));

	const projectRoutes = projectCaseStudies.map(project => ({
		url: `${baseUrl}/projects/${project.slug}`,
		lastModified: new Date(),
		changeFrequency: 'monthly' as const,
		priority: 0.75,
	}));

	return [...staticRoutes, ...projectRoutes];
}
