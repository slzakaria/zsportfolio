import { FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi';
import Link from 'next/link';

export function Socials() {
	return (
		<div className='mt-8 mb-6 flex items-center justify-between'>
			<div className='flex gap-5'>
				<Link
					href='https://github.com/Zackaria-Slimane'
					className='p-2 bg-slate-800 hover:bg-slate-800/40 rounded-md'>
					<FiGithub className='h-5 w-5' />
				</Link>
				<Link
					href='https://www.linkedin.com/in/zakaria-slimane/'
					className='p-2 bg-slate-800 hover:bg-slate-800/40 rounded-md'>
					<FiLinkedin className='h-5 w-5' />
				</Link>
				<Link
					href='mailto:slzackaria@gmail.com'
					className='p-2 bg-slate-800 hover:bg-slate-800/40 rounded-md'>
					<FiMail className='h-5 w-5' />
				</Link>
			</div>
			<div className='flex'>
				<Link
					href='https://drive.google.com/file/d/1qLGLyKX1MzV2b9wDQ93ElsdXXMjOPrpH/view?usp=sharing'
					className='p-2 bg-slate-800 hover:bg-slate-800/40 rounded-md flex items-center gap-2'>
					<FiFileText />
					<span className='text-sm'>Resume</span>
				</Link>
			</div>
		</div>
	);
}
