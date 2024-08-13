'use client';

import { useState, useEffect } from 'react';
import { FiSun as Sun } from 'react-icons/fi';
import { WiMoonAltWaningCrescent4 as Moon } from 'react-icons/wi';

export function ThemeSwitcher({ theme, setTheme }) {
	useEffect(() => {
		document.body.classList.remove('dark', 'light');
		document.body.classList.add(theme || 'dark');
		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<button
			aria-label='To Top'
			aria-hidden='true'
			title='Theme swittcher'
			type='button'
			onClick={() => {
				setTheme(theme === 'dark' ? 'light' : 'dark');
			}}
			className={`fixed top-[40px] right-[10px] p-1 text-2xl rounded-full hover:text-yellow-500 hover:scale-125 duration-200 ${
				theme === 'dark' ? 'text-white' : 'text-slate-900'
			}`}>
			{theme === 'dark' ? <Sun /> : <Moon />}
		</button>
	);
}
