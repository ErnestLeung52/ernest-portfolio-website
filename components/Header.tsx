'use client';

import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import SmoothScrollLink from './SmoothScroll';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

type Props = {};

export default function Header({}: Props) {
	return (
		<header className='sticky top-0 p-5 flex justify-between max-w-7xl mx-auto z-40 items-center'>
			<motion.div
				initial={{ x: -500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className='flex flex-row items-center'
			>
				{/* Social Icons */}
				<SocialIcon
					url='https://github.com/ErnestLeung52'
					fgColor='gray'
					bgColor='transparent'
					target='_blank'
					rel='noopener noreferrer'
				/>
				<SocialIcon
					url='https://www.linkedin.com/in/ernestleung52/'
					fgColor='gray'
					bgColor='transparent'
					target='_blank'
					rel='noopener noreferrer'
				/>
			</motion.div>

			<div className='flex flex-row items-center'>
				{/* <ThemeToggleButton /> */}
				<motion.div
					initial={{ x: 500, opacity: 0, scale: 0.5 }}
					animate={{ x: 0, opacity: 1, scale: 1 }}
					transition={{ duration: 1.5 }}
					className='flex flex-row items-center text-gray-300 cursor-pointer'
				>
					<SmoothScrollLink to='#contact'>
						<EnvelopeIcon className='h-7 w-7 inline mr-2 text-gray-400' />
						<p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
					</SmoothScrollLink>
				</motion.div>
			</div>
		</header>
	);
}
