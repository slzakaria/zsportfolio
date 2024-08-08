import TextTransition, { presets } from 'react-text-transition';
import { useState, useEffect } from 'react';

export function HomeIntro({ datas }) {
	const TEXTS = ['javaScript app', 'Golang app', 'AWS & cloud app', 'wordpress site'];
	const [index, setIndex] = useState(0);
	useEffect(() => {
		const intervalId = setInterval(() => setIndex((index) => index + 1), 2500);
		return () => clearTimeout(intervalId);
	}, []);

	return (
		<>
			<div className='container font-cousine mt-10'>
				<h1>
					i make
					<span className='px-1.5 text-lightblue font-jetBrain'>
						<TextTransition direction='down' inline='true' springConfig={presets.gentle}>
							{TEXTS[index % TEXTS.length]}
						</TextTransition>
						s,
					</span>
					<br></br>
					and dabble in the devOps realm.
				</h1>
				<h2 className='my-2 text-slate-300'>{datas.description}</h2>
				<h2 className='text-slate-300'>{datas.cta}</h2>
			</div>
		</>
	);
}
