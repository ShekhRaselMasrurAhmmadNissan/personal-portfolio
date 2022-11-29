import React from 'react';

import educationExpo from '../../Assets/educationExpo.jpg';
import flawlessVisa from '../../Assets/flawless-visa.jpg';
import sQuizYourBrain from '../../Assets/sQuizYouBrain.jpg';

const Projects = () => {
	return (
		<div className="min-h-screen lg:w-4/5 mx-auto">
			<div className="grid grid-cols-1 lg:grid-cols-3 justify-between gap-6">
				<div className="max-w-lg p-4 shadow-md bg-gray-50 text-gray-800 shadow-emerald-600 rounded-xl">
					<div className="flex justify-between pb-4 border-bottom">
						<div className="flex items-center">
							<a
								rel="noopener noreferrer"
								href="https://flawless-visa.web.app/"
								className="mb-0 capitalize text-xl text-blue-600 font-medium"
								target="__blank"
							>
								Flawless Visa
							</a>
						</div>
						<a
							rel="noopener noreferrer"
							href="https://flawless-visa.web.app/"
							className="bg-teal-600 px-2 py-1 text-white font font-medium rounded-2xl hover:bg-teal-400 duration-500"
						>
							Visit Website
						</a>
					</div>
					<div className="space-y-4">
						<div className="space-y-2">
							<img
								src={flawlessVisa}
								alt=""
								className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
							/>
						</div>
						<div className="space-y-2">
							<p>
								<h3 className="text-lg font-semibold text-black">
									This is a personal Visa and Immigration
									Consultant Website where users can see
									various services that the consultant
									provides and also can place reviews about
									them.
								</h3>
							</p>
							<div className="leading-snug text-black">
								<h2 className="text-lg underline underline-offset-2 font-medium">
									Project Overview
								</h2>
								<p>
									<li>
										Users can view services and place
										reviews.
									</li>
									<li>
										User Authentication with Gmail and
										password as well as Social Login.
									</li>
									<li>
										Authorization of the user to view their
										reviews.
									</li>
									<li>
										Update and delete reviews if the user
										wants.
									</li>
								</p>
							</div>
							<div className="leading-snug text-black">
								<h2 className="text-lg underline underline-offset-2 font-medium">
									Technologies
								</h2>
								<p>
									Tailwind CSS, React, React-Router-DOM,
									Firebase, JWT, MongoDB, Express, Node.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="max-w-lg p-4 shadow-md bg-gray-50 text-gray-800 shadow-emerald-600 rounded-xl">
					<div className="flex justify-between pb-4 border-bottom">
						<div className="flex items-center">
							<a
								rel="noopener noreferrer"
								href="https://education-expo.web.app/"
								className="mb-0 capitalize text-xl text-blue-600 font-medium"
								target="__blank"
							>
								Education Expo
							</a>
						</div>
						<a
							rel="noopener noreferrer"
							href="https://education-expo.web.app/"
							className="bg-teal-600 px-2 py-1 text-white font font-medium rounded-2xl hover:bg-teal-400 duration-500"
						>
							Visit Website
						</a>
					</div>
					<div className="space-y-4">
						<div className="space-y-2">
							<img
								src={educationExpo}
								alt=""
								className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
							/>
						</div>
						<div className="space-y-2">
							<p>
								<h3 className="text-lg font-semibold text-black">
									This is an online course project where users
									can select and enroll in a course.
								</h3>
							</p>
							<div className="leading-snug text-black">
								<h2 className="text-lg underline underline-offset-2 font-medium">
									Project Overview
								</h2>
								<p>
									<li>
										User can select the course from the list
										of the course to see the course
										information.
									</li>
									<li>
										User must authenticate before getting
										premium access of the course.
									</li>
									<li>
										User can download the course description
										as a PDF.
									</li>
								</p>
							</div>
							<div className="leading-snug text-black">
								<h2 className="text-lg underline underline-offset-2 font-medium">
									Technologies
								</h2>
								<p>
									Tailwind CSS, React, React-Router-DOM,
									Firebase, React-To-PDF, Express, Node.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="max-w-lg p-4 shadow-md bg-gray-50 text-gray-800 shadow-emerald-600 rounded-xl">
					<div className="flex justify-between pb-4 border-bottom">
						<div className="flex items-center">
							<a
								rel="noopener noreferrer"
								href="https://ornate-daffodil-a72dbb.netlify.app/"
								className="mb-0 capitalize text-xl text-blue-600 font-medium"
								target="__blank"
							>
								S-Quiz Your Brain
							</a>
						</div>
						<a
							rel="noopener noreferrer"
							href="https://ornate-daffodil-a72dbb.netlify.app/"
							className="bg-teal-600 px-2 py-1 text-white font font-medium rounded-2xl hover:bg-teal-400 duration-500"
						>
							Visit Website
						</a>
					</div>
					<div className="space-y-4">
						<div className="space-y-2">
							<img
								src={sQuizYourBrain}
								alt=""
								className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
							/>
						</div>
						<div className="space-y-2">
							<p>
								<h3 className="text-lg font-semibold text-black">
									This is a quiz-based project where users can
									attend quizzes on several topics.
								</h3>
							</p>
							<div className="leading-snug text-black">
								<h2 className="text-lg underline underline-offset-2 font-medium">
									Project Overview
								</h2>
								<p>
									<li>
										Users can choose the subject of the quiz
										from the list of subjects.
									</li>
									<li>
										After selecting the answer, the user
										will be notified by a popup toast of
										whether the answer is correct or not.
									</li>
									<li>
										Users can see the chart of correct and
										Incorrect answers to their quiz.
									</li>
								</p>
							</div>
							<div className="leading-snug text-black">
								<h2 className="text-lg underline underline-offset-2 font-medium">
									Technologies
								</h2>
								<p>
									Tailwind CSS, React, React-Router-DOM,
									Recharts.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
