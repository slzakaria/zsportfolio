import Image from 'next/image';
import Link from 'next/link';
import signature from '@/assets/logos/logowhite.png';

export function Header({ active, setPath }) {
	const pages = ['/', '/projects', '/articles', '/contact'];
	return (
		<>
			<header className='container flex flex-col-reverse gap-5 sm:flex-row sm:gap-0 items-center justify-between font-jetBrain'>
				<div className='flex gap-2'>
					<Link href='/' className='hover:scale-110'>
						<Image
							src={signature}
							alt='zakaria slimane, software developer'
							placeholder='blur'
							className='rounded-full'
							width={100}
							height={50}
						/>
					</Link>
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
