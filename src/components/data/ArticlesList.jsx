import Link from 'next/link';
import { FiChevronsRight } from 'react-icons/fi';
import siteData from '@/data/siteData';

export function ArticlesList() {
	const articles = siteData.articles;
	return (
		<section id='articles' className='sm:my-20 my-12'>
			<h2 className='sm:text-2xl text-xl font-jetBrain'>Some of my thoughts</h2>
			<ul className='mt-5 flex flex-col gap-2'>
				{articles.map((article) => (
					<li key={article.id} className='group font-jetBrain'>
						<Link
							target='_blank'
							href={article.link}
							className='flex gap-5 items-center article--Link'>
							<article className='sm:min-w-[400px] underline w-full text-base sm:text-lg dark:text-white text-dark group-hover:text-limes group-hover:underline underline-offset-4 decoration-solid decoration-limes'>
								{article.title}
							</article>
							<FiChevronsRight className='w-4 h-4 cursor-pointer animate-flash group-hover:text-limes' />
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
