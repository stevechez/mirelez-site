'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type BeforeAfterSliderProps = {
	beforeSrc: string;
	afterSrc: string;
	beforeAlt?: string;
	afterAlt?: string;
};

export function BeforeAfterSlider({
	beforeSrc,
	afterSrc,
	beforeAlt = 'Before remodel by Mirelez Construction',
	afterAlt = 'After remodel by Mirelez Construction',
}: BeforeAfterSliderProps) {
	const wrapperRef = useRef<HTMLDivElement | null>(null);
	const [position, setPosition] = useState(50);
	const [dragging, setDragging] = useState(false);

	const updatePosition = useCallback((clientX: number) => {
		const wrapper = wrapperRef.current;

		if (!wrapper) return;

		const rect = wrapper.getBoundingClientRect();
		const next = Math.max(
			4,
			Math.min(96, ((clientX - rect.left) / rect.width) * 100),
		);

		setPosition(next);
	}, []);

	useEffect(() => {
		function onMove(event: PointerEvent) {
			if (!dragging) return;

			updatePosition(event.clientX);
		}

		function onUp() {
			setDragging(false);
		}

		window.addEventListener('pointermove', onMove);
		window.addEventListener('pointerup', onUp);

		return () => {
			window.removeEventListener('pointermove', onMove);
			window.removeEventListener('pointerup', onUp);
		};
	}, [dragging, updatePosition]);

	return (
		<div
			ref={wrapperRef}
			className="relative aspect-[16/10] cursor-ew-resize touch-none select-none overflow-hidden bg-[var(--site-card)] shadow-[0_30px_100px_var(--site-shadow)]"
			role="img"
			aria-label="Before and after project comparison"
			onPointerDown={event => {
				event.preventDefault();
				event.currentTarget.setPointerCapture(event.pointerId);
				setDragging(true);
				updatePosition(event.clientX);
			}}
			onPointerUp={event => {
				event.currentTarget.releasePointerCapture(event.pointerId);
				setDragging(false);
			}}
			onPointerCancel={() => {
				setDragging(false);
			}}
		>
			<img
				src={beforeSrc}
				alt={beforeAlt}
				className="pointer-events-none absolute inset-0 size-full select-none object-cover"
				draggable={false}
			/>

			<div
				className="absolute inset-0"
				style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
			>
				<img
					src={afterSrc}
					alt={afterAlt}
					className="pointer-events-none size-full select-none object-cover"
					draggable={false}
				/>
			</div>

			<span className="pointer-events-none absolute left-5 top-5 z-30 bg-[color-mix(in_srgb,var(--site-bg)_78%,transparent)] px-4 py-2 text-[0.58rem] uppercase tracking-[0.28em] text-[var(--site-fg)] backdrop-blur-md">
				Before
			</span>

			<span className="pointer-events-none absolute right-5 top-5 z-30 bg-[color-mix(in_srgb,var(--site-bg)_78%,transparent)] px-4 py-2 text-[0.58rem] uppercase tracking-[0.28em] text-[var(--site-fg)] backdrop-blur-md">
				After
			</span>

			<div
				className="absolute bottom-0 top-0 z-30 w-0.5 bg-[var(--site-brand-strong)]"
				style={{ left: `${position}%` }}
			>
				<div className="absolute top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--site-brand)] text-[var(--site-bg)] shadow-[0_0_0_6px_var(--site-brand-soft)]">
					<ChevronLeft className="size-4" />
					<ChevronRight className="size-4" />
				</div>
			</div>

			<div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[color-mix(in_srgb,var(--site-bg)_72%,transparent)] to-transparent p-5">
				<p className="text-[0.55rem] uppercase tracking-[0.28em] text-[var(--site-muted-strong)]">
					Drag to compare
				</p>
			</div>
		</div>
	);
}
