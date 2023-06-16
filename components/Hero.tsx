'use client';

import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {};

const Hero = (props: Props) => {
	const [text, count] = useTypewriter({
		words: ['Developer', 'Designer', 'Creator'],
		loop: true,
		delaySpeed: 2000,
	});

	return (
		<div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
			<BackgroundCircles />
			{/* Use Next.js img component for optimization  */}
			<img />

			<h1>
				<span>{text}</span>
				<Cursor />
			</h1>
		</div>
	);
};

export default Hero;
