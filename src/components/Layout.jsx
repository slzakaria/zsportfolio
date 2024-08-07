import { Header } from './Header';

export function Layout({ path, setPath, children }) {
	return (
		<main className='h-auto sm:min-h-screen pt-10 text-white mx-auto container max-w-[600px]'>
			<Header active={path} setPath={setPath} />
			<section className='container items-center justify-center flex-col mx-auto'>
				{children}
			</section>
		</main>
	);
}
