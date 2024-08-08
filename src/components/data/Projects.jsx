import Link from 'next/link';
import { FiChevronsRight } from 'react-icons/fi';
import siteData from '@/data/siteData';

export function Projects() {
	const projects = siteData.projects;
	console.log(projects);
	return (
		<section className='mt-12'>
			<h1 className='sm:text-2xl text-xl font-jetBrain'>What i built on the side</h1>
			<ul className='mt-5 flex flex-col gap-2'>
				{projects.map((project) => (
					<li key={project.id} className='group font-cousine'>
						<Link href={project.link} className='flex gap-5 items-center'>
							<span className='w-full text-sm text-slate-400 group-hover:text-white group-hover:underline decoration-dashed decoration-lightblue'>
								{project.title}
							</span>
							<div className='hidden sm:block w-full mr-2 border-t border-gray-700 rounded-2 transition duration-110 opacity-80 group-hover:border-white'></div>
							<FiChevronsRight className='w-8 h-6 cursor-pointer group-hover:animate-flash group-hover:text-lightblue' />
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
