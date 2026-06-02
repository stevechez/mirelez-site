import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const footerLinks = [
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

export function SiteFooter() {
	return (
		<footer className="border-t border-[color:var(--site-border)] bg-[var(--site-bg)]">
			<div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
				<div className="flex flex-col gap-10 border-b border-[color:var(--site-border)] py-10 lg:flex-row lg:items-center lg:justify-between">
					<Link href="/" className="group">
						<p className="font-serif text-xl font-light uppercase tracking-[0.22em] text-[var(--site-fg)] transition group-hover:text-[var(--site-brand-strong)]">
							Mirelez Construction
						</p>
						<p className="mt-2 text-[0.58rem] uppercase tracking-[0.34em] text-[var(--site-muted)]">
							Central Valley · California
						</p>
					</Link>

					<nav className="flex flex-wrap gap-x-7 gap-y-3">
						{footerLinks.map(link => (
							<a
								key={link.href}
								href={link.href}
								className="text-[0.62rem] uppercase tracking-[0.28em] text-[var(--site-muted)] transition hover:text-[var(--site-fg)]"
							>
								{link.label}
							</a>
						))}
					</nav>
				</div>

				<div className="grid gap-8 py-10 lg:grid-cols-[1fr_auto] lg:items-end">
					<p className="max-w-2xl font-serif text-3xl font-light leading-tight tracking-[-0.035em] text-[var(--site-fg)] md:text-4xl">
						Building with integrity,
						<br />
						from the{' '}
						<em className="italic text-[var(--site-brand-strong)]">
							ground up.
						</em>
					</p>

					<div className="grid gap-3 text-sm text-[var(--site-muted)]">
						<a
							href="tel:2096311892"
							className="flex items-center gap-3 transition hover:text-[var(--site-fg)] lg:justify-end"
						>
							<Phone className="size-4 text-[var(--site-brand)]" />
							209.631.1892
						</a>

						<a
							href="mailto:MirelezConstruction@gmail.com"
							className="flex items-center gap-3 transition hover:text-[var(--site-fg)] lg:justify-end"
						>
							<Mail className="size-4 text-[var(--site-brand)]" />
							MirelezConstruction@gmail.com
						</a>

						<p className="flex items-center gap-3 lg:justify-end">
							<MapPin className="size-4 text-[var(--site-brand)]" />
							Central Valley, California
						</p>
					</div>
				</div>

				<div className="flex flex-col gap-3 border-t border-[color:var(--site-border)] py-6 text-[0.58rem] uppercase tracking-[0.28em] text-[var(--site-muted)] sm:flex-row sm:items-center sm:justify-between">
					<p>© 2026 Mirelez Construction. All rights reserved.</p>
					<p>Custom Homes · Remodels · Commercial Projects</p>
				</div>
			</div>
		</footer>
	);
}
