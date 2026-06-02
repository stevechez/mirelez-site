import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { BeforeAfterSlider } from '@/components/gallery/before-after-slider';
import { beforeAfterProjects } from '@/data/gallery';

export const metadata = {
	title: 'Before & After',
	description:
		'Before and after project transformations by Mirelez Construction, showing remodels and construction improvements from original condition to finished result.',
	alternates: {
		canonical: '/before-and-after',
	},
	openGraph: {
		title: 'Before & After | Mirelez Construction',
		description: 'Compare project transformations by Mirelez Construction.',
		url: '/before-and-after',
		images: ['/images/og-image.jpg'],
	},
};

export default function BeforeAndAfterPage() {
	return (
		<main className="bg-[var(--site-bg)] text-[var(--site-fg)]">
			<section className="relative overflow-hidden px-5 pb-16 pt-36 sm:px-8 lg:px-14 lg:pb-20 lg:pt-44">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,var(--site-brand-soft),transparent_34rem),radial-gradient(circle_at_10%_85%,color-mix(in_srgb,var(--site-brand-strong)_8%,transparent),transparent_30rem)]" />

				<div className="relative mx-auto max-w-[1500px]">
					<div className="flex items-center gap-4 text-[0.58rem] uppercase tracking-[0.38em] text-[var(--site-brand)]">
						<span className="h-px w-8 bg-[var(--site-brand)]" />
						Before & After
					</div>

					<div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.68fr] lg:items-end">
						<h1 className="max-w-5xl font-serif text-[3.45rem] font-light leading-[0.92] tracking-[-0.05em] text-[var(--site-fg)] sm:text-[4.8rem] lg:text-[6.2rem]">
							See the
							<br />
							transformation.
						</h1>

						<div>
							<p className="max-w-xl text-sm leading-8 text-[var(--site-muted-strong)] sm:text-base">
								Compare the original space with the finished work. Drag each
								slider to see how planning, craftsmanship, and detail come
								together in the final result.
							</p>

							<div className="mt-8 flex flex-col gap-4 sm:flex-row">
								<Link
									href="/gallery"
									className="inline-flex items-center justify-center gap-3 border border-[color:var(--site-border-strong)] bg-[color-mix(in_srgb,var(--site-card)_38%,transparent)] px-6 py-4 text-[0.65rem] uppercase tracking-[0.28em] text-[var(--site-brand-strong)] backdrop-blur-md transition hover:bg-[var(--site-brand-strong)] hover:text-[var(--site-bg)]"
								>
									View Gallery
									<ArrowRight className="size-4" />
								</Link>

								<Link
									href="/#contact"
									className="inline-flex items-center justify-center gap-3 bg-[var(--site-brand)] px-6 py-4 text-[0.65rem] uppercase tracking-[0.28em] text-[var(--site-bg)] transition hover:bg-[var(--site-brand-strong)]"
								>
									Request Estimate
									<ArrowRight className="size-4" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="px-5 pb-24 sm:px-8 lg:px-14 lg:pb-32">
				<div className="mx-auto grid max-w-[1500px] gap-14">
					{beforeAfterProjects.map((project, index) => (
						<article
							key={project.id}
							className="overflow-hidden border border-[color:var(--site-border)] bg-[var(--site-card)] shadow-[0_24px_90px_var(--site-shadow)]"
						>
							<div className="grid gap-0 lg:grid-cols-[0.42fr_1fr]">
								<div className="flex flex-col justify-between border-b border-[color:var(--site-border)] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
									<div>
										<p className="text-[0.58rem] uppercase tracking-[0.34em] text-[var(--site-brand)]">
											Project {String(index + 1).padStart(2, '0')}
										</p>

										<h2 className="mt-5 font-serif text-4xl font-light leading-tight tracking-[-0.04em] text-[var(--site-fg)] md:text-5xl">
											Before &
											<br />
											<em className="italic text-[var(--site-brand-strong)]">
												After
											</em>
										</h2>

										<p className="mt-5 max-w-md text-sm leading-8 text-[var(--site-muted-strong)]">
											A side-by-side project comparison showing the change from
											existing conditions to completed construction.
										</p>
									</div>

									<Link
										href="/#contact"
										className="mt-10 inline-flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.28em] text-[var(--site-muted)] transition hover:text-[var(--site-brand-strong)]"
									>
										Discuss a Project
										<ArrowRight className="size-3" />
									</Link>
								</div>

								<BeforeAfterSlider
									beforeSrc={project.beforeSrc}
									afterSrc={project.afterSrc}
								/>
							</div>
						</article>
					))}
				</div>
			</section>
		</main>
	);
}
