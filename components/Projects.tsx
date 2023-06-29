'use client';

import React from 'react';
import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import rawProjectsData from '../data/projectsData.json';
import { ITypeProject } from '@/types/interface';
import { SocialIcon } from 'react-social-icons';
import { LinkIcon } from '@heroicons/react/24/solid';

type Props = {};

const Projects = (props: Props) => {
	const projectsData: ITypeProject[] = rawProjectsData;

	function classNames(...classes: (string | boolean | undefined)[]): string {
		return classes.filter(Boolean).join(' ');
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='h-screen relative flex overflow-hidden flex-col text-left max-w-full mx-auto items-center z-20 '
		>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

			<div className='mt-16 relative w-full flex'>
				<section aria-labelledby='features-heading' className='mx-auto max-w-7xl py-32 sm:px-2 lg:px-8'>
					<div className='mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0'>
						{/* <div className='max-w-3xl'></div> */}

						<Tab.Group as='div' className='mt-4'>
							<div className='-mx-4 flex  sm:mx-0'>
								<div className='flex-auto border-b border-gray-400 mx-4 sm:px-0'>
									<Tab.List className='-mb-px flex space-x-5'>
										{projectsData.map((project) => (
											<Tab
												key={project.name}
												className={({ selected }) =>
													classNames(
														selected
															? 'border-emerald-400 text-emerald-400'
															: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-300',
														'whitespace-nowrap border-b-[3px] py-3 text-sm font-medium'
													)
												}
											>
												{project.name}
											</Tab>
										))}
									</Tab.List>
								</div>
							</div>

							<Tab.Panels as={Fragment}>
								{projectsData.map((project) => (
									<Tab.Panel key={project.name} className='relative pt-10 px-4 lg:pt-16 z-20'>
										{project.features.map((feature) => (
											<div
												key={feature.name}
												className='flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8'
											>
												<div className='mt-6 lg:col-span-5 lg:mt-0'>
													<div className='flex flex-row items-center space-x-3'>
														<h3 className='text-lg font-medium text-gray-400 lg:text-2xl'>
															{feature.name}
														</h3>
														<div className='flex flex-row items-center cursor-pointer'>
															<SocialIcon
																url={feature.githubURL}
																fgColor='gray'
																bgColor='transparent'
																style={{ height: 40, width: 40 }}
																target='_blank'
																rel='noopener noreferrer'
															/>
															{feature.hostURL && (
																<a
																	href={feature.hostURL}
																	target='_blank'
																	rel='noopener noreferrer'
																>
																	<LinkIcon className='w-5 h-5 text-gray-400' />
																</a>
															)}
														</div>
													</div>
													<div className='mt-2 text-sm text-gray-400 lg:text-base'>
														{feature.description.map((paragraph, i) => (
															<p key={i} className='my-2'>
																{paragraph}
															</p>
														))}
													</div>
												</div>
												<div className='lg:col-span-7'>
													{/* <div className='aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:aspect-h-2 sm:aspect-w-5'> */}
													<div className='w-[300px] mx-auto overflow-hidden rounded-lg sm:w-[420px] lg:w-[500px]'>
														<img
															src={feature.imageSrc}
															alt={feature.imageAlt}
															className='object-cover object-center'
														/>
													</div>
												</div>
											</div>
										))}
									</Tab.Panel>
								))}
							</Tab.Panels>
						</Tab.Group>
					</div>
				</section>
			</div>
			<div className='w-full absolute top-[30%] bg-emerald-800/10 left-0 h-[500px] -skew-y-12 z-0' />
		</motion.div>
	);
};

export default Projects;
