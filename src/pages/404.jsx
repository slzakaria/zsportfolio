import Link from 'next/link';

export default function errorPage() {
	return (
		<div className='mt-16'>
			<div className='text-center font-cousine'>
				<p className='text-4xl font-semibold text-white'>Sorry, there&lsquo;s nothing here</p>
				<p className='mt-4 text-3xl font-bold tracking-tight text-orange-400 sm:text-4xl'>
					Looks Like You have Strayed Off the Digital Path!
				</p>

				<div className='flex items-center justify-center mt-24 gap-x-6'>
					<Link href='/'>
						<div className='mt-5 relative px-6 py-3 text-black rounded-lg group'>
							<span className='absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-cream ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0'></span>
							<span className='absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-sky-600 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-colro'></span>
							<span className='relative font-sans text-sm font-medium'>Go back </span>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
