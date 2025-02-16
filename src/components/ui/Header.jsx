import Image from 'next/image';
import Link from 'next/link';
import logowhite from '@/assets/logos/logowhite.png';
import logodark from '@/assets/logos/logoblack.png';

export function Header({ theme, active, setPath }) {
	const pages = [
		{ path: '/', label: '~/home' },
		{ path: '/projects', label: '/projects' },
		{ path: '/articles', label: '/articles' },
		{ path: '/blog', label: '/blog' },
		{ path: '/contact', label: '/contact' },
	];

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
							src={theme === 'dark' ? logowhite : logodark}
							alt='zakaria slimane, software developer'
							placeholder='blur'
							className='rounded-full'
							width={140}
							height={100}
						/>
					</Link>
					<div>
						<h2 className='font-jetBrain text-2xl sm:text-[28px] flex flex-col items-center justify-center gap-2'>
							<span className='bg-emerald-500 px-2 py-1 rounded-sm text-dark underline'>
								Software developer
							</span>
							devOps & cloud.
						</h2>
					</div>
				</div>
				<nav className='font-jetBrain container'>
					<ul className='flex flex-wrap gap-5 justify-evenly'>
						{pages.map(({ path, label }) => (
							<li key={path}>
								<Link
									onClick={() => setPath(path)}
									href={path}
									title={`${label} | Zakaria slimane - software developer`}
									className={`font-jetBrain text-sm sm:text-base hover:underline decoration-solid underline-offset-4 ${
										active === path ? 'underline decoration-rose-500' : 'decoration-limes'
									}`}>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</header>
		</>
	);
}
