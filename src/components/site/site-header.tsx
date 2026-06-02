'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, Phone, X } from 'lucide-react';

import { ThemeToggle } from '@/components/site/theme-toggle';

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
		label: 'Contact',
		href: '/#contact',
	},
];

export function SiteHeader() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 40);
		};

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

	const isSolid = scrolled || mobileOpen;

	return (
		<>
			<header
				className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
					isSolid ? 'py-4' : 'py-6'
				}`}
			>
				<div
					className={`absolute inset-0 transition-all duration-500 ${
						isSolid
							? 'border-b border-[color:var(--site-border)] bg-[var(--site-header-solid)] backdrop-blur-2xl'
							: 'bg-[linear-gradient(to_bottom,var(--site-header-bg),color-mix(in_srgb,var(--site-header-bg)_72%,transparent)_56%,transparent_100%)] backdrop-blur-[2px]'
					}`}
				/>

				<div className="relative mx-auto flex max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-14">
					<Link
						href="/"
						className="group"
						aria-label="Mirelez Construction home"
					>
						<img
							src="/images/mirelez-logo-transparent-dark.png"
							alt="Mirelez Construction logo"
							className="hidden h-14 w-auto dark:block"
						/>
						<img
							src="/images/mirelez-logo-transparent-light.png"
							alt="Mirelez Construction logo"
							className="h-14 w-auto dark:hidden"
						/>
					</Link>

					<nav
						className="hidden items-center gap-12 lg:flex"
						aria-label="Primary navigation"
					>
						{navItems.map(item => (
							<Link
								key={item.href}
								href={item.href}
								className="relative text-[0.65rem] uppercase tracking-[0.32em] text-[var(--site-muted-strong)] transition hover:text-[var(--site-fg)]"
							>
								{item.label}
							</Link>
						))}
					</nav>

					<div className="hidden items-center gap-4 lg:flex">
						<a
							href="tel:2096311892"
							className="inline-flex items-center gap-2 border border-[color:var(--site-border-strong)] bg-[color-mix(in_srgb,var(--site-card)_50%,transparent)] px-4 py-3 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[var(--site-fg)] backdrop-blur-md transition hover:border-[var(--site-brand-strong)] hover:text-[var(--site-brand-strong)]"
						>
							<Phone className="size-3.5 text-[var(--site-brand)]" />
							209.631.1892
						</a>

						<ThemeToggle />

						<Link
							href="/#contact"
							className="inline-flex items-center gap-3 border border-[color:var(--site-border-strong)] bg-[color-mix(in_srgb,var(--site-card)_50%,transparent)] px-6 py-3 text-[0.62rem] uppercase tracking-[0.3em] text-[var(--site-brand-strong)] backdrop-blur-md transition hover:border-[var(--site-brand-strong)] hover:bg-[var(--site-brand-strong)] hover:text-[var(--site-bg)]"
						>
							Request Estimate
							<ArrowRight className="size-3" />
						</Link>
					</div>

					<div className="flex items-center gap-3 lg:hidden">
						<ThemeToggle />

						<button
							type="button"
							onClick={() => setMobileOpen(value => !value)}
							className="flex size-11 items-center justify-center border border-[color:var(--site-border-strong)] bg-[color-mix(in_srgb,var(--site-card)_50%,transparent)] text-[var(--site-brand-strong)] backdrop-blur-md transition hover:bg-[var(--site-brand-strong)] hover:text-[var(--site-bg)]"
							aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
							aria-expanded={mobileOpen}
						>
							{mobileOpen ? (
								<X className="size-5" />
							) : (
								<Menu className="size-5" />
							)}
						</button>
					</div>
				</div>
			</header>

			<div
				className={`fixed inset-0 z-40 bg-[var(--site-card)] px-6 pb-8 pt-28 backdrop-blur-xl transition-transform duration-500 lg:hidden ${
					mobileOpen ? 'translate-y-0' : '-translate-y-full'
				}`}
			>
				<nav className="grid" aria-label="Mobile navigation">
					{navItems.map(item => (
						<Link
							key={item.href}
							href={item.href}
							onClick={() => setMobileOpen(false)}
							className="border-b border-[color:var(--site-border)] py-5 font-serif text-4xl font-light text-[var(--site-fg)] transition hover:pl-4 hover:text-[var(--site-brand-strong)]"
						>
							{item.label}
						</Link>
					))}
				</nav>

				<div className="mt-10 grid gap-4">
					<Link
						href="/#contact"
						onClick={() => setMobileOpen(false)}
						className="inline-flex items-center justify-center gap-3 bg-[var(--site-brand)] px-8 py-4 text-[0.68rem] uppercase tracking-[0.28em] text-[var(--site-bg)] transition hover:bg-[var(--site-brand-strong)]"
					>
						Request Estimate
						<ArrowRight className="size-4" />
					</Link>

					<a
						href="tel:2096311892"
						className="inline-flex items-center justify-center gap-3 border border-[color:var(--site-border-strong)] px-8 py-4 text-[0.68rem] uppercase tracking-[0.28em] text-[var(--site-muted-strong)] transition hover:border-[var(--site-brand-strong)] hover:text-[var(--site-fg)]"
					>
						<Phone className="size-4" />
						209.631.1892
					</a>
				</div>
			</div>
		</>
	);
}
