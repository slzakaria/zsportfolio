import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import siteData from '@/data/siteData';
import signature from '@/assets/logos/logowhite.png';

const currentYear = new Date().getFullYear();

export function Footer() {
	return (
		<footer className='py-8 w-full mx-auto'>
			<div className='flex justify-between items-center gap-6 mx-auto'>
				<div className='flex items-center justify-between gap-6 mt-2'>
					<div>
						<Link href={siteData.socials.github} target='_blank' rel='noreferrer noopener'>
							<FiGithub className='text-base hover:text-limes hover:scale-110' />
						</Link>
					</div>
					<div>
						<Link href={siteData.socials.linkedin} target='_blank' rel='noreferrer noopener'>
							<FiLinkedin className='text-base hover:text-limes hover:scale-110' />
						</Link>
					</div>
					<div>
						<Link
							href={`mailto:${siteData.socials.email}`}
							target='_blank'
							rel='noreferrer noopener'>
							<FiMail className='text-base hover:text-limes hover:scale-110' />
						</Link>
					</div>
				</div>
				<div className='flex items-center gap-1 mt-2 text-sm text-right text-slate-400'>
					<Link href='/'>
						<Image
							src={signature}
							alt='zakaria slimane'
							placeholder='blur'
							className='rounded-full'
							width={120}
							height={120}
						/>
					</Link>
				</div>
			</div>
		</footer>
	);
}
