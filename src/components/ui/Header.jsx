import Image from 'next/image';
import Link from 'next/link';
import profile from '@/assets/logos/profile.jpg';

export function Header({ active, setPath }) {
	const pages = ['/', '/projects', '/articles', '/contact'];
	return (
		<>
			<header className='container flex flex-col-reverse gap-5 sm:flex-row sm:gap-0 items-center justify-between font-cousine'>
				<div className='flex gap-2'>
					<Image
						src={profile}
						alt='zakaria slimane'
						placeholder='blur' // Optional blur-up while loading
						className='rounded-full'
						width={50}
						height={50}
					/>
					<div className='min-h-[50px] flex flex-col items-start justify-center text-xs'>
						<h1 className='font-bold'>zs</h1>
						<span className='text-gray-500'>@zakariaslimane</span>
					</div>
				</div>
				<nav className='flex items-center font-jetBrain'>
					<ul className='flex gap-3'>
						{pages.map((page) => (
							<li key={page}>
								<Link
									onClick={() => setPath(page)}
									href={page}
									className='font-jetBrain text-sm hover:underline hover:text-lightblue underline-offset-4 decoration-dashed decoration-lightblue'>
									{page === '/' ? '~/' : page}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</header>
		</>
	);
}
