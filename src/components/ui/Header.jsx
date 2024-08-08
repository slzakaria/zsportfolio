import Image from 'next/image';
import Link from 'next/link';
import profile from '@/assets/logos/profile.jpg';

export function Header({ active, setPath }) {
	const pages = ['/', '/about', '/projects', '/articles', '/contact'];
	return (
		<>
			<header className='container flex justify-between font-heebo'>
				<div className='flex gap-2'>
					<Image
						src={profile}
						alt='zakaria slimane'
						placeholder='blur' // Optional blur-up while loading
						className='rounded-full'
						width={50}
						height={50}
					/>
					<div className='min-h-[50px] flex flex-col items-start justify-center'>
						<h1 className='text-base font-bold'>zs</h1>
						<span className='text-sm text-gray-500'>@zakariaslimane</span>
					</div>
				</div>
				<nav className='flex items-center font-jetBrain'>
					<ul className='flex gap-5'>
						{pages.map((page) => (
							<li key={page}>
								<Link
									onClick={() => setPath(page)}
									href={page}
									className='font-space text-sm hover:underline underline-offset-4 decoration-wavy decoration-lightblue'>
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
