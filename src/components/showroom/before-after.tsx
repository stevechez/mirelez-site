'use client';

import dynamic from 'next/dynamic';

type BeforeAfterProps = {
	before: string;
	after: string;
	beforeAlt: string;
	afterAlt: string;
};

const BeforeAfterSlider = dynamic(
	async () => {
		const mod = await import('react-compare-slider');

		return function Slider({
			before,
			after,
			beforeAlt,
			afterAlt,
		}: BeforeAfterProps) {
			return (
				<mod.ReactCompareSlider
					itemOne={<mod.ReactCompareSliderImage src={before} alt={beforeAlt} />}
					itemTwo={<mod.ReactCompareSliderImage src={after} alt={afterAlt} />}
					className="aspect-[16/10] w-full"
				/>
			);
		};
	},
	{
		ssr: false,
		loading: () => (
			<div className="aspect-[16/10] w-full animate-pulse rounded-3xl bg-muted" />
		),
	},
);

export function BeforeAfter({
	before,
	after,
	beforeAlt,
	afterAlt,
}: BeforeAfterProps) {
	return (
		<div className="overflow-hidden rounded-3xl border bg-background shadow-2xl">
			<BeforeAfterSlider
				before={before}
				after={after}
				beforeAlt={beforeAlt}
				afterAlt={afterAlt}
			/>
		</div>
	);
}
