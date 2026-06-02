'use client';

import {
	type FormEvent,
	type ReactNode,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import {
	ArrowRight,
	Building2,
	Check,
	ChevronLeft,
	ChevronRight,
	Home,
	Mail,
	MapPin,
	Menu,
	Phone,
	Wrench,
	X,
} from 'lucide-react';
import Link from 'next/link';

const siteImages = {
	kitchenAfter:
		'https://img1.wsimg.com/isteam/ip/76200417-251f-436d-8736-c8425a944abd/IMG_9764-0fecc6e.png/:/',
	constructionNight:
		'https://img1.wsimg.com/isteam/ip/76200417-251f-436d-8736-c8425a944abd/IMG_7527.png/:/cr=t:16.67%,l:0%,w:100%,h:66.67%/rs=w:600,h:300,cg:true',
	logo: 'https://img1.wsimg.com/isteam/ip/76200417-251f-436d-8736-c8425a944abd/MirelezOgBlack.png/:/rs=h:200,cg:true,m/qt=q:95',
};

const navItems = [
	{
		label: 'Services',
		href: '/#services',
	},
	{
		label: 'Process',
		href: '/#process',
	},
	{
		label: 'Gallery',
		href: '/gallery',
	},
	{
		label: 'Before & After',
		href: '/before-and-after',
	},
	{
		label: 'Contact',
		href: '/#contact',
	},
];

const services = [
	{
		eyebrow: '001',
		title: 'Custom Homes',
		body: 'Ground-up residential construction built with planning, communication, and lasting craftsmanship.',
		icon: <Home className="size-6" />,
	},
	{
		eyebrow: '002',
		title: 'Remodels',
		body: 'Kitchen, bathroom, and whole-home transformations handled with detail, care, and reliability.',
		icon: <Wrench className="size-6" />,
	},
	{
		eyebrow: '003',
		title: 'Commercial Projects',
		body: 'Commercial construction and improvements for Central Valley businesses that need dependable execution.',
		icon: <Building2 className="size-6" />,
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
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);

		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		document.body.style.overflow = mobileOpen ? 'hidden' : '';

		return () => {
			document.body.style.overflow = '';
		};
	}, [mobileOpen]);

	return (
		<main className="min-h-screen overflow-hidden bg-[#0E0C09] text-[#F2EDE3]">
			<MobileMenu mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

			<HeroSection />
			{/* <Marquee /> */}
			<ServicesSection />
			<ProcessSection />
			{/* <WorkSection /> */}
			<ContactSection />
		</main>
	);
}

function MobileMenu({
	mobileOpen,
	setMobileOpen,
}: {
	mobileOpen: boolean;
	setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<div
			className={`fixed inset-0 z-40 bg-[#1C1810]/98 px-6 pb-8 pt-28 backdrop-blur-xl transition-transform duration-500 lg:hidden ${
				mobileOpen ? 'translate-y-0' : '-translate-y-full'
			}`}
		>
			<nav className="grid">
				{navItems.map(item => (
					<a
						key={item.href}
						href={item.href}
						onClick={() => setMobileOpen(false)}
						className="border-b border-[#B8874A]/15 py-5 font-serif text-4xl font-light text-[#F2EDE3] transition hover:pl-4 hover:text-[#D4A85A]"
					>
						{item.label}
					</a>
				))}
			</nav>

			<div className="mt-10 grid gap-4">
				<a
					href="#contact"
					onClick={() => setMobileOpen(false)}
					className="inline-flex items-center justify-center gap-3 bg-[#B8874A] px-8 py-4 text-[0.68rem] uppercase tracking-[0.28em] text-[#0E0C09] transition hover:bg-[#D4A85A]"
				>
					Request Estimate
					<ArrowRight className="size-4" />
				</a>

				<a
					href="tel:2096311892"
					className="inline-flex items-center justify-center gap-3 border border-[#B8874A]/25 px-8 py-4 text-[0.68rem] uppercase tracking-[0.28em] text-[#C4BAA8]"
				>
					<Phone className="size-4" />
					209.631.1892
				</a>
			</div>
		</div>
	);
}

// function HeroProof({ label, value }: { label: string; value: string }) {
// 	return (
// 		<div className="border border-[#B8874A]/15 bg-[#B8874A]/[0.035] px-4 py-4 backdrop-blur">
// 			<p className="text-[0.52rem] uppercase tracking-[0.3em] text-[#8A8070]">
// 				{label}
// 			</p>
// 			<p className="mt-2 text-sm font-medium text-[#F2EDE3]">{value}</p>
// 		</div>
// 	);
// }

function HeroSection() {
	return (
		<section className="relative min-h-[100svh] overflow-hidden bg-[var(--site-bg)] text-[var(--site-fg)]">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_82%,var(--site-brand-soft),transparent_34rem)]" />

			<div className="relative grid min-h-[100svh] lg:grid-cols-[0.92fr_1.08fr]">
				<div className="relative z-10 flex flex-col justify-center px-5 pb-16 pt-36 sm:px-8 lg:px-14 lg:pb-20 lg:pt-32">
					<Eyebrow>Custom Homes · Remodels · Commercial Projects</Eyebrow>

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

					<p className="mt-7 max-w-xl text-base leading-8 text-[var(--site-muted-strong)] sm:text-lg">
						A Central Valley construction company specializing in high-quality
						residential remodels, custom home builds, and commercial projects
						handled with clarity, communication, and craftsmanship.
					</p>

					<div className="mt-9 grid max-w-2xl gap-3 sm:grid-cols-3">
						<HeroProof label="Residential" value="Custom Homes" />
						<HeroProof label="Remodeling" value="Kitchens + Baths" />
						<HeroProof label="Commercial" value="Build-Outs" />
					</div>

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
				</div>

				<div className="relative hidden overflow-hidden lg:block">
					<img
						src={siteImages.kitchenAfter}
						alt="Completed Mirelez Construction kitchen remodel with navy island and white cabinetry"
						className="absolute inset-0 size-full object-cover"
					/>

					<div className="absolute inset-0 bg-[linear-gradient(to_right,var(--site-bg)_0%,color-mix(in_srgb,var(--site-bg)_78%,transparent)_22%,color-mix(in_srgb,var(--site-bg)_22%,transparent)_56%,transparent_100%),linear-gradient(to_bottom,color-mix(in_srgb,var(--site-bg)_72%,transparent)_0%,transparent_38%),linear-gradient(to_top,var(--site-bg)_0%,color-mix(in_srgb,var(--site-bg)_48%,transparent)_28%,transparent_62%)]" />

					<div className="absolute bottom-10 left-10 right-10 z-10">
						<div className="max-w-xl border border-[color:var(--site-border-strong)] bg-[color-mix(in_srgb,var(--site-card)_68%,transparent)] p-7 shadow-[0_30px_90px_var(--site-shadow)] backdrop-blur-2xl">
							<p className="text-[0.58rem] uppercase tracking-[0.36em] text-[var(--site-brand)]">
								Digital Showroom
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

					<div className="absolute right-10 top-32 z-10 hidden border border-[color:var(--site-border)] bg-[color-mix(in_srgb,var(--site-card)_58%,transparent)] px-5 py-4 backdrop-blur-xl xl:block">
						<p className="text-[0.55rem] uppercase tracking-[0.34em] text-[var(--site-muted)]">
							Experience
						</p>
						<p className="mt-2 font-serif text-3xl font-light text-[var(--site-fg)]">
							Craftsmanship
						</p>
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

function CapabilityCard({
	eyebrow,
	title,
	body,
	icon,
}: {
	eyebrow: string;
	title: string;
	body: string;
	icon: ReactNode;
}) {
	return (
		<article className="group relative min-h-[420px] overflow-hidden bg-[#1C1810] p-8 transition duration-500 hover:bg-[#211C13] lg:p-10">
			<div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#D4A85A] transition-transform duration-500 group-hover:scale-x-100" />

			<div className="flex items-center justify-between">
				<p className="text-[0.58rem] uppercase tracking-[0.34em] text-[#B8874A]">
					{eyebrow}
				</p>

				<div className="flex size-12 items-center justify-center border border-[#B8874A]/20 text-[#B8874A] transition group-hover:border-[#D4A85A]/55 group-hover:text-[#D4A85A]">
					{icon}
				</div>
			</div>

			<div className="mt-24">
				<h3 className="font-serif text-4xl font-light tracking-[-0.035em] text-[#F2EDE3]">
					{title}
				</h3>

				<p className="mt-5 max-w-sm text-sm leading-8 text-[#8A8070]">{body}</p>
			</div>

			<Link
				href="/#contact"
				className="absolute bottom-8 left-8 inline-flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.28em] text-[#8A8070] transition hover:text-[#D4A85A] lg:left-10"
			>
				Discuss Project
				<ArrowRight className="size-3" />
			</Link>
		</article>
	);
}

function ServiceProof({ label, value }: { label: string; value: string }) {
	return (
		<div>
			<p className="text-[0.58rem] uppercase tracking-[0.32em] text-[#B8874A]">
				{label}
			</p>
			<p className="mt-3 max-w-sm text-sm leading-7 text-[#A69C8B]">{value}</p>
		</div>
	);
}

function ServicesSection() {
	return (
		<section
			id="services"
			className="relative scroll-mt-24 overflow-hidden border-y border-[color:var(--site-border)] bg-[var(--site-card)] px-5 py-24 text-[var(--site-fg)] sm:px-8 lg:px-14 lg:py-32"
		>
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,var(--site-brand-soft),transparent_34rem),radial-gradient(circle_at_88%_78%,color-mix(in_srgb,var(--site-brand-strong)_10%,transparent),transparent_30rem)]" />

			<div className="relative mx-auto max-w-[1600px]">
				<div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
					<div>
						<Eyebrow>Capabilities</Eyebrow>

						<h2 className="mt-9 max-w-4xl font-serif text-5xl font-light leading-[0.98] tracking-[-0.045em] text-[var(--site-fg)] md:text-7xl">
							The right team
							<br />
							for the work that
							<br />
							<em className="italic text-[var(--site-brand-strong)]">
								matters most.
							</em>
						</h2>
					</div>

					<p className="max-w-2xl text-sm leading-8 text-[var(--site-muted-strong)] sm:text-base">
						From first conversation to final walkthrough, Mirelez Construction
						brings planning, communication, and craftsmanship to projects where
						trust is just as important as the finished result.
					</p>
				</div>

				<div className="mt-16 grid gap-px bg-[var(--site-border)] lg:grid-cols-3">
					{services.map(service => (
						<CapabilityCard
							key={service.title}
							eyebrow={service.eyebrow}
							title={service.title}
							body={service.body}
							icon={service.icon}
						/>
					))}
				</div>

				<div className="mt-16 grid gap-6 border-y border-[color:var(--site-border)] py-8 md:grid-cols-3">
					<ServiceProof
						label="Communication"
						value="Clear expectations before the work begins."
					/>
					<ServiceProof
						label="Craftsmanship"
						value="Details handled with care, not shortcuts."
					/>
					<ServiceProof
						label="Reliability"
						value="A project experience built around follow-through."
					/>
				</div>
			</div>
		</section>
	);
}

function ProcessSection() {
	return (
		<section
			id="process"
			className="relative scroll-mt-24 overflow-hidden bg-[#1C1810] px-5 py-24 sm:px-8 lg:px-14 lg:py-32"
		>
			<div className="absolute right-6 top-8 font-serif text-[24vw] font-light leading-none text-[#B8874A]/[0.035]">
				04
			</div>

			<div className="relative grid gap-12 lg:grid-cols-2 lg:items-end">
				<div>
					<Eyebrow>Process</Eyebrow>

					<h2 className="mt-10 font-serif text-5xl font-light leading-[0.98] tracking-[-0.045em] md:text-7xl">
						Communication
						<br />
						from start
						<br />
						to <em className="italic text-[#D4A85A]">finish.</em>
					</h2>
				</div>

				<p className="max-w-xl text-sm leading-8 text-[#8A8070] sm:text-base">
					The original site says it plainly: constant communication matters
					until the job is done. This section turns that promise into a clear,
					premium process clients can trust before they request a quote.
				</p>
			</div>

			<div className="relative mt-20 grid border-t border-[#B8874A]/15 md:grid-cols-2 lg:grid-cols-4">
				{processSteps.map((step, index) => (
					<article
						key={step.number}
						className={`py-10 pr-8 lg:py-14 lg:pr-11 ${
							index !== processSteps.length - 1
								? 'border-b border-[#B8874A]/10 md:border-b-0 lg:border-r'
								: ''
						}`}
					>
						<div className="font-serif text-7xl font-light leading-none text-[#B8874A]/15">
							{step.number}
						</div>

						<h3 className="mt-5 font-serif text-3xl font-light text-[#F2EDE3]">
							{step.title}
						</h3>

						<p className="mt-4 text-sm leading-8 text-[#8A8070]">{step.body}</p>
					</article>
				))}
			</div>
		</section>
	);
}

function ProjectImageCard({
	image,
	label,
	title,
}: {
	image: string;
	label: string;
	title: string;
}) {
	return (
		<article className="group relative min-h-[338px] overflow-hidden bg-[#2A2318]">
			<img
				src={image}
				alt={title}
				className="absolute inset-0 size-full object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
			/>

			<div className="absolute inset-0 bg-gradient-to-t from-[#0E0C09] via-[#0E0C09]/20 to-transparent" />

			<div className="absolute inset-x-0 bottom-0 p-7">
				<p className="text-[0.58rem] uppercase tracking-[0.34em] text-[#B8874A]">
					{label}
				</p>
				<h3 className="mt-2 max-w-md font-serif text-3xl font-light text-[#F2EDE3]">
					{title}
				</h3>
			</div>
		</article>
	);
}

function ContactSection() {
	const [status, setStatus] = useState<'idle' | 'error' | 'sending' | 'sent'>(
		'idle',
	);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const name = String(formData.get('name') || '').trim();
		const phone = String(formData.get('phone') || '').trim();
		const type = String(formData.get('type') || '').trim();

		if (!name || !phone || !type) {
			setStatus('error');
			window.setTimeout(() => setStatus('idle'), 2500);
			return;
		}

		setStatus('sending');

		window.setTimeout(() => {
			setStatus('sent');
			event.currentTarget.reset();
		}, 1200);
	}

	return (
		<section
			id="contact"
			className="grid scroll-mt-24 gap-14 bg-[#1C1810] px-5 py-24 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-14 lg:py-32"
		>
			<div>
				<Eyebrow>Contact Us</Eyebrow>

				<h2 className="mt-10 font-serif text-5xl font-light leading-[0.98] tracking-[-0.045em] md:text-7xl">
					Better yet,
					<br />
					see us in
					<br />
					<em className="italic text-[#D4A85A]">person.</em>
				</h2>

				<p className="mt-7 max-w-lg text-sm leading-8 text-[#8A8070] sm:text-base">
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
				className="rounded-[1.75rem] border border-[#C4BAA8]/20 bg-[#0E0C09]/50 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-7 lg:p-9"
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
							<span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8A8070]">
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
							<span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8A8070]">
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

				<div className="mt-6 rounded-2xl border border-[#B8874A]/12 bg-[#B8874A]/[0.035] p-4">
					<p className="text-xs leading-6 text-[#8A8070]">
						Mirelez Construction typically responds within one business day. For
						urgent requests, call{' '}
						<a
							href="tel:2096311892"
							className="text-[#D4A85A] underline-offset-4 hover:underline"
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
							? 'bg-[#8A8070] text-[#0E0C09]'
							: status === 'sent'
								? 'bg-[#3A6A28] text-[#F2EDE3]'
								: 'bg-[#B8874A] text-[#0E0C09] hover:bg-[#D4A85A]'
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
			<div className="flex size-12 shrink-0 items-center justify-center border border-[#B8874A]/25 text-[#B8874A]">
				{icon}
			</div>
			<div>
				<p className="text-[0.58rem] uppercase tracking-[0.32em] text-[#8A8070]">
					{label}
				</p>
				<p className="mt-1 text-sm text-[#F2EDE3]">{value}</p>
			</div>
		</>
	);

	if (href) {
		return (
			<a
				href={href}
				className="flex items-center gap-5 border-b border-[#B8874A]/10 pb-5 transition hover:border-[#B8874A]/30"
			>
				{content}
			</a>
		);
	}

	return (
		<div className="flex items-center gap-5 border-b border-[#B8874A]/10 pb-5">
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
		<div>
			<label
				htmlFor={htmlFor}
				className="mb-3 block text-[0.58rem] uppercase tracking-[0.3em] text-[#8A8070]"
			>
				{label}
			</label>
			{children}
		</div>
	);
}

function Eyebrow({ children }: { children: ReactNode; dark?: boolean }) {
	return (
		<div className="flex items-center gap-4 text-[0.58rem] uppercase tracking-[0.38em] text-[#B8874A]">
			<span className="h-px w-8 bg-[#B8874A]" />
			{children}
		</div>
	);
}
