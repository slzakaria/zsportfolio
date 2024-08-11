import Image from 'next/image';
import Link from 'next/link';
import signature from '@/assets/logos/logowhite.png';

export function Header({ active, setPath }) {
	const pages = ['/', '/projects', '/articles', '/contact'];
	return (
		<>
			<header className='sm:mt-5 flex container gap-10 flex-col items-center justify-between font-jetBrain'>
				<div className='flex flex-col sm:flex-row items-center gap-5 justify-between container'>
					<Link
						href='/'
						title='Zakaria slimane - Software developer'
						rel='nofollow'
						className='hover:scale-110'>
						<Image
							src={signature}
							alt='zakaria slimane, software developer'
							placeholder='blur'
							className='rounded-full'
							width={120}
							height={80}
						/>
					</Link>
					<div>
						<h1 className='font-jetBrain text-lg sm:text-2xl flex flex-col items-center justify-center gap-2'>
							<span className='bg-emerald-500 px-2 py-1 rounded-sm text-black underline'>
								Software developer
							</span>
							& devOps enthusiast.
						</h1>
					</div>
				</div>
				<nav className='font-jetBrain container'>
					<ul className='flex gap-5 justify-evenly'>
						{pages.map((page, index) => (
							<li key={page}>
								<Link
									onClick={() => setPath(page)}
									href={page}
									title={`${page} | Zakaria slimane - software developer`}
									className={`font-jetBrain text-sm hover:underline hover:text-eggshell decoration-solid underline-offset-4 ${
										active === page ? 'underline decoration-rose-500' : 'decoration-limes'
									}`}>
									{page === '/' ? '~/home' : page}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</header>
		</>
	);
}
