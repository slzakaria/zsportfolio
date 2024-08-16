'use client';

import { useState, useEffect } from 'react';
import { FaAnglesUp } from 'react-icons/fa6';

export function ToTop() {
	const [showTopBtn, setShowTopBtn] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 300) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<button
			style={{ display: showTopBtn ? 'block' : 'none' }}
			aria-label='To Top'
			aria-hidden='true'
			title='To Top'
			type='button'
			onClick={() => {
				window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
			}}
			className='fixed bottom-[40px] right-[10px] text-2xl p-1 text-dark dark:text-white rounded-lg hover:scale-125 duration-200'>
			<FaAnglesUp />
		</button>
	);
}
