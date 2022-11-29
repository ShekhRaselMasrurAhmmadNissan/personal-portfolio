import React from 'react';

const Services = () => {
	return (
		<div className="mb-16 md:w-[90%] lg:w-4/5 mx-auto">
			<div>
				<h3 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl text-center">
					Services I offer
				</h3>
				<p className="text-lg py-2 leading-8 text-emerald-400-800 dark:text-gray-200">
					Since the beginning of my journey I learned JS and after
					fall in love with JS, I wanted to explore more about JS.
					Then I choose Web Development and I started to learn JS
					frontend framework React. And then I explored Node and
					Express for Backend and MongoDB as NoSQL database.
				</p>
				<p className="text-lg font-medium italic py-2 leading-8 text-black p-4 bg-emerald-50 rounded-lg">
					Now I offer services like Frontend Development using{' '}
					<span className="text-blue-600">React and MERN stack</span>{' '}
					and frontend design using{' '}
					<span className="text-blue-600">
						HTML5, CSS3, Bootstrap5 and Tailwind CSS.
					</span>{' '}
					I also can use authentication process using{' '}
					<span className="text-blue-600">Firebase</span> and to make
					the website in single-page way, I use{' '}
					<span className="text-blue-600">React Router DOM</span>. I
					can also know to handle payments using{' '}
					<span className="text-blue-600">Stripe Payment Method</span>{' '}
					in test phase.
				</p>
			</div>
		</div>
	);
};

export default Services;
