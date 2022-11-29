import React from 'react';
import {
	AiFillLinkedin,
	AiFillTwitterCircle,
	AiFillYoutube,
} from 'react-icons/ai';

import picture from '../../Assets/portfolio-image1.png';

const About = () => {
	return (
		<div className="">
			<div className="text-center px-10">
				<h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
					Shekh Rasel Masrur Ahmmad
				</h2>
				<h3 className="text-2xl py-2 text-emerald-700 dark:text-white md:text-3xl">
					MERN Stack and Frontend Developer.
				</h3>
				<p className="text-md py-3 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
					I am passionate about coding and web development and
					comfortable with{' '}
					<span className="text-blue-600 italic">
						JS and MERN Stack with HTML, CSS, Bootstrap and
						Tailwind.
					</span>
				</p>
				<div className="text-5xl flex justify-center gap-16 py-3 text-blue-600 dark:text-gray-400">
					<AiFillTwitterCircle />
					<AiFillLinkedin />
					<AiFillYoutube />
				</div>
				<div className="mx-auto bg-gradient-to-br from-blue-300 to-teal-600 rounded-full w-80 h-80 relative overflow-hidden mt-10 md:h-96 md:w-96">
					<img src={picture} alt="" className="mx-auto" />
				</div>
			</div>
		</div>
	);
};

export default About;
