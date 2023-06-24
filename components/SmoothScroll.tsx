'use client';

import React, { FC, MouseEvent } from 'react';

interface SmoothScrollLinkProps {
	to: string;
	children: React.ReactNode;
}

const SmoothScrollLink: FC<SmoothScrollLinkProps> = ({ to, children }) => {
	const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();

		const targetElement = document.querySelector(to);
		targetElement?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<a href={to} onClick={handleClick}>
			{children}
		</a>
	);
};

export default SmoothScrollLink;
