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
			<div className='flex flex-row items-center justify-evenly'>
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
				<div className=''>
					<h4 className='text-xl font-light'>{company}</h4>
					<p className='font-bold text-md mt-1'>{role}</p>
					<p className='text-md mt-1'>{date}</p>
				</div>
			</div>

			<ul className='list-disc space-y-2 ml-5 text-sm'>
				{bulletPoints.map((point, i) => (
					<li key={i}>{point}</li>
				))}
			</ul>
		</article>
	);
};

export default ExperienceCard;
