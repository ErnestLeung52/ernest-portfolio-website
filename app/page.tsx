import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Image from 'next/image';

export default function Home() {
	return (
		<div className=' bg-slate-800 text-slate-100 h-screen snap-y snap-mandatory overflow-scroll z-0'>
			{/* Header */}
			<Header />

			{/* Hero */}
			<section id='hero' className='snap-center'>
				<Hero />
			</section>

			{/* About */}
		</div>
	);
}
