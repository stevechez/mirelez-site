import { ArrowRight, Link } from 'lucide-react';

import { GalleryLightbox } from '@/components/gallery/gallery-lightbox';
import { galleryImages } from '@/data/gallery';

export const metadata = {
	title: 'Gallery | Mirelez Construction',
	description:
		'Project gallery for Mirelez Construction — custom homes, remodels, commercial construction, and Central Valley craftsmanship.',
};

export default function GalleryPage() {
	return (
		<main className="bg-[#0E0C09] text-[#F2EDE3]">
			<section className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-8 lg:px-14 lg:pb-28 lg:pt-44">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(184,135,74,0.16),transparent_34rem),radial-gradient(circle_at_10%_85%,rgba(212,168,90,0.07),transparent_30rem)]" />

				<div className="relative mx-auto max-w-[1600px]">
					<div className="flex items-center gap-4 text-[0.58rem] uppercase tracking-[0.38em] text-[#B8874A]">
						<span className="h-px w-8 bg-[#B8874A]" />
						Gallery
					</div>

					<div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
						<div>
							<h1 className="max-w-6xl font-serif text-[4rem] font-light leading-[0.9] tracking-[-0.055em] sm:text-[3.6rem] lg:text-[5.5rem]">
								Building dreams,
								<br />
								one project
								<br />
								<em className="italic text-[#D4A85A]">at a time.</em>
							</h1>
						</div>

						<div>
							<p className="max-w-xl text-lg leading-8 text-[#8A8070] sm:text-lg">
								There is much to see here. Take your time, look around, and
								explore the craftsmanship, details, and completed work behind
								Mirelez Construction.
							</p>

							<div className="mt-8 flex flex-col gap-4 sm:flex-row">
								<a
									href="/before-and-after"
									className="inline-flex items-center justify-center gap-3 bg-[#B8874A] px-6 py-4 text-[0.75rem] uppercase tracking-[0.28em] text-[#0E0C09] transition hover:bg-[#D4A85A]"
								>
									View Before & After
									<ArrowRight className="size-4" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="px-5 pb-24 sm:px-8 lg:px-14 lg:pb-32">
				<div className="mx-auto max-w-[1600px]">
					<GalleryLightbox images={galleryImages} />
				</div>
			</section>

			<section className="border-y border-[#B8874A]/15 bg-[#1C1810] px-5 py-20 sm:px-8 lg:px-14">
				<div className="mx-auto grid max-w-[1600px] gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
					<div>
						<p className="text-[0.58rem] uppercase tracking-[0.34em] text-[#B8874A]">
							Before & After
						</p>

						<h2 className="mt-4 max-w-3xl font-serif text-4xl font-light leading-tight tracking-[-0.04em] text-[#F2EDE3] md:text-5xl">
							See the transformation behind the finished work.
						</h2>
					</div>

					<a
						href="/before-and-after"
						className="inline-flex items-center justify-center gap-3 border border-[#B8874A]/45 px-7 py-4 text-[0.65rem] uppercase tracking-[0.28em] text-[#D4A85A] transition hover:bg-[#D4A85A] hover:text-[#0E0C09]"
					>
						Open Before & After
						<ArrowRight className="size-4" />
					</a>
				</div>
			</section>
		</main>
	);
}
