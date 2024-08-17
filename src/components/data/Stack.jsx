import Slider from 'react-infinite-logo-slider';
import {
	SiJavascript,
	SiReact,
	SiNextdotjs,
	SiNuxtdotjs,
	SiVuedotjs,
	SiNodedotjs,
	SiPostgresql,
	SiMysql,
	SiGo,
	SiDocker,
	SiAmazonaws,
	SiTerraform,
	SiGithubactions,
	SiTailwindcss,
	SiJenkins,
	SiJquery,
	SiFigma,
	SiPostman,
	SiWordpress,
	SiShopify,
} from 'react-icons/si';

const iconMap = {
	SiJavascript,
	SiReact,
	SiNextdotjs,
	SiNuxtdotjs,
	SiVuedotjs,
	SiNodedotjs,
	SiPostgresql,
	SiMysql,
	SiGo,
	SiDocker,
	SiAmazonaws,
	SiTerraform,
	SiGithubactions,
	SiTailwindcss,
	SiJenkins,
	SiJquery,
	SiFigma,
	SiPostman,
	SiWordpress,
	SiShopify,
};

const IconComponent = ({ iconName }) => {
	const Icon = iconMap[iconName];
	return Icon ? <Icon size={32} /> : null;
};

export function Stack() {
	const uid = () => crypto.randomUUID();
	const Stacks = [
		{
			id: uid(),
			image: 'SiJavascript',
			title: 'Javascript',
			color: 'text-yellow-400',
		},
		{
			id: uid(),
			image: 'SiReact',
			title: 'React',
			color: 'text-sky-600',
		},
		{
			id: uid(),
			image: 'SiNextdotjs',
			title: 'Next',
			color: 'text-slate-400',
		},
		{
			id: uid(),
			image: 'SiNuxtdotjs',
			title: 'Nuxt 3',
			color: 'text-limes',
		},
		{
			id: uid(),
			image: 'SiVuedotjs',
			title: 'Vue 3',
			color: 'text-emerald-400',
		},
		{
			id: uid(),
			image: 'SiNodedotjs',
			title: 'Node JS',
			color: 'text-green-700',
		},
		{
			id: uid(),
			image: 'SiPostgresql',
			title: 'PostgreSQL',
			color: 'text-blue-400 ',
		},
		{
			id: uid(),
			image: 'SiMysql',
			title: 'My SQL',
			color: 'text-cyan-500',
		},
		{
			id: uid(),
			image: 'SiGo',
			title: 'Golang',
			color: 'text-sky-400',
		},
		{
			id: uid(),
			image: 'SiDocker',
			title: 'Docker',
			color: 'text-blue-500',
		},
		{
			id: uid(),
			image: 'SiAmazonaws',
			title: 'AWS',
			color: 'text-orange-500',
		},
		{
			id: uid(),
			image: 'SiTerraform',
			title: 'Terraform',
			color: 'text-purple-500',
		},
		{
			id: uid(),
			image: 'SiJenkins',
			title: 'Jenkins',
			color: 'text-red-500',
		},
		{
			id: uid(),
			image: 'SiGithubactions',
			title: 'GitActions',
			color: 'text-sky-600',
		},
		{
			id: uid(),
			image: 'SiTailwindcss',
			title: 'Tailwind',
			color: 'text-cyan-300',
		},
		{
			id: uid(),
			image: 'SiJquery',
			title: 'jQuery',
			color: 'text-blue-700',
		},
		{
			id: uid(),
			image: 'SiFigma',
			title: 'Figma',
			color: 'text-pink-500',
		},
		{
			id: uid(),
			image: 'SiPostman',
			title: 'Postman',
			color: 'text-orange-400',
		},
		{
			id: uid(),
			image: 'SiWordpress',
			title: 'Wordpress',
			color: 'text-purple-400',
		},
		{
			id: uid(),
			image: 'SiShopify',
			title: 'Shopify',
			color: 'text-lime-600',
		},
	];

	return (
		<section className='sm:my-20 my-12'>
			<h2 className='text-2xl font-jetBrain mb-5'>What i work with</h2>
			<Slider
				width='140px'
				duration={25}
				pauseOnHover={true}
				blurBorders={true}
				blurBoderColor={'transparent'}>
				{Stacks.map((stack) => (
					<Slider.Slide key={stack.id}>
						<span
							id={stack.name}
							className={`text-xs flex flex-col gap-2 items-center font-jetBrain mt-3 ${stack.color}`}>
							<IconComponent iconName={stack.image} />
							{stack.title}
						</span>
					</Slider.Slide>
				))}
			</Slider>
		</section>
	);
}
