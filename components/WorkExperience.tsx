'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import workExperienceData from '../data/workExperienceData.json';
import { ITypeWorkData } from '@/types/interface';

type Props = {};

const WorkExperience = (props: Props) => {
	const experienceData: ITypeWorkData[] = workExperienceData;

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
		>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>

			<div className='mt-10 w-full mr-12 flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-emerald-400/50'>
				{experienceData.map((experience, i) => (
					<ExperienceCard key={i} experience={experience} />
				))}
			</div>
		</motion.div>
	);
};

export default WorkExperience;
