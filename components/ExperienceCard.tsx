'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ITypeWorkData } from '@/types/interface';

type Props = {
	experience: ITypeWorkData;
};

const ExperienceCard = ({ experience }: Props) => {
	const { company, date, logo, role, bulletPoints }: ITypeWorkData = experience;

	return (
		<article className='flex flex-col rounded-lg space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-slate-500 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
			<div className='flex flex-row space-x-10 items-center justify-center'>
				<div>
					<motion.img
						initial={{ y: -100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 1.2 }}
						viewport={{ once: true }}
						className='w-16 h-16 rounded-full md:w-24 md:h-24 object-cover object-center'
						src='https://logowik.com/content/uploads/images/amazon6707.jpg'
						alt=''
					/>
				</div>
				<div>
					<h4 className='text-3xl font-light'>{company}</h4>
					<p className='font-bold text-xl mt-1'>{role}</p>
					<p className='text-xl mt-1'>{date}</p>
				</div>
			</div>

			<ul className='list-disc space-y-2 ml-5 text-sm'>
				{bulletPoints.map((point, i) => (
					<li key={i}>{point}</li>
				))}
			</ul>

			{/* <div className='px-0 md:px-10'>
				<h4 className='text-4xl font-light'>{company}</h4>
				<p className='font-bold text-2xl mt-1'>Amazon</p>
				<div className='flex space-x-2 my-2'>
					<img
						className='h-10 w-10 rounded-full object-cover'
						src='https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png'
						alt=''
					/>
					<img
						className='h-10 w-10 rounded-full object-cover'
						src='https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png'
						alt=''
					/>
					<img
						className='h-10 w-10 rounded-full object-cover'
						src='https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png'
						alt=''
					/>
				</div>
				<p className='uppercase py-5 text-gray-300'>Started work... - Ended...</p>

				<ul className='list-disc space-y-4 ml-5 text-lg'>
					<li>Summary</li>
					<li>Summary</li>
					<li>Summary</li>
					<li>Summary</li>
				</ul>
			</div> */}
		</article>
	);
};

export default ExperienceCard;
