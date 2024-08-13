'use client';

import { memo } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi';
import Link from 'next/link';
import siteData from '@/data/siteData';

export const Socials = memo(function Socials() {
	return (
		<div className='mt-8 mb-6 flex items-center justify-between'>
			<div className='flex gap-5'>
				<Link
					rel='nofollow'
					href={siteData.socials.github}
					className='p-2 text-dark bg-limes hover:bg-limes/70 rounded-sm'>
					<FiGithub className='h-5 w-5' />
				</Link>
				<Link
					rel='nofollow'
					href={siteData.socials.linkedin}
					className='p-2 text-dark bg-limes hover:bg-limes/70 rounded-sm'>
					<FiLinkedin className='h-5 w-5' />
				</Link>
				<Link
					rel='nofollow'
					href={`mailto:${siteData.socials.email}`}
					className='p-2 text-dark bg-limes hover:bg-limes/70 rounded-sm'>
					<FiMail className='h-5 w-5' />
				</Link>
			</div>
			<div className='flex'>
				<Link
					rel='nofollow'
					href={siteData.socials.resume}
					className='p-2 text-dark bg-limes hover:bg-limes/70 rounded-sm flex items-center gap-2'>
					<FiFileText className='w-5 h-5' />
					<span className='text-sm'>Resume</span>
				</Link>
			</div>
		</div>
	);
});
