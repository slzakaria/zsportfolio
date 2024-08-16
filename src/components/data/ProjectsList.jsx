import Link from 'next/link';
import { FiChevronsRight } from 'react-icons/fi';
import siteData from '@/data/siteData';

export function ProjectsList() {
	const projects = siteData.projects;
	return (
		<section id='projects' className='sm:my-20 my-12'>
			<h2 className='sm:text-2xl text-xl font-jetBrain'>What i built on the side</h2>
			<ul className='mt-5 flex flex-col gap-2'>
				{projects.map((project) => (
					<li key={project.id} className='group font-cousine'>
						<Link
							target='_blank'
							href={project.link}
							className='flex gap-5 items-center project--Link'>
							<span className='w-full text-base sm:text-lg dark:text-white text-dark group-hover:text-green-700 group-hover:underline decoration-solid underline-offset-4 decoration-limes'>
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
