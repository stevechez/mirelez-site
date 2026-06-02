'use client';

import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

import type { GalleryImage } from '@/data/gallery';
import { Reveal } from '@/components/motion/reveal';

export function GalleryLightbox({ images }: { images: GalleryImage[] }) {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const activeImage =
		activeIndex === null ? null : (images[activeIndex] ?? null);

	const close = useCallback(() => {
		setActiveIndex(null);
	}, []);

	const previous = useCallback(() => {
		setActiveIndex(current => {
			if (current === null) return current;
			return current === 0 ? images.length - 1 : current - 1;
		});
	}, [images.length]);

	const next = useCallback(() => {
		setActiveIndex(current => {
			if (current === null) return current;
			return current === images.length - 1 ? 0 : current + 1;
		});
	}, [images.length]);

	useEffect(() => {
		if (activeIndex === null) return;

		document.body.style.overflow = 'hidden';

		function onKeyDown(event: KeyboardEvent) {
			if (event.key === 'Escape') close();
			if (event.key === 'ArrowLeft') previous();
			if (event.key === 'ArrowRight') next();
		}

		window.addEventListener('keydown', onKeyDown);

		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [activeIndex, close, previous, next]);

	if (!images.length) {
		return null;
	}

	return (
		<>
			<div className="mx-auto max-w-[1500px]">
				<div className="columns-1 gap-3 sm:columns-2 lg:columns-3 xl:columns-4">
					{images.map((image, index) => (
						<Reveal
							key={image.id}
							delay={(index % 8) * 70}
							animation="soft"
							className="mb-3 break-inside-avoid"
						>
							<button
								type="button"
								onClick={() => setActiveIndex(index)}
								className="group relative block w-full overflow-hidden bg-[var(--site-card)] text-left shadow-[0_18px_60px_var(--site-shadow)]"
								aria-label={`Open gallery image ${index + 1}`}
							>
								<img
									src={image.src}
									alt="Mirelez Construction project"
									className="h-auto w-full select-none object-cover transition duration-500 group-hover:scale-[1.018] group-hover:opacity-95"
									draggable={false}
									loading={index < 4 ? 'eager' : 'lazy'}
								/>

								<div className="pointer-events-none absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
							</button>
						</Reveal>
					))}
				</div>
			</div>

			{activeImage && activeIndex !== null && (
				<div
					className="fixed inset-0 z-[100] bg-[color-mix(in_srgb,var(--site-bg)_96%,transparent)] backdrop-blur-xl"
					role="dialog"
					aria-modal="true"
					aria-label="Gallery image preview"
				>
					<div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between border-b border-[color:var(--site-border)] bg-[color-mix(in_srgb,var(--site-bg)_78%,transparent)] px-5 py-4 backdrop-blur-xl sm:px-8 lg:px-14">
						<p className="text-[0.58rem] uppercase tracking-[0.32em] text-[var(--site-muted)]">
							{activeIndex + 1} / {images.length}
						</p>

						<button
							type="button"
							onClick={close}
							className="flex size-11 items-center justify-center border border-[color:var(--site-border-strong)] text-[var(--site-brand-strong)] transition hover:bg-[var(--site-brand-strong)] hover:text-[var(--site-bg)]"
							aria-label="Close gallery"
						>
							<X className="size-5" />
						</button>
					</div>

					<button
						type="button"
						onClick={previous}
						className="absolute left-4 top-1/2 z-20 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-[color:var(--site-border)] bg-[color-mix(in_srgb,var(--site-card)_78%,transparent)] text-[var(--site-fg)] shadow-[0_20px_70px_var(--site-shadow)] backdrop-blur-xl transition hover:bg-[var(--site-brand-strong)] hover:text-[var(--site-bg)] lg:left-8"
						aria-label="Previous image"
					>
						<ChevronLeft className="size-6" />
					</button>

					<button
						type="button"
						onClick={next}
						className="absolute right-4 top-1/2 z-20 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-[color:var(--site-border)] bg-[color-mix(in_srgb,var(--site-card)_78%,transparent)] text-[var(--site-fg)] shadow-[0_20px_70px_var(--site-shadow)] backdrop-blur-xl transition hover:bg-[var(--site-brand-strong)] hover:text-[var(--site-bg)] lg:right-8"
						aria-label="Next image"
					>
						<ChevronRight className="size-6" />
					</button>

					<div className="flex h-full items-center justify-center px-5 pb-12 pt-24 sm:px-8 lg:px-20">
						<img
							src={activeImage.src}
							alt="Mirelez Construction project"
							className="max-h-[82vh] max-w-full select-none object-contain shadow-[0_30px_120px_var(--site-shadow)]"
							draggable={false}
						/>
					</div>
				</div>
			)}
		</>
	);
}
