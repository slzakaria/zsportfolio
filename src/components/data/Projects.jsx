import Link from 'next/link';
import { FiChevronsRight } from 'react-icons/fi';
import siteData from '@/data/siteData';

export function Projects() {
	const projects = siteData.projects;
	return (
		<section id='projects' className='mt-12'>
			<h1 className='sm:text-2xl text-xl font-jetBrain'>What i built on the side</h1>
			<ul className='mt-5 flex flex-col gap-2'>
				{projects.map((project) => (
					<li key={project.id} className='group font-cousine'>
						<Link target='_blank' href={project.link} className='flex gap-5 items-center'>
							<span className='w-full text-sm sm:text-base text-slate-400 group-hover:text-white group-hover:underline decoration-dashed decoration-limes'>
								{project.title}
							</span>
							<div className='hidden sm:block w-full mr-2 border-t-2 border-gray-700 rounded-2 transition duration-110 opacity-80 group-hover:border-limes'></div>
							<FiChevronsRight className='w-8 h-6 cursor-pointer animate-flash group-hover:text-limes' />
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
