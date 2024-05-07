import React from 'react';
import { ReactComponent as Logo } from '../assets/logo_h_black.svg';

const Navbar = () => {
	return (
		<nav className='bg-white fixed top-0 w-full z-50 '>
			<div className='max-w-[1440px] mx-auto py-6 flex justify-between items-center'>
				{/* Logo */}
				<div className='flex items-center text-gray-800'>
					<Logo className='h-[24px] w-auto' />
				</div>

				{/* Navigation divs */}
				<ul className='hidden md:flex space-x-10'>
					<li>
						<div className='text-gray-700 hover:text-gray-900'>
							Home
						</div>
					</li>
					<li>
						<div className='text-gray-700 hover:text-gray-900'>
							About Us
						</div>
					</li>
					<li>
						<div className='text-gray-700 hover:text-gray-900'>
							Contact
						</div>
					</li>
				</ul>

				<button
					onClick={() => {}}
					className='inline-flex items-center px-4 py-2 bg-blue-base hover:bg-blue-base/90 text-white rounded-md font-bold md:ml-4'>
					Sign Up
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
