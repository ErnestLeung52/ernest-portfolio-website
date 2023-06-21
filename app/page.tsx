import About from '@/components/About';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import WorkExperience from '@/components/WorkExperience';
import Image from 'next/image';

export default function Home() {
	return (
		// z-0 base layer
		<div className=' bg-slate-800 text-slate-100 h-screen snap-y snap-mandatory overflow-scroll z-0'>
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
		</div>
	);
}
