'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

import type { GalleryImage } from '@/data/gallery';

export function GalleryLightbox({ images }: { images: GalleryImage[] }) {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const activeImage =
		activeIndex === null ? null : (images[activeIndex] ?? null);

	function close() {
		setActiveIndex(null);
	}

	function previous() {
		setActiveIndex(current => {
			if (current === null) return current;
			return current === 0 ? images.length - 1 : current - 1;
		});
	}

	function next() {
		setActiveIndex(current => {
			if (current === null) return current;
			return current === images.length - 1 ? 0 : current + 1;
		});
	}

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
	}, [activeIndex]);

	return (
		<>
			<div className="mx-auto max-w-[1500px]">
				<div className="columns-1 gap-3 sm:columns-2 lg:columns-3 xl:columns-4">
					{images.map((image, index) => (
						<button
							key={image.id}
							type="button"
							onClick={() => setActiveIndex(index)}
							className="group relative mb-3 block w-full break-inside-avoid overflow-hidden bg-[#15120D]"
							aria-label={`Open gallery image ${index + 1}`}
						>
							<img
								src={image.src}
								alt="Mirelez Construction project"
								className="h-auto w-full select-none object-cover transition duration-500 group-hover:scale-[1.015] group-hover:opacity-95"
								draggable={false}
							/>

							<div className="pointer-events-none absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
						</button>
					))}
				</div>
			</div>

			{activeImage && (
				<div
					className="fixed inset-0 z-[100] bg-[#0E0C09]/96 backdrop-blur-xl"
					role="dialog"
					aria-modal="true"
					aria-label="Gallery image preview"
				>
					<div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-[#B8874A]/15 bg-[#0E0C09]/72 px-5 py-4 sm:px-8 lg:px-14">
						<p className="text-[0.58rem] uppercase tracking-[0.32em] text-[#8A8070]">
							{activeIndex !== null ? activeIndex + 1 : null} / {images.length}
						</p>

						<button
							type="button"
							onClick={close}
							className="flex size-11 items-center justify-center border border-[#B8874A]/35 text-[#D4A85A] transition hover:bg-[#D4A85A] hover:text-[#0E0C09]"
							aria-label="Close gallery"
						>
							<X className="size-5" />
						</button>
					</div>

					<button
						type="button"
						onClick={previous}
						className="absolute left-4 top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#0E0C09]/72 text-[#F2EDE3] transition hover:bg-[#B8874A] hover:text-[#0E0C09] lg:left-8"
						aria-label="Previous image"
					>
						<ChevronLeft className="size-6" />
					</button>

					<button
						type="button"
						onClick={next}
						className="absolute right-4 top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#0E0C09]/72 text-[#F2EDE3] transition hover:bg-[#B8874A] hover:text-[#0E0C09] lg:right-8"
						aria-label="Next image"
					>
						<ChevronRight className="size-6" />
					</button>

					<div className="flex h-full items-center justify-center px-5 pb-12 pt-24 sm:px-8 lg:px-16">
						<img
							src={activeImage.src}
							alt="Mirelez Construction project"
							className="max-h-[82vh] max-w-full select-none object-contain"
							draggable={false}
						/>
					</div>
				</div>
			)}
		</>
	);
}
