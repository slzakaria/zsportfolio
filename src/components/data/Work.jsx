import { WorkStore } from '@/data/workStore';
import Link from 'next/link';

export function Work() {
	return (
		<section className='my-10'>
			<h1 className='sm:text-2xl text-xl font-jetBrain'>What i have been doing</h1>
			<ul className='mt-5 flex flex-col gap-2'>
				{WorkStore.map((work) => (
					<li key={work.id} className='group font-cousine'>
						<Link href={work.link} className='flex gap-2 text-sm items-center'>
							<span className='w-full sm:text-sm text-xs text-slate-400 group-hover:text-white group-hover:underline decoration-dashed decoration-lightblue'>
								{work.position}
							</span>
							<span className='w-full text-xs sm:text-sm'>{work.name}</span>
							<div className='w-full flex justify-start text-xs'>
								<span className='mx-1'>{work.to}</span>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
