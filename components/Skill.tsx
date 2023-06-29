import React from 'react';
import { motion } from 'framer-motion';
import { ITypeSkill } from '@/types/interface';

type Props = {
	directionLeft?: boolean;
	skill: ITypeSkill;
};

const Skill = ({ directionLeft, skill }: Props) => {
	const { tech, proficiency, iconPath } = skill;

	return (
		<div className='group relative flex cursor-pointer'>
			<motion.img
				initial={{
					x: directionLeft ? -200 : 100,
					opacity: 0,
				}}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, x: 0 }}
				className='rounded-full bg-slate-400/60 object-cover object-center w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
				src={`techStackIcons/${iconPath}.png`}
				alt={tech}
			/>
			<div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0'>
				<div className='flex items-center justify-center h-full'>
					<p className='text-3xl font-bold text-black opacity-100'>{proficiency}</p>
				</div>
			</div>
		</div>
	);
};

export default Skill;
