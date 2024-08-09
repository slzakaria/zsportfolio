import Slider from 'react-infinite-logo-slider';
import Image from 'next/image';
import { Stacks } from '@/data/stackStore';

export function Stack() {
	console.log(Stacks);
	return (
		<section className='my-10'>
			<h1 className='text-2xl font-jetBrain mb-5'>What i work with</h1>
			<Slider
				width='120px'
				duration={20}
				pauseOnHover={true}
				blurBorders={true}
				blurBoderColor={'transparent'}>
				{Stacks.map((stack) => (
					<Slider.Slide key={stack.id}>
						<span className='text-xs flex flex-col gap-2 items-center'>
							<Image
								className='rounded-sm'
								width='40'
								height='auto'
								src={stack.image}
								alt={stack.name}
							/>
							{stack.title}
						</span>
					</Slider.Slide>
				))}
			</Slider>
		</section>
	);
}
