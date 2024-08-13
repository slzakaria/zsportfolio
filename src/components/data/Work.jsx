import { WorkStore } from '@/data/workStore';
import Link from 'next/link';

export function Work() {
	return (
		<section className='my-10'>
			<h2 className='sm:text-2xl text-xl font-jetBrain'>What i have been doing</h2>
			<ul className='mt-5 flex flex-col gap-2'>
				{WorkStore.map((work) => (
					<li key={work.id} className='group font-cousine'>
						<Link href={work.link} className='flex gap-2 text-sm items-center'>
							<span className='w-full sm:text-base text-xs text-slate-400 group-hover:text-limes group-hover:underline decoration-solid underline-offset-4 decoration-limes'>
								{work.position}
							</span>
							<span className='w-full text-eggshell text-center mx-auto text-xs sm:text-base'>
								{work.name}
							</span>
							<div className='w-full flex text-eggshell justify-end text-xs sm:text-sm'>
								<span className='mx-1'>{work.to}</span>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
