'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

type Props = {};

const ThemeToggleButton = (props: Props) => {
	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === 'system' ? systemTheme : theme;

	const changeThemeHandler = () => (theme == 'dark' ? setTheme('light') : setTheme('dark'));

	return (
		<div className='w-8 h-8 text-slate-800 dark:text-slate-500 cursor-pointer'>
			{theme === 'dark' ? <SunIcon onClick={changeThemeHandler} /> : <MoonIcon onClick={changeThemeHandler} />}
		</div>
	);
};

export default ThemeToggleButton;
