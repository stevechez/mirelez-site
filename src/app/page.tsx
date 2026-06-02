'use client';

import { type FormEvent, type ReactNode, useState } from 'react';
import { ArrowRight, Check, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

import { Reveal } from '@/components/motion/reveal';
import { LocalBusinessSchema } from '@/components/seo/local-business-schema';

const siteImages = {
	kitchenAfter:
		'https://img1.wsimg.com/isteam/ip/76200417-251f-436d-8736-c8425a944abd/IMG_9764-0fecc6e.png/:/',
};

const services = [
	{
		eyebrow: '01',
		title: 'Custom Homes',
		body: 'Ground-up residential builds with planning, communication, and lasting craftsmanship.',
	},
	{
		eyebrow: '02',
		title: 'Remodels',
		body: 'Kitchen, bath, and whole-home transformations handled with care.',
	},
	{
		eyebrow: '03',
		title: 'Commercial',
		body: 'Commercial improvements and build-outs for Central Valley businesses.',
	},
];

const processSteps = [
	{
		number: '01',
		title: 'Consult',
		body: 'We learn the project goals, location, timing, and expectations before any estimate begins.',
	},
	{
		number: '02',
		title: 'Plan',
		body: 'We define scope, priorities, materials, and next steps so the work starts with clarity.',
	},
	{
		number: '03',
		title: 'Build',
		body: 'The project is managed with communication, reliability, and attention to craftsmanship.',
	},
	{
		number: '04',
		title: 'Walkthrough',
		body: 'We review the finished work and make sure the details feel intentional and complete.',
	},
];

// const trustStats = [
// 	{
// 		value: 'Residential',
// 		label: 'Custom homes, remodels, kitchens, and baths.',
// 	},
// 	{
// 		value: 'Commercial',
// 		label: 'Build-outs, improvements, and business-focused projects.',
// 	},
// 	{
// 		value: 'Central Valley',
// 		label: 'Local construction with clear communication.',
// 	},
// ];

// const marqueeItems = [
// 	'Custom Homes',
// 	'Kitchen Remodels',
// 	'Bathroom Renovations',
// 	'Commercial Projects',
// 	'Central Valley',
// 	'Craftsmanship',
// 	'Reliability',
// ];

export default function HomePage() {
	return (
		<>
			<LocalBusinessSchema />
			<main className="min-h-screen overflow-hidden bg-[var(--site-bg)] text-[var(--site-fg)]">
				<HeroSection />
				{/* <Marquee /> */}
				<ServicesSection />
				<ProcessSection />
				<TrustStrip />
				<ContactSection />
			</main>
		</>
	);
}

function HeroSection() {
	return (
		<section className="relative min-h-[100svh] overflow-hidden bg-[var(--site-bg)] text-[var(--site-fg)]">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_82%,var(--site-brand-soft),transparent_34rem)]" />

			<div className="relative grid min-h-[100svh] lg:grid-cols-[0.92fr_1.08fr]">
				<div className="relative z-10 flex flex-col justify-center px-5 pb-16 pt-36 sm:px-8 lg:px-14 lg:pb-20 lg:pt-32">
					<Reveal>
						<Eyebrow>Custom Homes · Remodels · Commercial Projects</Eyebrow>
					</Reveal>

					<Reveal delay={100}>
						<h1 className="mt-8 max-w-4xl font-serif text-[3.25rem] font-light leading-[0.96] tracking-[-0.045em] text-[var(--site-fg)] sm:text-[4.35rem] lg:text-[5.15rem] xl:text-[5.85rem]">
							Building with
							<br />
							<em className="font-light italic text-[var(--site-brand-strong)]">
								integrity
							</em>
							<span className="text-[var(--site-muted)]">,</span>
							<br />
							from the ground up.
						</h1>
					</Reveal>

					<Reveal delay={200}>
						<p className="mt-7 max-w-xl text-base leading-8 text-[var(--site-muted-strong)] sm:text-lg">
							Residential remodels, custom home builds, and commercial projects
							handled with clarity, communication, and craftsmanship.
						</p>
					</Reveal>

					<Reveal delay={300}>
						<div className="mt-9 grid max-w-2xl gap-3 sm:grid-cols-3">
							<HeroProof label="Residential" value="Custom Homes" />
							<HeroProof label="Remodeling" value="Kitchens + Baths" />
							<HeroProof label="Commercial" value="Build-Outs" />
						</div>
					</Reveal>

					<Reveal delay={400}>
						<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
							<Link
								href="/gallery"
								className="inline-flex items-center justify-center gap-3 bg-[var(--site-brand)] px-7 py-4 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[var(--site-bg)] transition hover:bg-[var(--site-brand-strong)]"
							>
								Explore Work
								<ArrowRight className="size-4" />
							</Link>

							<Link
								href="/#contact"
								className="inline-flex items-center justify-center gap-3 border border-[color:var(--site-border-strong)] bg-[color-mix(in_srgb,var(--site-card)_38%,transparent)] px-7 py-4 text-[0.68rem] uppercase tracking-[0.28em] text-[var(--site-muted-strong)] backdrop-blur-md transition hover:border-[var(--site-brand-strong)] hover:text-[var(--site-fg)]"
							>
								Request Estimate
								<ArrowRight className="size-3" />
							</Link>
						</div>
					</Reveal>
				</div>

				<div className="relative hidden overflow-hidden lg:block">
					<img
						src={siteImages.kitchenAfter}
						alt="Completed Mirelez Construction kitchen remodel with navy island and white cabinetry"
						className="absolute inset-0 size-full object-cover opacity-90"
					/>

					<div className="absolute inset-0 bg-[linear-gradient(to_right,var(--site-bg)_0%,color-mix(in_srgb,var(--site-bg)_72%,transparent)_18%,color-mix(in_srgb,var(--site-bg)_28%,transparent)_44%,transparent_76%),linear-gradient(to_bottom,color-mix(in_srgb,var(--site-bg)_42%,transparent)_0%,transparent_34%),linear-gradient(to_top,var(--site-bg)_0%,color-mix(in_srgb,var(--site-bg)_32%,transparent)_26%,transparent_58%)]" />

					<div className="absolute bottom-10 left-10 right-10 z-10">
						<div className="max-w-xl border border-[color:var(--site-border-strong)] bg-[color-mix(in_srgb,var(--site-card)_68%,transparent)] p-7 shadow-[0_30px_90px_var(--site-shadow)] backdrop-blur-2xl">
							<p className="text-[0.58rem] uppercase tracking-[0.36em] text-[var(--site-brand)]">
								Craftsmanship
							</p>

							<p className="mt-4 font-serif text-3xl font-light leading-tight text-[var(--site-fg)]">
								Before they call, they believe.
							</p>

							<p className="mt-3 max-w-md text-sm leading-7 text-[var(--site-muted-strong)]">
								Project photography, proof of workmanship, and a clear process
								create confidence before the first conversation.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function HeroProof({ label, value }: { label: string; value: string }) {
	return (
		<div className="border border-[color:var(--site-border)] bg-[var(--site-brand-soft)] px-4 py-4 backdrop-blur">
			<p className="text-[0.52rem] uppercase tracking-[0.3em] text-[var(--site-muted)]">
				{label}
			</p>
			<p className="mt-2 text-sm font-medium text-[var(--site-fg)]">{value}</p>
		</div>
	);
}

// function Marquee() {
// 	return (
// 		<div
// 			className="overflow-hidden border-y border-[#B8874A]/15 bg-[#B8874A]/[0.035] py-4"
// 			aria-hidden="true"
// 		>
// 			<div className="flex w-max animate-[marquee_28s_linear_infinite] gap-16">
// 				{[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
// 					(item, index) => (
// 						<span
// 							key={`${item}-${index}`}
// 							className="flex items-center gap-5 whitespace-nowrap text-[0.58rem] uppercase tracking-[0.38em] text-[#8A8070]"
// 						>
// 							<span className="text-[#B8874A]">◆</span>
// 							{item}
// 						</span>
// 					),
// 				)}
// 			</div>
// 		</div>
// 	);
// }

function ServicesSection() {
	return (
		<section
			id="services"
			className="scroll-mt-24 border-y border-[color:var(--site-border)] bg-[var(--site-card)] px-5 py-10 text-[var(--site-fg)] sm:px-8 lg:px-14"
		>
			<div className="mx-auto grid max-w-[1600px] gap-px bg-[var(--site-border)] md:grid-cols-3">
				{services.map(service => (
					<Link
						key={service.title}
						href="/#contact"
						className="group bg-[var(--site-card)] px-6 py-7 transition hover:bg-[var(--site-card-strong)] sm:px-8"
					>
						<p className="text-[0.55rem] uppercase tracking-[0.32em] text-[var(--site-brand)]">
							{service.eyebrow}
						</p>

						<div className="mt-5 flex items-end justify-between gap-6">
							<div>
								<h2 className="font-serif text-3xl font-light tracking-[-0.035em] text-[var(--site-fg)] md:text-4xl">
									{service.title}
								</h2>

								<p className="mt-3 max-w-sm text-sm leading-7 text-[var(--site-muted)]">
									{service.body}
								</p>
							</div>

							<ArrowRight className="size-4 shrink-0 text-[var(--site-muted)] transition group-hover:translate-x-1 group-hover:text-[var(--site-brand-strong)]" />
						</div>
					</Link>
				))}
			</div>
		</section>
	);
}

function ProcessSection() {
	return (
		<section
			id="process"
			className="relative scroll-mt-24 overflow-hidden bg-[var(--site-bg)] px-5 py-24 text-[var(--site-fg)] sm:px-8 lg:px-14 lg:py-28"
		>
			<div className="absolute right-6 top-8 font-serif text-[24vw] font-light leading-none text-[var(--site-brand-soft)]">
				04
			</div>

			<div className="relative mx-auto max-w-[1600px]">
				<div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-end">
					<div>
						<Eyebrow>Process</Eyebrow>

						<h2 className="mt-10 font-serif text-5xl font-light leading-[0.98] tracking-[-0.045em] text-[var(--site-fg)] md:text-7xl">
							Clear from
							<br />
							start to{' '}
							<em className="italic text-[var(--site-brand-strong)]">
								finish.
							</em>
						</h2>
					</div>

					<p className="max-w-xl text-sm leading-8 text-[var(--site-muted-strong)] sm:text-base">
						A simple process built around expectations, planning, communication,
						and a final walkthrough.
					</p>
				</div>

				<div className="relative mt-16 grid gap-px bg-[var(--site-border)] md:grid-cols-2 lg:grid-cols-4">
					{processSteps.map((step, index) => (
						<Reveal key={step.number} delay={index * 90}>
							<article className="h-full bg-[var(--site-bg)] p-7 sm:p-8 lg:p-9">
								<div className="font-serif text-6xl font-light leading-none text-[var(--site-brand)] opacity-20">
									{step.number}
								</div>

								<h3 className="mt-6 font-serif text-3xl font-light text-[var(--site-fg)]">
									{step.title}
								</h3>

								<p className="mt-4 text-sm leading-7 text-[var(--site-muted)]">
									{step.body}
								</p>
							</article>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}

function TrustStrip() {
	const items = [
		'Clear communication',
		'Residential + commercial',
		'Central Valley based',
		'Built with integrity',
	];

	return (
		<section className="border-y border-[color:var(--site-border)] bg-[var(--site-card)] px-5 py-10 text-[var(--site-fg)] sm:px-8 lg:px-14">
			<div className="mx-auto grid max-w-[1600px] gap-px bg-[var(--site-border)] md:grid-cols-4">
				{items.map(item => (
					<div
						key={item}
						className="bg-[var(--site-card)] px-5 py-5 text-center"
					>
						<p className="text-[0.56rem] uppercase tracking-[0.24em] text-[var(--site-muted-strong)] sm:tracking-[0.3em]">
							{item}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}

function ContactSection() {
	const [status, setStatus] = useState<'idle' | 'error' | 'sending' | 'sent'>(
		'idle',
	);

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const form = event.currentTarget;
		const formData = new FormData(form);

		const name = String(formData.get('name') || '').trim();
		const phone = String(formData.get('phone') || '').trim();
		const type = String(formData.get('type') || '').trim();
		const timeline = String(formData.get('timeline') || '').trim();
		const details = String(formData.get('details') || '').trim();

		if (!name || !phone || !type) {
			setStatus('error');
			window.setTimeout(() => setStatus('idle'), 2500);
			return;
		}

		setStatus('sending');

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name,
					phone,
					type,
					timeline,
					details,
				}),
			});

			if (!response.ok) {
				throw new Error('Unable to send message.');
			}

			setStatus('sent');
			form.reset();
		} catch {
			setStatus('error');
			window.setTimeout(() => setStatus('idle'), 3000);
		}
	}

	return (
		<section
			id="contact"
			className="grid scroll-mt-24 gap-14 border-t border-[color:var(--site-border)] bg-[var(--site-card)] px-5 py-24 text-[var(--site-fg)] sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-14 lg:py-28"
		>
			<div>
				<Eyebrow>Contact Us</Eyebrow>

				<h2 className="mt-10 font-serif text-5xl font-light leading-[0.98] tracking-[-0.045em] text-[var(--site-fg)] md:text-7xl">
					Better yet,
					<br />
					see us in
					<br />
					<em className="italic text-[var(--site-brand-strong)]">person.</em>
				</h2>

				<p className="mt-7 max-w-lg text-sm leading-8 text-[var(--site-muted-strong)] sm:text-base">
					To get a quote, or if you have questions or special requests, drop us
					a line. We stay in constant communication until the job is done.
				</p>

				<div className="mt-11 grid gap-5">
					<ContactDetail
						icon={<MapPin className="size-5" />}
						label="Location"
						value="Central Valley, California, USA"
					/>

					<ContactDetail
						icon={<Phone className="size-5" />}
						label="Phone"
						value="209-631-1892"
						href="tel:2096311892"
					/>

					<ContactDetail
						icon={<Mail className="size-5" />}
						label="Email"
						value="MirelezConstruction@gmail.com"
						href="mailto:MirelezConstruction@gmail.com"
					/>
				</div>
			</div>

			<form
				onSubmit={handleSubmit}
				className="rounded-[1.75rem] border border-[color:var(--site-border)] bg-[color-mix(in_srgb,var(--site-bg)_62%,transparent)] p-5 shadow-[0_30px_90px_var(--site-shadow)] backdrop-blur-xl sm:p-7 lg:p-9"
			>
				<div className="grid gap-4 md:grid-cols-2">
					<Field label="Full Name" htmlFor="name">
						<input
							id="name"
							name="name"
							type="text"
							autoComplete="name"
							placeholder="John Smith"
							className="form-input"
						/>
					</Field>

					<Field label="Phone Number" htmlFor="phone">
						<input
							id="phone"
							name="phone"
							type="tel"
							autoComplete="tel"
							placeholder="(209) 000-0000"
							className="form-input"
						/>
					</Field>
				</div>

				<div className="mt-4 grid gap-4 md:grid-cols-2">
					<Field label="Project Type" htmlFor="type">
						<div className="relative">
							<select id="type" name="type" className="form-input form-select">
								<option value="">Select a service</option>
								<option>Custom Home</option>
								<option>Kitchen Remodel</option>
								<option>Bathroom Renovation</option>
								<option>Whole-Home Remodel</option>
								<option>Addition</option>
								<option>Commercial Project</option>
							</select>

							<span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--site-muted)]">
								↓
							</span>
						</div>
					</Field>

					<Field label="Timeline" htmlFor="timeline">
						<div className="relative">
							<select
								id="timeline"
								name="timeline"
								className="form-input form-select"
							>
								<option value="">When to start?</option>
								<option>Immediately</option>
								<option>Within 3 months</option>
								<option>Within 6 months</option>
								<option>Just exploring</option>
							</select>

							<span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--site-muted)]">
								↓
							</span>
						</div>
					</Field>
				</div>

				<div className="mt-4">
					<Field label="Project Details" htmlFor="details">
						<textarea
							id="details"
							name="details"
							placeholder="Briefly describe the project, location, timeline, and goals."
							className="form-input min-h-32 resize-y leading-7"
						/>
					</Field>
				</div>

				<div className="mt-6 rounded-2xl border border-[color:var(--site-border)] bg-[var(--site-brand-soft)] p-4">
					<p className="text-xs leading-6 text-[var(--site-muted)]">
						Mirelez Construction typically responds within one business day. For
						urgent requests, call{' '}
						<a
							href="tel:2096311892"
							className="text-[var(--site-brand-strong)] underline-offset-4 hover:underline"
						>
							209-631-1892
						</a>
						.
					</p>
				</div>

				<button
					type="submit"
					disabled={status === 'sending' || status === 'sent'}
					className={`mt-6 flex w-full items-center justify-center gap-3 rounded-full px-6 py-4 text-[0.68rem] font-medium uppercase tracking-[0.28em] transition ${
						status === 'error'
							? 'bg-[var(--site-muted)] text-[var(--site-bg)]'
							: status === 'sent'
								? 'bg-emerald-700 text-white'
								: 'bg-[var(--site-brand)] text-[var(--site-bg)] hover:bg-[var(--site-brand-strong)]'
					}`}
				>
					{status === 'error' && 'Please fill in required fields'}
					{status === 'sending' && 'Sending…'}
					{status === 'sent' && (
						<>
							<Check className="size-4" />
							Request Sent
						</>
					)}
					{status === 'idle' && (
						<>
							Request Consultation
							<ArrowRight className="size-4" />
						</>
					)}
				</button>
			</form>
		</section>
	);
}

function ContactDetail({
	icon,
	label,
	value,
	href,
}: {
	icon: ReactNode;
	label: string;
	value: string;
	href?: string;
}) {
	const content = (
		<>
			<div className="flex size-12 shrink-0 items-center justify-center border border-[color:var(--site-border-strong)] text-[var(--site-brand)]">
				{icon}
			</div>

			<div>
				<p className="text-[0.58rem] uppercase tracking-[0.32em] text-[var(--site-muted)]">
					{label}
				</p>

				<p className="mt-1 text-sm text-[var(--site-fg)]">{value}</p>
			</div>
		</>
	);

	if (href) {
		return (
			<a
				href={href}
				className="flex items-center gap-5 border-b border-[color:var(--site-border)] pb-5 transition hover:border-[var(--site-brand-strong)]"
			>
				{content}
			</a>
		);
	}

	return (
		<div className="flex items-center gap-5 border-b border-[color:var(--site-border)] pb-5">
			{content}
		</div>
	);
}

function Field({
	label,
	htmlFor,
	children,
}: {
	label: string;
	htmlFor: string;
	children: ReactNode;
}) {
	return (
		<div className="group">
			<label
				htmlFor={htmlFor}
				className="mb-2.5 block text-[0.55rem] font-medium uppercase tracking-[0.32em] text-[var(--site-muted)] transition group-focus-within:text-[var(--site-brand-strong)]"
			>
				{label}
			</label>

			{children}
		</div>
	);
}
function Eyebrow({ children }: { children: ReactNode }) {
	return (
		<div className="flex items-center gap-4 text-[0.58rem] uppercase tracking-[0.38em] text-[var(--site-brand)]">
			<span className="h-px w-8 bg-[var(--site-brand)]" />
			{children}
		</div>
	);
}
