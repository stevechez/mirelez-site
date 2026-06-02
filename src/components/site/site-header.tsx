'use client';

import Link from 'next/link';
import { Menu, Phone, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { ThemeToggle } from '@/components/site/theme-toggle';

const navItems = [
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

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 border-b border-border/60 bg-background/72 backdrop-blur-2xl">
			<div className="showroom-shell flex h-20 items-center justify-between">
				<Link href="/" className="group">
					<div className="flex items-center gap-3">
						<div className="flex size-11 items-center justify-center rounded-2xl border border-border/70 bg-card shadow-sm transition group-hover:-translate-y-0.5">
							<span className="text-sm font-black tracking-[-0.08em]">MC</span>
						</div>

						<div>
							<p className="text-sm font-bold tracking-[-0.03em]">
								Mirelez Construction
							</p>
							<p className="mt-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
								Digital Showroom
							</p>
						</div>
					</div>
				</Link>

				<nav className="hidden items-center gap-8 lg:flex">
					{navItems.map(item => (
						<a
							key={item.href}
							href={item.href}
							className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
						>
							{item.label}
						</a>
					))}
				</nav>

				<div className="hidden items-center gap-3 lg:flex">
					<ThemeToggle />

					<Button
						variant="outline"
						className="h-10 rounded-full border-border/70 bg-background/70 px-5 backdrop-blur"
						asChild
					>
						<a href="tel:2096311892">
							<Phone className="mr-2 size-4" />
							209.631.1892
						</a>
					</Button>

					<Button className="h-10 rounded-full px-5" asChild>
						<a href="#contact">Request Consultation</a>
					</Button>
				</div>

				<div className="flex items-center gap-2 lg:hidden">
					<ThemeToggle />

					<MobileMenu />
				</div>
			</div>
		</header>
	);
}

function MobileMenu() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					variant="outline"
					size="icon"
					className="size-10 rounded-full border-border/70 bg-background/70 backdrop-blur"
					aria-label="Open menu"
				>
					<Menu className="size-5" />
				</Button>
			</SheetTrigger>

			<SheetContent
				side="right"
				className="w-[88vw] max-w-md border-l border-border/70 bg-background/95 p-0 backdrop-blur-2xl"
			>
				<div className="flex h-full flex-col">
					<SheetHeader className="border-b border-border/70 px-6 py-6 text-left">
						<div className="flex items-center justify-between">
							<div>
								<SheetTitle className="text-base">
									Mirelez Construction
								</SheetTitle>
								<p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
									Digital Showroom
								</p>
							</div>

							<SheetClose asChild>
								<Button
									variant="outline"
									size="icon"
									className="size-9 rounded-full"
									aria-label="Close menu"
								>
									<X className="size-4" />
								</Button>
							</SheetClose>
						</div>
					</SheetHeader>

					<div className="flex-1 px-6 py-8">
						<p className="text-xs font-bold uppercase tracking-[0.28em] text-muted-foreground">
							Navigation
						</p>

						<nav className="mt-6 grid gap-2">
							{navItems.map(item => (
								<SheetClose asChild key={item.href}>
									<a
										href={item.href}
										className="group flex items-center justify-between rounded-2xl border border-transparent px-4 py-4 text-lg font-semibold tracking-[-0.04em] transition hover:border-border hover:bg-card"
									>
										{item.label}
										<span className="text-muted-foreground transition group-hover:translate-x-1 group-hover:text-foreground">
											→
										</span>
									</a>
								</SheetClose>
							))}
						</nav>

						<Separator className="my-8" />

						<div className="rounded-3xl border border-border/70 bg-card/70 p-5">
							<p className="text-sm font-semibold">
								Build trust before the first call.
							</p>
							<p className="mt-2 text-sm leading-6 text-muted-foreground">
								A premium showroom experience designed to turn project photos,
								transformations, and craftsmanship into confidence.
							</p>
						</div>
					</div>

					<div className="border-t border-border/70 p-6">
						<div className="grid gap-3">
							<Button className="h-12 rounded-full" asChild>
								<a href="#contact">Request Consultation</a>
							</Button>

							<Button
								variant="outline"
								className="h-12 rounded-full bg-background/70"
								asChild
							>
								<a href="tel:2096311892">
									<Phone className="mr-2 size-4" />
									Call 209.631.1892
								</a>
							</Button>
						</div>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
