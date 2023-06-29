'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ITypeWorkData } from '@/types/interface';
import Image from 'next/image';

type Props = {
	experience: ITypeWorkData;
};

const ExperienceCard = ({ experience }: Props) => {
	const { company, date, techStacks, logoPath, role, bulletPoints }: ITypeWorkData = experience;

	return (
		<article className='flex flex-col rounded-lg space-y-7 flex-shrink-0 w-[420px] md:w-[560px] xl:w-[700px] snap-center bg-slate-500 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
			<div className='flex flex-row items-center justify-start'>
				<div>
					<motion.img
						initial={{ y: -100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 1.2 }}
						viewport={{ once: true }}
						className='w-16 h-16 rounded-full md:w-24 md:h-24 object-cover object-center'
						src={logoPath}
						alt={company}
					/>
				</div>
				<div className='ml-3 space-y-0'>
					<h4 className='text-xl font-bold'>{company}</h4>
					<p className='font-medium text-md mt-1'>{role}</p>
					<p className='text-sm mt-1'>{date}</p>
				</div>
			</div>

			<div className='flex flex-row space-x-2'>
				{techStacks.map((imgPath, i) => (
					<div key={i} className='w-6 h-6 rounded-full relative overflow-hidden'>
						<Image
							className=''
							src={`/techStackIcons/${imgPath}.png`}
							alt={imgPath}
							width={24}
							height={24}
						/>
					</div>
				))}
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
