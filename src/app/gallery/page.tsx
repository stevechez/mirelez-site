import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { GalleryLightbox } from '@/components/gallery/gallery-lightbox';
import { galleryImages } from '@/data/gallery';
import { projectCaseStudies } from '@/data/projects';

export const metadata = {
	title: 'Gallery',
	description:
		'View project photos from Mirelez Construction, including remodels, custom homes, commercial work, and finished construction details across California’s Central Valley.',
	alternates: {
		canonical: '/gallery',
	},
	openGraph: {
		title: 'Gallery | Mirelez Construction',
		description:
			'Project photos from Mirelez Construction across California’s Central Valley.',
		url: '/gallery',
		images: ['/images/og-image.jpg'],
	},
};

export default function GalleryPage() {
	return (
		<main className="bg-[var(--site-bg)] text-[var(--site-fg)]">
			<section className="relative overflow-hidden px-5 pb-14 pt-36 sm:px-8 lg:px-14 lg:pb-16 lg:pt-44">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,var(--site-brand-soft),transparent_34rem),radial-gradient(circle_at_10%_85%,color-mix(in_srgb,var(--site-brand-strong)_8%,transparent),transparent_30rem)]" />

				<div className="relative mx-auto max-w-[1500px]">
					<div className="flex items-center gap-4 text-[0.58rem] uppercase tracking-[0.38em] text-[var(--site-brand)]">
						<span className="h-px w-8 bg-[var(--site-brand)]" />
						Gallery
					</div>

					<div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.68fr] lg:items-end">
						<h1 className="max-w-5xl font-serif text-[3.6rem] font-light leading-[0.92] tracking-[-0.05em] text-[var(--site-fg)] sm:text-[4.8rem] lg:text-[6.2rem]">
							A visual record
							<br />
							of the work.
						</h1>

						<div>
							<p className="max-w-xl text-sm leading-8 text-[var(--site-muted-strong)] sm:text-base">
								Take your time, look around, and explore a curated collection of
								residential remodels, custom builds, and project details.
							</p>

							<Link
								href="/before-and-after"
								className="mt-8 inline-flex items-center justify-center gap-3 border border-[color:var(--site-border-strong)] bg-[color-mix(in_srgb,var(--site-card)_38%,transparent)] px-6 py-4 text-[0.65rem] uppercase tracking-[0.28em] text-[var(--site-brand-strong)] backdrop-blur-md transition hover:bg-[var(--site-brand-strong)] hover:text-[var(--site-bg)]"
							>
								View Before & After
								<ArrowRight className="size-4" />
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="px-5 pb-24 sm:px-8 lg:px-14 lg:pb-32">
				<GalleryLightbox images={galleryImages} />
			</section>
			<section
				id="case-studies"
				className="border-t border-[color:var(--site-border)] bg-[var(--site-card)] px-5 py-20 sm:px-8 lg:px-14 lg:py-28"
			>
				<div className="mx-auto max-w-[1500px]">
					<div className="grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:items-end">
						<div>
							<div className="flex items-center gap-4 text-[0.58rem] uppercase tracking-[0.38em] text-[var(--site-brand)]">
								<span className="h-px w-8 bg-[var(--site-brand)]" />
								Case Studies
							</div>

							<h2 className="mt-8 max-w-3xl font-serif text-5xl font-light leading-[0.98] tracking-[-0.045em] text-[var(--site-fg)] md:text-6xl">
								Go deeper
								<br />
								into the work.
							</h2>
						</div>

						<p className="max-w-xl text-sm leading-8 text-[var(--site-muted-strong)] sm:text-base">
							Explore selected projects in more detail — the goals, the scope,
							the approach, and the finished result.
						</p>
					</div>

					<div className="mt-14 grid gap-px bg-[var(--site-border)] lg:grid-cols-3">
						{projectCaseStudies.map(project => (
							<Link
								key={project.slug}
								href={`/projects/${project.slug}`}
								className="group bg-[var(--site-card)] p-6 transition hover:bg-[var(--site-card-strong)] sm:p-8"
							>
								<div className="relative aspect-[4/3] overflow-hidden bg-[var(--site-bg)]">
									<img
										src={project.heroImage}
										alt={`${project.title} by Mirelez Construction`}
										className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105"
									/>
								</div>

								<p className="mt-6 text-[0.55rem] uppercase tracking-[0.32em] text-[var(--site-brand)]">
									{project.eyebrow}
								</p>

								<h3 className="mt-3 font-serif text-3xl font-light tracking-[-0.035em] text-[var(--site-fg)]">
									{project.title}
								</h3>

								<p className="mt-4 text-sm leading-7 text-[var(--site-muted)]">
									{project.summary}
								</p>

								<div className="mt-6 inline-flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.28em] text-[var(--site-muted)] transition group-hover:text-[var(--site-brand-strong)]">
									View Case Study
									<ArrowRight className="size-3" />
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
