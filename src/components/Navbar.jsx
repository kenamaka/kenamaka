import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {Link} from "react-scroll";
import { motion } from "framer-motion";
import logo from '../assets/new1.png'
const Navbar = () => {
	const [nav, setNav] = useState(false);

	const toggleNav = () => {
		setNav(!nav);
	};
	const closeNav = () => {
		setNav(false);
	};
	const menuVariants = {
		open: {
			x: 0,
			transition: {
				stiffness: 20,
				damping: 15,
			},
		},
		closed: {
			x: "-100%",
			transition: {
				stiffness: 20,
				damping: 15,
			},
		},
	};
	return (
		<>
			<div className='fixed top-0 left-0 w-full   shadow-md bg-[#0e2c3e] z-50'>
				<div className='max-w-[1300px] mx-auto  flex justify-between text-white text-xl items-center px-4 md:px-12 h-16'>
					<div class='w-24 cursor-pointer '>
						<Link
							to='hero'
							smooth={true}
							offset={-300}
							duration={500}
						>
							<img
								class='object-cover w-full h-full'
								src={logo}
								alt=''
							/>
						</Link>
					</div>

					<ul className='hidden md:flex gap-12 z-10 cursor-pointer text-base font-semibold'>
						<li>
							<Link
								to='about'
								smooth={true}
								offset={-50}
								duration={500}
							>
								About
							</Link>
						</li>
						<li>
							<Link
								to='portfolio'
								smooth={true}
								offset={-50}
								duration={500}
							>
								Portfolio
							</Link>
						</li>
						<li>
							<Link
								to='contact'
								smooth={true}
								offset={-50}
								duration={500}
							>
								Contact
							</Link>
						</li>
					</ul>
					<div
						onClick={toggleNav}
						className='md:hidden z-50 text-gray-200'
					>
						{nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
					</div>
					<motion.div
						initial={false}
						animate={nav ? "open" : "closed"}
						variants={menuVariants}
						className='fixed left-0 top-0 w-full min-h-screen  bg-[#0e2c3e]  z-40'
					>
						<ul className='font-semibold text-2xl space-y-8 text-center px-6 mt-24'>
							<li>
								<Link
									to='skills'
									smooth={true}
									offset={-50}
									duration={500}
									onClick={closeNav}
								>
									Skills
								</Link>
							</li>{" "}
							<li>
								<Link
									to='portfolio'
									smooth={true}
									offset={-50}
									duration={500}
									onClick={closeNav}
								>
									Portfolio
								</Link>
							</li>
							<li>
								<Link
									to='experience'
									smooth={true}
									offset={-50}
									duration={500}
									onClick={closeNav}
								>
									Experience
								</Link>
							</li>
							<li>
								<Link
									to='about'
									smooth={true}
									offset={-50}
									duration={500}
									onClick={closeNav}
								>
									About
								</Link>
							</li>
							<li>
								<Link
									to='contact'
									smooth={true}
									offset={-50}
									duration={500}
									onClick={closeNav}
								>
									Contact
								</Link>
							</li>
						</ul>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
