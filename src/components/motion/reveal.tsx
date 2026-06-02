'use client';

import {
	type CSSProperties,
	type ReactNode,
	useEffect,
	useRef,
	useState,
} from 'react';

type RevealProps = {
	children: ReactNode;
	className?: string;
	animation?: 'up' | 'soft';
	delay?: number;
	once?: boolean;
};

export function Reveal({
	children,
	className = '',
	animation = 'up',
	delay = 0,
	once = true,
}: RevealProps) {
	const ref = useRef<HTMLDivElement | null>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const element = ref.current;

		if (!element) return;

		const observer = new IntersectionObserver(
			entries => {
				const [entry] = entries;

				if (!entry) return;

				if (entry.isIntersecting) {
					setVisible(true);

					if (once) {
						observer.unobserve(entry.target);
					}
				} else if (!once) {
					setVisible(false);
				}
			},
			{
				threshold: 0.16,
				rootMargin: '0px 0px -8% 0px',
			},
		);

		observer.observe(element);

		return () => observer.disconnect();
	}, [once]);

	const style =
		delay > 0
			? ({
					animationDelay: `${delay}ms`,
				} as CSSProperties)
			: undefined;

	return (
		<div
			ref={ref}
			style={style}
			className={`${className} ${
				visible
					? animation === 'soft'
						? 'reveal-soft'
						: 'reveal-up'
					: 'opacity-0'
			}`}
		>
			{children}
		</div>
	);
}
