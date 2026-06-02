'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme();

	const isDark = resolvedTheme === 'dark';

	return (
		<button
			type="button"
			onClick={() => setTheme(isDark ? 'light' : 'dark')}
			className="relative flex size-11 items-center justify-center border border-[color:var(--site-border-strong)] bg-[color-mix(in_srgb,var(--site-card)_50%,transparent)] text-[var(--site-brand-strong)] backdrop-blur-md transition hover:border-[var(--site-brand-strong)] hover:bg-[var(--site-brand-strong)] hover:text-[var(--site-bg)]"
			aria-label="Toggle theme"
		>
			<Sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
		</button>
	);
}
