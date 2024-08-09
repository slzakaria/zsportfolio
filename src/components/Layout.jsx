import { Header } from './ui/Header';
import { Footer } from './ui/Footer';

export function Layout({ path, setPath, children }) {
	return (
		<main className='h-auto sm:min-h-screen pt-10 px-6 text-white mx-auto container max-w-[660px] overflow-x-hidden'>
			<Header active={path} setPath={setPath} />
			<section className='container items-center justify-center flex-col mx-auto'>
				{children}
			</section>
			<Footer />
		</main>
	);
}
