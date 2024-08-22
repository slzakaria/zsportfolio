import { useState, useEffect, memo } from 'react';
import TextTransition, { presets } from 'react-text-transition';

const home = [
	'web application',
	'Golang api',
	'CI/CD pipeline',
	'AWS & cloud app',
	'wordpress & shopify site',
];
const projects = ['Line', 'Solution', 'project'];
const articles = ['JavaScript,', 'React,', 'Golang,', 'CICD,', 'AWS,'];
const contact = ['Products', 'Solutions', 'projects'];

const texts = {
	home,
	projects,
	articles,
	contact,
};

export const TextRotation = memo(function TextRotation({ type }) {
	const [index, setIndex] = useState(0);
	const data = texts[type];

	useEffect(() => {
		const intervalId = setInterval(() => setIndex((prevIndex) => prevIndex + 1), 2500);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<>
			<TextTransition direction='down' inline={true} springConfig={presets.gentle}>
				{data[index % data.length]}
			</TextTransition>
		</>
	);
});
