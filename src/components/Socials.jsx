import { FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi';
import Link from 'next/link';

export function Socials() {
	return (
		<div className='mt-8 mb-6 flex justify-between'>
			<div className='flex gap-5'>
				<Link href='/' className='p-2 bg-slate-800 hover:bg-slate-800/40 rounded-md'>
					<FiGithub className='h-5 w-5' />
				</Link>
				<Link href='/' className='p-2 bg-slate-800 hover:bg-slate-800/40 rounded-md'>
					<FiLinkedin className='h-5 w-5' />
				</Link>
				<Link href='/' className='p-2 bg-slate-800 hover:bg-slate-800/40 rounded-md'>
					<FiMail className='h-5 w-5' />
				</Link>
			</div>
			<div className='flex'>
				<Link href='/' className='p-2 bg-slate-800 hover:bg-slate-800/40 rounded-md'>
					<FiFileText className='h-5 w-5' />
				</Link>
			</div>
		</div>
	);
}
