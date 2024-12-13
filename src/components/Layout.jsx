import { Header } from './ui/Header';
import { Footer } from './ui/Footer';

export function Layout({ theme, path, setPath, children }) {
	return (
		<main className='h-auto sm:min-h-screen pt-10 px-6 dark:text-white text-dark mx-auto container max-w-[800px] overflow-x-hidden'>
			<Header theme={theme} active={path} setPath={setPath} />
			<section className='container items-center justify-center flex-col mx-auto'>
				{children}
			</section>
			<Footer theme={theme} />
		</main>
	);
}
