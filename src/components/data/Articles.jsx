import Link from 'next/link';
import { FiChevronsRight } from 'react-icons/fi';
import siteData from '@/data/siteData';

export function Articles() {
	const articles = siteData.articles;
	return (
		<section id='articles' className='my-10'>
			<h1 className='text-2xl font-jetBrain mb-5'>Some of my thoughts</h1>
			<ul className='mt-5 flex flex-col gap-2'>
				{articles.map((article) => (
					<li key={article.id} className='group font-cousine'>
						<Link target='_blank' href={article.link} className='flex gap-5 items-center'>
							<span className='w-full text-sm text-slate-400 group-hover:text-white group-hover:underline decoration-dashed decoration-lightblue'>
								{article.title}
							</span>
							<FiChevronsRight className='w-4 h-4 cursor-pointer animate-flash group-hover:text-lightblue' />
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
