import Slider from 'react-infinite-logo-slider';
import * as Icons from 'react-icons/si';

const IconComponent = ({ iconName }) => {
	const Icon = Icons[iconName];
	return Icon ? <Icon size={32} /> : null;
};

export function Stack() {
	const uid = () => crypto.randomUUID();
	const Stacks = [
		{
			id: uid(),
			image: 'SiJavascript',
			title: 'Javascript',
			color: 'yellow-400',
		},
		{
			id: uid(),
			image: 'SiReact',
			title: 'React',
			color: 'sky-600',
		},
		{
			id: uid(),
			image: 'SiNextdotjs',
			title: 'Next',
			color: 'slate-400',
		},
		{
			id: uid(),
			image: 'SiNuxtdotjs',
			title: 'Nuxt 3',
			color: 'limes',
		},
		{
			id: uid(),
			image: 'SiVuedotjs',
			title: 'Vue 3',
			color: 'emerald-400',
		},
		{
			id: uid(),
			image: 'SiNodedotjs',
			title: 'Node JS',
			color: 'green-700',
		},
		{
			id: uid(),
			image: 'SiPostgresql',
			title: 'PostgreSQL',
			color: 'blue-400 ',
		},
		{
			id: uid(),
			image: 'SiMysql',
			title: 'My SQL',
			color: 'cyan-600',
		},
		{
			id: uid(),
			image: 'SiGoland',
			title: 'Golang',
			color: 'sky-400',
		},
		{
			id: uid(),
			image: 'SiDocker',
			title: 'Docker',
			color: 'blue-500',
		},
		{
			id: uid(),
			image: 'SiAmazonaws',
			title: 'AWS',
			color: 'orange-500',
		},
		{
			id: uid(),
			image: 'SiTerraform',
			title: 'Terraform',
			color: 'purple-500',
		},
		{
			id: uid(),
			image: 'SiJenkins',
			title: 'Jenkins',
			color: 'red-500',
		},
		{
			id: uid(),
			image: 'SiGithubactions',
			title: 'GitActions',
			color: 'sky-600',
		},
		{
			id: uid(),
			image: 'SiTailwindcss',
			title: 'Tailwind',
			color: 'cyan-300',
		},
		{
			id: uid(),
			image: 'SiJquery',
			title: 'jQuery',
			color: 'blue-700',
		},
		{
			id: uid(),
			image: 'SiFigma',
			title: 'Figma',
			color: 'pink-500',
		},
		{
			id: uid(),
			image: 'SiPostman',
			title: 'Postman',
			color: 'orange-400',
		},
		{
			id: uid(),
			image: 'SiWordpress',
			title: 'Wordpress',
			color: 'purple-400',
		},
		{
			id: uid(),
			image: 'SiShopify',
			title: 'Shopify',
			color: 'lime-600',
		},
	];

	return (
		<section className='my-10'>
			<h1 className='text-2xl font-jetBrain mb-5'>What i work with</h1>
			<Slider
				width='90px'
				duration={20}
				pauseOnHover={true}
				blurBorders={true}
				blurBoderColor={'transparent'}>
				{Stacks.map((stack) => (
					<Slider.Slide key={stack.id}>
						<span
							id={stack.name}
							className={`text-xs flex flex-col gap-2 items-center font-jetBrain mt-3 text-${stack.color}`}>
							<IconComponent iconName={stack.image} />
							{stack.title}
						</span>
					</Slider.Slide>
				))}
			</Slider>
		</section>
	);
}
