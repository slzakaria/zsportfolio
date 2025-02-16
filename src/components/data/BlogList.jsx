import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BlogSearch } from '../blog/BlogSearch';
import { BlogSkeleton } from '../ui/BlogSkeleton';
import { BlogJsonLd } from '../SEO/BlogJsonLd';
import Image from 'next/image';

export function BlogList({ posts: initialPosts }) {
	const [posts, setPosts] = useState(initialPosts);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	const handleSearch = (searchTerm) => {
		if (!searchTerm.trim()) {
			setPosts(initialPosts);
			return;
		}

		const filtered = initialPosts.filter((post) => {
			const searchContent = `${post.title} ${post.excerpt} ${post.tags.join(' ')}`.toLowerCase();
			return searchContent.includes(searchTerm.toLowerCase());
		});
		setPosts(filtered);
	};

	if (loading) return <BlogSkeleton />;

	return (
		<>
			<BlogSearch onSearch={handleSearch} />
			<div className='mt-8'>
				<div className='grid gap-6'>
					{posts.map((post) => (
						<article
							key={post.slug}
							className='p-4 rounded-lg transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800'>
							<BlogJsonLd post={post} />
							<Link href={`/blog/${post.slug}`}>
								<div className='flex flex-col gap-4'>
									{post.coverImage && (
										<div className='relative w-full h-[200px] rounded-lg overflow-hidden'>
											<Image
												src={post.coverImage}
												alt={post.title}
												fill
												className='object-cover transition-transform duration-300 hover:scale-105'
											/>
										</div>
									)}
									<div className='flex flex-col gap-2'>
										<h3 className='text-xl font-semibold'>{post.title}</h3>
										<p className='text-sm text-slate-600 dark:text-slate-400'>
											{post.date} • {post.readingTime} min read
										</p>
										<p className='text-pretty'>{post.excerpt}</p>
										<div className='flex flex-wrap gap-2 mt-2'>
											{post.tags.map((tag) => (
												<span
													key={tag}
													className='px-2 py-1 text-sm rounded-full bg-slate-200 dark:bg-slate-700'>
													{tag}
												</span>
											))}
										</div>
									</div>
								</div>
							</Link>
						</article>
					))}
				</div>
			</div>
		</>
	);
}
