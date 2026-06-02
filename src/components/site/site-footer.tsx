import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const footerLinks = [
	{
		label: 'Services',
		href: '/#services',
	},
	{
		label: 'Gallery',
		href: '/gallery',
	},
	{
		label: 'Transformations',
		href: '/#transformations',
	},
	{
		label: 'Process',
		href: '/#process',
	},
	{
		label: 'Contact',
		href: '/#contact',
	},
];

export function SiteFooter() {
	return (
		<footer className="border-t border-border/70 bg-card/40">
			<div className="showroom-shell">
				<div className="grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
					<div>
						<p className="text-xs font-bold uppercase tracking-[0.32em] text-muted-foreground">
							Mirelez Construction
						</p>

						<h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-6xl">
							Craftsmanship made visible.
							<br />
							Trust made immediate.
						</h2>

						<p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
							A high-end digital showroom designed to help homeowners and
							businesses understand the quality, process, and professionalism
							behind every project before they ever make contact.
						</p>

						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<Button className="h-11 rounded-full px-6" asChild>
								<Link href="/#contact">
									Request Consultation
									<ArrowUpRight className="ml-2 size-4" />
								</Link>
							</Button>

							<Button
								variant="outline"
								className="h-11 rounded-full bg-background/70 px-6"
								asChild
							>
								<a href="/gallery">View Projects</a>
							</Button>
						</div>
					</div>

					<div className="grid gap-8 sm:grid-cols-2">
						<div>
							<p className="text-xs font-bold uppercase tracking-[0.26em] text-muted-foreground">
								Explore
							</p>

							<nav className="mt-5 grid gap-3">
								{footerLinks.map(link => (
									<a
										key={link.href}
										href={link.href}
										className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
									>
										{link.label}
									</a>
								))}
							</nav>
						</div>

						<div>
							<p className="text-xs font-bold uppercase tracking-[0.26em] text-muted-foreground">
								Contact
							</p>

							<div className="mt-5 grid gap-4 text-sm text-muted-foreground">
								<a
									href="tel:2096311892"
									className="flex items-center gap-3 transition hover:text-foreground"
								>
									<Phone className="size-4" />
									209.631.1892
								</a>

								<a
									href="mailto:info@mirelezconstruction.com"
									className="flex items-center gap-3 transition hover:text-foreground"
								>
									<Mail className="size-4" />
									info@mirelezconstruction.com
								</a>

								<div className="flex items-center gap-3">
									<MapPin className="size-4" />
									Central Valley, California
								</div>
							</div>
						</div>
					</div>
				</div>

				<Separator />

				<div className="flex py-6 text-xs text-muted-foreground">
					<p>© 2026 Mirelez Construction. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
