'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(() => {
		if (typeof window !== 'undefined') {
			return true;
		}
		return false;
	});

	if (!mounted) {
		return (
			<button
				type="button"
				className="relative flex size-11 items-center justify-center border border-[color:var(--site-border-strong)] bg-[color-mix(in_srgb,var(--site-card)_50%,transparent)] text-[var(--site-brand-strong)] backdrop-blur-md"
				aria-label="Toggle theme"
			>
				<Sun className="size-4" />
			</button>
		);
	}

	const isDark = resolvedTheme === 'dark';

	return (
		<button
			type="button"
			onClick={() => setTheme(isDark ? 'light' : 'dark')}
			className="relative flex size-11 items-center justify-center border border-[color:var(--site-border-strong)] bg-[color-mix(in_srgb,var(--site-card)_50%,transparent)] text-[var(--site-brand-strong)] backdrop-blur-md transition hover:border-[var(--site-brand-strong)] hover:bg-[var(--site-brand-strong)] hover:text-[var(--site-bg)]"
			aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
			title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
		>
			{isDark ? <Moon className="size-4" /> : <Sun className="size-4" />}
		</button>
	);
}
