import { useRef } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import toast, { Toaster } from 'react-hot-toast';
import SEO from '@/data/seo';
import siteData from '@/data/siteData';

export default function Contact() {
	const nameRef = useRef(null);
	const mailRef = useRef(null);
	const messageRef = useRef(null);

	const notify = () => {
		toast.success('Message sent! Thank you 🙏🏻', {
			duration: 3000,
			position: 'top-right',
			ariaProps: {
				role: 'status',
				'aria-live': 'polite',
			},
		});
	};

	const resetForm = () => {
		nameRef.current.value = '';
		mailRef.current.value = '';
		messageRef.current.value = '';
		notify();
	};

	const formSubmit = (e) => {
		console.log('form event', e);
		e.preventDefault();
		const formData = new FormData(e.target);
		console.log(formData, nameRef.current.value, mailRef.current.value, messageRef.current.value);
		fetch('https://getform.io/f/6b7547f9-bd94-4d3a-9d96-edbd80e61c89', {
			method: 'POST',
			body: formData,
			headers: {
				Accept: 'application/json',
			},
		})
			.then((response) => console.log('Form submit response', response))
			.catch((error) => console.log('Form submit error', error))
			.finally(() => resetForm());
	};

	const currentSEO = SEO.find((item) => item.page === 'contact');

	return (
		<HelmetProvider>
			<Helmet>
				<title>{`Contact | ${siteData.main.title}`}</title>
				<meta name='description' content={currentSEO.description} />
				<meta name='keywords' content={currentSEO.keywords.join(', ')} />
			</Helmet>
			<Toaster />

			<section id='contact' className='mt-10 font-jetBrain'>
				<h1>{siteData.contactPage.title}</h1>
				<p className='mt-6 font-cousine text-base'>{siteData.contactPage.description}</p>
				<form
					className='mt-5 max-w-4/5 mx-auto w-full'
					content='formdata'
					onSubmit={(e) => formSubmit(e)}
					acceptCharset='UTF-8'
					id='contanct-form'
					method='POST'>
					<div className='w-full'>
						<div className='flex flex-col my-2'>
							<label className='py-2 text-sm font-light capitalize text-powder'>name</label>
							<input
								type='text'
								name='name'
								ref={nameRef}
								className='flex p-3 rounded-sm focus:outline-lightblue bg-slate-400 text-black'
							/>
						</div>
						<div className='flex flex-col my-2'>
							<label className='py-2 text-sm font-light capitalize text-powder'>email</label>
							<input
								type='text'
								name='email'
								ref={mailRef}
								className='flex p-3 rounded-sm focus:outline-lightblue bg-slate-400 text-black'
							/>
						</div>
						<div className='flex flex-col my-2'>
							<label className='py-2 text-sm font-light capitalize text-powder'>message</label>
							<textarea
								name='message'
								rows='6'
								ref={messageRef}
								className='flex p-3 rounded-sm resize-y focus:outline-lightblue bg-slate-400 text-black'></textarea>
						</div>
					</div>
					<button type='submit' className='mt-5 relative px-6 py-3 text-black rounded-lg group'>
						<span className='absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-blue-500 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0'></span>
						<span className='absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-limes ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen'></span>
						<span className='relative font-jetBrain'>Submit</span>
					</button>
				</form>
			</section>
		</HelmetProvider>
	);
}
