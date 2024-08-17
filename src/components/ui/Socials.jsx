'use client';

import { memo } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi';
import Link from 'next/link';
import siteData from '@/data/siteData';

export const Socials = memo(function Socials() {
	return (
		<div className='sm:my-12 my-6 flex items-center justify-center'>
			<div className='flex gap-5'>
				<Link
					rel='nofollow'
					href={siteData.socials.github}
					className='p-2 text-limes hover:text-emerald-600 hover:scale-110 rounded-sm'>
					<FiGithub className='h-6 w-6' />
				</Link>
				<Link
					rel='nofollow'
					href={siteData.socials.linkedin}
					className='p-2 text-limes hover:text-emerald-600 hover:scale-110 rounded-sm'>
					<FiLinkedin className='h-6 w-6' />
				</Link>
				<Link
					rel='nofollow'
					href={`mailto:${siteData.socials.email}`}
					className='p-2 text-limes hover:text-emerald-600 hover:scale-110 rounded-sm'>
					<FiMail className='h-6 w-6' />
				</Link>
				<Link
					rel='nofollow'
					href={siteData.socials.resume}
					className='p-2 text-limes hover:text-emerald-600 hover:scale-110 rounded-sm flex items-center gap-2'>
					<FiFileText className='w-6 h-6' />
					<span className='text-sm'>Resume</span>
				</Link>
			</div>
		</div>
	);
});
