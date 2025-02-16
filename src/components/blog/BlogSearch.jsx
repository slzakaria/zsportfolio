import { useState } from 'react';

export function BlogSearch({ onSearch }) {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = (e) => {
		const value = e.target.value;
		setSearchTerm(value);
		onSearch(value);
	};

	return (
		<div className='mb-8'>
			<input
				type='text'
				placeholder='Search posts...'
				value={searchTerm}
				onChange={handleSearch}
				className='w-full p-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800
                 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none'
			/>
		</div>
	);
}
