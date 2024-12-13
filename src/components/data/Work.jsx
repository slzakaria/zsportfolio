import { WorkStore } from '@/data/workStore';
import Link from 'next/link';

export function Work() {
	return (
		<section className='sm:my-20 my-12'>
			<h2 className='sm:text-2xl text-xl font-jetBrain'>My career</h2>
			<ul className='mt-5 flex flex-col gap-2'>
				{WorkStore.map((work) => (
					<li key={work.id} className='group font-jetBrain'>
						<Link href={work.link} className='flex gap-2 text-sm items-center'>
							<span className='w-full sm:text-base text-xs dark:text-white text-dark group-hover:text-limes group-hover:underline decoration-solid underline-offset-4 decoration-limes'>
								{work.position}
							</span>
							<span className='w-full dark:text-white text-dark text-center mx-auto text-xs sm:text-base'>
								{work.name}
							</span>
							<div className='w-full flex dark:text-white text-dark justify-end text-xs sm:text-sm'>
								<span className='mx-1'>{work.to}</span>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
