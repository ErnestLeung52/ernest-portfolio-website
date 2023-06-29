'use client';

import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import SmoothScrollLink from './SmoothScroll';

type Props = {};

const Hero = (props: Props) => {
	const [text, count] = useTypewriter({
		words: ['Developer', 'Creator', 'Coffee Lover'],
		loop: true,
		delaySpeed: 2000,
	});

	return (
		<div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
			<BackgroundCircles />
			{/* Use Next.js img component for optimization  */}
			<img
				className='relative rounded-full h-32 w-32 mx-auto object-cover'
				src='profile-pic.jpg'
				alt='profile-pic'
			/>

			<div className='z-20 w-screen'>
				<h2 className='text-md uppercase text-gray-400 pb-2 tracking-[15px]'>Software Engineer</h2>
				<h1 className='text-5xl lg:text-6xl font-semibold px-10'>
					<span className='mr-3'>{text}</span>
					<Cursor cursorColor='#10b981' />
				</h1>

				<div className='pt-5'>
					<SmoothScrollLink to='#about'>
						<button className='heroButton'>About</button>
					</SmoothScrollLink>

					<SmoothScrollLink to='#experience'>
						<button className='heroButton'>Experience</button>
					</SmoothScrollLink>

					<SmoothScrollLink to='#skills'>
						<button className='heroButton'>Skills</button>
					</SmoothScrollLink>

					<SmoothScrollLink to='#projects'>
						<button className='heroButton'>Projects</button>
					</SmoothScrollLink>
				</div>
			</div>
		</div>
	);
};

export default Hero;
