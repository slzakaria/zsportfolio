import { Header } from './ui/Header';
import { Vortex } from './ui/Vortex';

export function Layout({ path, setPath, children }) {
	return (
		// <Vortex backgroundColor='black' rangeY={50} particleCount={20} baseHue={200}>
		// 	<main className='h-auto sm:min-h-screen pt-10 text-white mx-auto container max-w-[600px]'>
		// 		<Header active={path} setPath={setPath} />
		// 		<section className='container items-center justify-center flex-col mx-auto'>
		// 			{children}
		// 		</section>
		// 	</main>
		// </Vortex>
		<main className='h-auto sm:min-h-screen pt-10 text-white mx-auto container max-w-[600px]'>
			<Header active={path} setPath={setPath} />
			<section className='container items-center justify-center flex-col mx-auto'>
				{children}
			</section>
		</main>
	);
}
