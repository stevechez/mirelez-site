'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type BeforeAfterSliderProps = {
	beforeSrc: string;
	afterSrc: string;
	beforeAlt: string;
	afterAlt: string;
};

export function BeforeAfterSlider({
	beforeSrc,
	afterSrc,
	beforeAlt,
	afterAlt,
}: BeforeAfterSliderProps) {
	const wrapperRef = useRef<HTMLDivElement | null>(null);
	const [position, setPosition] = useState(50);
	const [dragging, setDragging] = useState(false);

	const updatePosition = useCallback((clientX: number) => {
		const wrapper = wrapperRef.current;
		if (!wrapper) return;

		const rect = wrapper.getBoundingClientRect();
		const next = Math.max(
			5,
			Math.min(95, ((clientX - rect.left) / rect.width) * 100),
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
			className="relative aspect-[16/10] cursor-ew-resize touch-none overflow-hidden bg-[#2A2318]"
			role="img"
			aria-label="Before and after project comparison"
			onPointerDown={event => {
				setDragging(true);
				updatePosition(event.clientX);
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

			<span className="pointer-events-none absolute left-5 top-5 z-30 select-none bg-[#0E0C09]/80 px-4 py-2 text-[0.58rem] uppercase tracking-[0.28em] text-[#F2EDE3]">
				Before
			</span>

			<span className="pointer-events-none absolute right-5 top-5 z-30 select-none bg-[#0E0C09]/80 px-4 py-2 text-[0.58rem] uppercase tracking-[0.28em] text-[#F2EDE3]">
				After
			</span>
			<div
				className="absolute bottom-0 top-0 z-30 w-0.5 bg-[#D4A85A]"
				style={{ left: `${position}%` }}
			>
				<div className="absolute top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#B8874A] text-[#0E0C09] shadow-[0_0_0_5px_rgba(184,135,74,0.22)]">
					<ChevronLeft className="size-4" />
					<ChevronRight className="size-4" />
				</div>
			</div>
		</div>
	);
}
