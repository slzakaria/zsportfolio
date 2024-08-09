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
		},
		{
			id: uid(),
			image: 'SiReact',
			title: 'React',
		},
		{
			id: uid(),
			image: 'SiNextdotjs',
			title: 'Next',
		},
		{
			id: uid(),
			image: 'SiNuxtdotjs',
			title: 'Nuxt 3',
		},
		{
			id: uid(),
			image: 'SiVuedotjs',
			title: 'Vue 3',
		},
		{
			id: uid(),
			image: 'SiNodedotjs',
			title: 'Node JS',
		},
		{
			id: uid(),
			image: 'SiPostgresql',
			title: 'PostgreSQL',
		},
		{
			id: uid(),
			image: 'SiMysql',
			title: 'My SQL',
		},
		{
			id: uid(),
			image: 'SiGoland',
			title: 'Golang',
		},
		{
			id: uid(),
			image: 'SiDocker',
			title: 'Docker',
		},
		{
			id: uid(),
			image: 'SiAmazonaws',
			title: 'AWS',
		},
		{
			id: uid(),
			image: 'SiTerraform',
			title: 'Terraform',
		},
		{
			id: uid(),
			image: 'SiJenkins',
			title: 'Jenkins',
		},
		{
			id: uid(),
			image: 'SiGithubactions',
			title: 'GitActions',
		},
		{
			id: uid(),
			image: 'SiTailwindcss',
			title: 'Tailwind',
		},
		{
			id: uid(),
			image: 'SiJquery',
			title: 'jQuery',
		},
		{
			id: uid(),
			image: 'SiChakraui',
			title: 'Chakra UI',
		},
		{
			id: uid(),
			image: 'SiFigma',
			title: 'Figma',
		},
		{
			id: uid(),
			image: 'SiPostman',
			title: 'Postman',
		},
		{
			id: uid(),
			image: 'SiWordpress',
			title: 'Wordpress',
		},
		{
			id: uid(),
			image: 'SiShopify',
			title: 'Shopify',
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
						<span className='text-xs flex flex-col gap-2 items-center font-jetBrain mt-3'>
							<IconComponent iconName={stack.image} />
							{stack.title}
						</span>
					</Slider.Slide>
				))}
			</Slider>
		</section>
	);
}
