'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

type Props = {};

const About = (props: Props) => {
	const resumeURL = 'https://ernest-leung-resume.s3.us-west-1.amazonaws.com/Ernest_Leung_Resume.pdf';

	const viewResumeHandler = () => {
		window.open(resumeURL, '_blank', 'noopener,noreferrer');
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
		>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

			<motion.img
				initial={{
					x: -200,
					opacity: 0,
				}}
				whileInView={{
					x: 0,
					opacity: 1,
				}}
				transition={{ duration: 1.2 }}
				viewport={{ once: true }}
				className='-mb-28 md:mb-0 flex shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
				src='profile-pic.jpg'
			/>

			<div className='flex flex-col items-center space-y-10 px-0 md:px-10'>
				<h4 className='text-4xl font-semibold'>
					Here is a <span className='underline decoration-emerald-500/50'>little</span> background
				</h4>
				<p className='text-base'>
					I'm Ernest Leung, a Full Stack Software Engineer specializing in{' '}
					<span className='font-semibold text-emerald-500'> JavaScript, TypeScript, React, and Node.js </span>
					. My experiences range from enhancing app performance to managing complex Node.js projects and
					creating interactive React interfaces. I have a solid foundation in AWS serverless infrastructure,
					coupled with a passion for problem-solving and lifelong learning. As a collaborative team player, I
					strive to meet client needs and deliver successful project outcomes.
				</p>
				<div
					className='group flex flex-row w-44 justify-center px-2 py-2 rounded-3xl bg-slate-600 hover:bg-emerald-500 items-center space-x-1 cursor-pointer'
					onClick={viewResumeHandler}
				>
					<DocumentArrowDownIcon className='h-6 w-6 text-gray-400 group-hover:text-white' />
					<div className='text-sm text-gray-400 font-semibold group-hover:text-white'>View Resume</div>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
