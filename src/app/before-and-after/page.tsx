import { BeforeAfterSlider } from '@/components/gallery/before-after-slider';
import { beforeAfterProjects } from '@/data/gallery';

export const metadata = {
	title: 'Before & After | Mirelez Construction',
	description:
		'Before and after project transformations from Mirelez Construction.',
};

export default function BeforeAndAfterPage() {
	return (
		<main className="bg-[#0E0C09] text-[#F2EDE3]">
			<section className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-8 lg:px-14 lg:pb-28 lg:pt-44">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(184,135,74,0.18),transparent_34rem),radial-gradient(circle_at_10%_85%,rgba(212,168,90,0.08),transparent_30rem)]" />

				<div className="relative mx-auto max-w-[1600px]">
					<div className="flex items-center gap-4 text-[0.58rem] uppercase tracking-[0.38em] text-[#B8874A]">
						<span className="h-px w-8 bg-[#B8874A]" />
						Before & After
					</div>

					<div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
						<h1 className="max-w-6xl font-serif text-[4rem] font-light leading-[0.9] tracking-[-0.055em] sm:text-[5.6rem] lg:text-[7.5rem]">
							Experience the
							<br />
							<em className="italic text-[#D4A85A]">craftsmanship.</em>
						</h1>

						<p className="max-w-xl text-sm leading-8 text-[#8A8070] sm:text-base">
							Interactive transformations that show the quality, scope, and
							impact of the work before a client ever reaches out.
						</p>
					</div>
				</div>
			</section>

			<section className="px-5 pb-24 sm:px-8 lg:px-14 lg:pb-32">
				<div className="mx-auto grid max-w-[1600px] gap-12">
					{beforeAfterProjects.map(project => (
						<article
							key={project.id}
							className="grid gap-8 border border-[#B8874A]/15 bg-[#1C1810]/55 p-5 sm:p-7 lg:grid-cols-[0.7fr_1.3fr] lg:p-8"
						>
							<div>
								<p className="text-[0.58rem] uppercase tracking-[0.34em] text-[#B8874A]">
									{project.category}
								</p>

								<h2 className="mt-4 font-serif text-4xl font-light leading-[0.98] tracking-[-0.045em] text-[#F2EDE3]">
									{project.title}
								</h2>

								<p className="mt-5 text-sm leading-8 text-[#8A8070]">
									{project.description}
								</p>
							</div>

							<BeforeAfterSlider
								beforeSrc={project.beforeSrc}
								afterSrc={project.afterSrc}
								beforeAlt={project.beforeAlt}
								afterAlt={project.afterAlt}
							/>
						</article>
					))}
				</div>
			</section>
		</main>
	);
}
