'use client';

import React, { useState } from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {};

type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

const ContactMe = (props: Props) => {
	const { register, handleSubmit } = useForm<Inputs>();
	const [isCopied, setIsCopied] = useState(false);

	const copyToClipboard = async (text: string) => {
		await navigator.clipboard.writeText(text);
		setIsCopied(true);
	};

	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:ernestleung14@gmail.com?subject=${formData.subject}&body=${formData.message}`;
	};

	return (
		<div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ml-6'>Contact</h3>

			<div className='flex flex-col space-y-10'>
				<h4 className='text-lg sm:text-xl md:text-3xl font-semibold text-center transition-all'>
					Please don't hesitate to reach out
				</h4>

				<div className='text-md sm:text-lg lg:text-2xl transition-all'>
					<div className='flex items-center space-x-5 justify-center'>
						<EnvelopeIcon className='text-emerald-500 h-7 w-7 animate-pulse' />
						<p className=''>ernestleung14@gmail.com</p>
						<ClipboardDocumentCheckIcon
							className={
								isCopied
									? 'w-6 h-6 cursor-pointer text-emerald-500'
									: 'w-6 h-6 cursor-pointer text-gray-500 hover:text-emerald-500'
							}
							onClick={() => copyToClipboard('ernestleung14@gmail.com')}
						/>
					</div>

					<div className='flex mt-2 items-center space-x-5 justify-center'>
						<PhoneIcon className='text-emerald-500 h-7 w-7 animate-pulse' />
						<p className=''>+1 (626) 818-3659</p>
					</div>

					<div className='flex mt-2 items-center space-x-5 justify-center'>
						<MapPinIcon className='text-emerald-500 h-7 w-7 animate-pulse' />
						<p className=''>United States</p>
					</div>

					<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 mt-10 w-fit mx-auto'>
						<div className='flex space-x-2'>
							<input {...register('name')} placeholder='Name' className='contactInput' type='text' />
							<input {...register('email')} placeholder='Email' className='contactInput' type='email' />
						</div>

						<input {...register('subject')} placeholder='Subject' className='contactInput' type='text' />

						<textarea {...register('message')} placeholder='Message' className='contactInput' />
						<button
							type='submit'
							className='bg-emerald-500 py-2 px-4 sm:py-5 sm:px-10 rounded-md text-white font-bold sm:text-lg'
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactMe;
