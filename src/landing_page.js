import React from 'react';
import Navbar from './components/nav_bar';
import { ReactComponent as Hero1 } from './assets/hero-asset1.svg';
import { ReactComponent as Hero2 } from './assets/hero-asset2.svg';

const LandingPage = () => {
	return (
		<>
			<Navbar />
			<section className='relative h-[70vh] max-w-[1440px] mx-auto mt-8 flex w-full items-center justify-center'>
				<Hero1 className='h-72 absolute mt-[12%] -left-12' />
				<div className='w-[64%] justify-center place-items-center flex-col flex'>
					<p className='text-[48px] lg:text-[80px] font-black leading-[105%] text-center text-gray-900'>
						{/* Level Up Your Career at HR Crunch! */}
						Launch Your Career. Elevate Your Potential
					</p>
					<p className='text-center text-gray-500 w-5/6 text-[21px] font-medium leading-snug mt-8'>
						Join the HR Crunch Network, Connect with like-minded
						individuals from across the country and expand your
						professional circle.
					</p>
					<div className='w-1/2 mt-16 bg-white h-[68px] flex flex-row items-center justify-between rounded-full overflow-hidden p-2'>
						<input
							type='email'
							name='email'
							placeholder='Enter your email'
							className='rounded-l-full py-4 px-4 w-full h-[56px] text-[16px] focus:outline-none'
							// className='w-full px-4 py-3 rounded-l-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 text-gray-500'
						/>
						<button
							type='submit'
							className='whitespace-nowrap h-full w-full rounded-full bg-blue-base text-white font-bold hover:bg-blue-base/90'>
							Join The Community
						</button>
					</div>
				</div>
				<Hero2 className='h-72 absolute mt-[24%] right-0' />
			</section>
		</>
	);
};

export default LandingPage;
