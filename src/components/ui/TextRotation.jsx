import { useState, useEffect } from 'react';

export function TextRotation({ type }) {
	const [currentWord, setCurrentWord] = useState(0);

	const words = {
		home: ['solution', 'website', 'platform', 'system'],
		projects: ['project', 'solution', 'system'],
		articles: ['code', 'tech', 'cloud'],
		contact: ['reality', 'solution'],
		blog: ['coding', 'DevOps', 'cloud'],
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentWord((prev) => (prev + 1) % words[type].length);
		}, 2000);
		return () => clearInterval(interval);
	}, [type]);

	const maxLength = Math.max(...words[type].map((word) => word.length));

	return (
		<span
			className='inline-block min-w-[100px] transition-all duration-500'
			style={{
				minWidth: `${maxLength}ch`,
				display: 'inline-block',
				textAlign: 'left',
			}}>
			{words[type][currentWord]}
		</span>
	);
}
