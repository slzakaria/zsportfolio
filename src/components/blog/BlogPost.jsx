import { MDXProvider } from '@mdx-js/react';
import Image from 'next/image';

const components = {
	h1: (props) => <h1 className='text-3xl font-bold mb-4' {...props} />,
	h2: (props) => <h2 className='text-2xl font-bold mt-8 mb-4' {...props} />,
	p: (props) => <p className='mb-4 text-lg text-pretty' {...props} />,
	code: (props) => <code className='bg-gray-100 dark:bg-gray-800 rounded px-2 py-1' {...props} />,
	pre: (props) => (
		<pre className='bg-gray-100 dark:bg-gray-800 rounded p-4 my-4 overflow-auto' {...props} />
	),
};

export function BlogPost({ children, frontMatter }) {
	return (
		<article className='mt-14 prose dark:prose-invert max-w-none'>
			{frontMatter.coverImage && (
				<div className='relative w-[80%] h-[400px] mb-8 rounded-lg overflow-hidden'>
					<Image
						src={frontMatter.coverImage}
						alt={frontMatter.title}
						className='object-contain'
						priority
						fill
					/>
				</div>
			)}
			<div className='mb-8'>
				<h1 className='text-3xl font-bold'>{frontMatter.title}</h1>
				<div className='flex gap-4 mt-4 text-sm text-gray-600 dark:text-gray-400'>
					<time>{frontMatter.date}</time>
					<span>•</span>
					<span>{frontMatter.readTime} min read</span>
				</div>
				<div className='flex gap-2 mt-4'>
					{frontMatter.tags.map((tag) => (
						<span
							key={tag}
							className='px-2 py-1 text-sm rounded-full bg-slate-200 dark:bg-slate-700'>
							{tag}
						</span>
					))}
				</div>
			</div>
			<MDXProvider components={components}>{children}</MDXProvider>
		</article>
	);
}
