import About from '@/components/About';
import ContactMe from '@/components/ContactMe';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import SmoothScrollLink from '@/components/SmoothScroll';
import WorkExperience from '@/components/WorkExperience';
import Image from 'next/image';

export const metadata = {
	title: "Ernest' Portfolio",
};

export default function Home() {
	return (
		// z-0 base layer
		<div className='bg-slate-800 text-slate-200 h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-gray-400'>
			{/* Header */}
			<Header />

			{/* Hero */}
			<section id='hero' className='snap-start'>
				<Hero />
			</section>

			{/* About */}
			<section id='about' className='snap-center'>
				<About />
			</section>

			{/* Work Experience */}
			<section id='experience' className='snap-center'>
				<WorkExperience />
			</section>

			{/* Skills */}
			<section id='skills' className='snap-start'>
				<Skills />
			</section>

			{/* Projects */}
			<section id='projects' className='snap-start'>
				<Projects />
			</section>

			{/* Contact me */}
			<section id='contact' className='snap-start'>
				<ContactMe />
			</section>

			<SmoothScrollLink to='hero'>
				<footer className='sticky bottom-5 w-full cursor-pointer'>
					<div className='flex items-center justify-center'>
						<img
							className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
							src=''
							alt='TOP'
						/>
					</div>
				</footer>
			</SmoothScrollLink>
		</div>
	);
}
