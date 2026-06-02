import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';

import { getProjectBySlug, projectCaseStudies } from '@/data/projects';
import { Reveal } from '@/components/motion/reveal';

type ProjectPageProps = {
	params: Promise<{
		slug: string;
	}>;
};

export function generateStaticParams() {
	return projectCaseStudies.map(project => ({
		slug: project.slug,
	}));
}

export async function generateMetadata({ params }: ProjectPageProps) {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		return {
			title: 'Project Not Found',
		};
	}

	return {
		title: project.title,
		description: project.summary,
		alternates: {
			canonical: `${siteConfig.url}/projects/${project.slug}`,
		},
		openGraph: {
			title: `${project.title} | Mirelez Construction`,
			description: project.summary,
			url: `${siteConfig.url}/projects/${project.slug}`,
			images: [
				{
					url: project.heroImage,
					width: 1200,
					height: 630,
					alt: `${project.title} by Mirelez Construction`,
				},
			],
		},
	};
}

export default async function ProjectCaseStudyPage({
	params,
}: ProjectPageProps) {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		notFound();
	}

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'CreativeWork',
		'@id': `${siteConfig.url}/projects/${project.slug}#case-study`,
		name: `${project.title} by ${siteConfig.name}`,
		headline: project.title,
		description: project.summary,
		image: `${siteConfig.url}${project.heroImage}`,
		url: `${siteConfig.url}/projects/${project.slug}`,
		about: {
			'@type': 'Service',
			name: project.category,
		},
		provider: {
			'@id': `${siteConfig.url}/#business`,
		},
		areaServed: {
			'@type': 'Place',
			name: project.location,
		},
	};

	return (
		<main className="bg-[var(--site-bg)] text-[var(--site-fg)]">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
				}}
			/>

			<section className="relative overflow-hidden px-5 pb-16 pt-36 sm:px-8 lg:px-14 lg:pb-24 lg:pt-44">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,var(--site-brand-soft),transparent_34rem),radial-gradient(circle_at_10%_85%,color-mix(in_srgb,var(--site-brand-strong)_8%,transparent),transparent_30rem)]" />

				<div className="relative mx-auto max-w-[1500px]">
					<Link
						href="/gallery"
						className="inline-flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.28em] text-[var(--site-muted)] transition hover:text-[var(--site-brand-strong)]"
					>
						<ArrowLeft className="size-3" />
						Back to Gallery
					</Link>

					<div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.62fr] lg:items-end">
						<div>
							<div className="flex items-center gap-4 text-[0.58rem] uppercase tracking-[0.38em] text-[var(--site-brand)]">
								<span className="h-px w-8 bg-[var(--site-brand)]" />
								{project.eyebrow}
							</div>
							<Reveal>
								<h1 className="mt-8 max-w-5xl font-serif text-[3.5rem] font-light leading-[0.92] tracking-[-0.05em] text-[var(--site-fg)] sm:text-[4.8rem] lg:text-[6.4rem]">
									{project.title}
								</h1>
							</Reveal>
						</div>

						<div>
							<p className="max-w-xl text-sm leading-8 text-[var(--site-muted-strong)] sm:text-base">
								{project.summary}
							</p>

							<div className="mt-8 grid gap-4 border-y border-[color:var(--site-border)] py-5 sm:grid-cols-2">
								<ProjectMeta label="Location" value={project.location} />
								<ProjectMeta label="Category" value={project.category} />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="px-5 pb-20 sm:px-8 lg:px-14 lg:pb-28">
				<div className="mx-auto max-w-[1500px]">
					<div className="relative aspect-[16/9] overflow-hidden bg-[var(--site-card)] shadow-[0_30px_100px_var(--site-shadow)]">
						<img
							src={project.heroImage}
							alt={`${project.title} by Mirelez Construction`}
							className="absolute inset-0 size-full object-cover"
						/>
					</div>
				</div>
			</section>
			<section className="border-y border-[color:var(--site-border)] bg-[var(--site-card)] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
				<div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.7fr_1fr]">
					<div>
						<div className="sticky top-32">
							<div className="flex items-center gap-4 text-[0.58rem] uppercase tracking-[0.38em] text-[var(--site-brand)]">
								<span className="h-px w-8 bg-[var(--site-brand)]" />
								Scope
							</div>

							<h2 className="mt-8 max-w-xl font-serif text-5xl font-light leading-[0.98] tracking-[-0.045em] text-[var(--site-fg)] md:text-6xl">
								Built with
								<br />
								<em className="italic text-[var(--site-brand-strong)]">
									clear intent.
								</em>
							</h2>
						</div>
					</div>

					<div className="grid gap-10">
						<div className="grid gap-3 sm:grid-cols-2">
							{project.services.map(service => (
								<div
									key={service}
									className="flex items-center gap-3 border border-[color:var(--site-border)] bg-[color-mix(in_srgb,var(--site-bg)_48%,transparent)] px-4 py-4"
								>
									<Check className="size-4 text-[var(--site-brand)]" />
									<p className="text-sm text-[var(--site-muted-strong)]">
										{service}
									</p>
								</div>
							))}
						</div>

						<div className="grid gap-px bg-[var(--site-border)]">
							<ProjectStoryBlock title="Challenge" body={project.challenge} />
							<ProjectStoryBlock title="Approach" body={project.approach} />
							<ProjectStoryBlock title="Result" body={project.result} />
						</div>
					</div>
				</div>
			</section>
			<section className="px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
				<div className="mx-auto max-w-[1500px]">
					<div className="grid gap-3 md:grid-cols-2">
						{project.images.map((image, index) => (
							<Reveal
								key={image}
								delay={(index % 4) * 120}
								animation="soft"
								className={index === 0 ? 'md:col-span-2' : ''}
							>
								<div className="relative overflow-hidden bg-[var(--site-card)] shadow-[0_20px_70px_var(--site-shadow)]">
									<div
										className={
											index === 0
												? 'relative aspect-[16/9]'
												: 'relative aspect-[4/3]'
										}
									>
										<img
											src={image}
											alt={`${project.title} project image ${index + 1}`}
											className="absolute inset-0 size-full object-cover"
											loading={index === 0 ? 'eager' : 'lazy'}
										/>
									</div>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>
			<section className="border-t border-[color:var(--site-border)] bg-[var(--site-card)] px-5 py-20 sm:px-8 lg:px-14">
				<div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
					<div>
						<p className="text-[0.58rem] uppercase tracking-[0.34em] text-[var(--site-brand)]">
							Start Your Project
						</p>

						<h2 className="mt-4 max-w-3xl font-serif text-4xl font-light leading-tight tracking-[-0.04em] text-[var(--site-fg)] md:text-5xl">
							Have a project that needs the same level of care?
						</h2>
					</div>

					<Link
						href="/#contact"
						className="inline-flex items-center justify-center gap-3 bg-[var(--site-brand)] px-7 py-4 text-[0.65rem] uppercase tracking-[0.28em] text-[var(--site-bg)] transition hover:bg-[var(--site-brand-strong)]"
					>
						Request Estimate
						<ArrowRight className="size-4" />
					</Link>
				</div>
			</section>
		</main>
	);
}

function ProjectMeta({ label, value }: { label: string; value: string }) {
	return (
		<div>
			<p className="text-[0.55rem] uppercase tracking-[0.32em] text-[var(--site-brand)]">
				{label}
			</p>
			<p className="mt-2 text-sm text-[var(--site-fg)]">{value}</p>
		</div>
	);
}

function ProjectStoryBlock({ title, body }: { title: string; body: string }) {
	return (
		<article className="bg-[var(--site-card)] p-6 sm:p-8">
			<p className="text-[0.58rem] uppercase tracking-[0.34em] text-[var(--site-brand)]">
				{title}
			</p>

			<p className="mt-4 max-w-3xl text-sm leading-8 text-[var(--site-muted-strong)] sm:text-base">
				{body}
			</p>
		</article>
	);
}
