import React from "react";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/h5.png";
import {
	AiOutlineGithub,
	AiOutlineTwitter,
	AiOutlineInstagram,
	AiOutlineLinkedin,
	AiOutlineFacebook,
} from "react-icons/ai";

import {
	DiCss3,
	DiHtml5,
	DiJavascript1,
	DiNodejsSmall,
	DiReact,
	DiMysql,
	DiBootstrap,
	DiTerminal,
} from "react-icons/di";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<>
			<div
				className='mt-40 lg:mt-40 max-w-[1200px] items-center  mx-auto relative'
				id='hero'
			>
				<div className='grid  md:grid-cols-2  py-12 md:py-4  px-5 gap-8 '>
					<motion.div
						initial={{ opacity: 0, y: -50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1 }}
						className=''
					>
						<TypeAnimation
							sequence={[
								"Software Engineer",
								1000,
								"Data Scientist",
								1000,
								"Mobile Developer",
								1000,
								"Fullstack Developer",
								1000,
								"Frontend Developer",
								1000,
								"Backend Developer",
								1000,

								"PWA Specialist",
								1000,

								"Technical Lead",
								1000,
								"Coding Instructor",
								1000,
								"IT Consultant",
								1000,
							]}
							speed={50}
							repeat={Infinity}
							className='font-bold text-white text-3xl md:text-5xl '
						/>
						<motion.p
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 1, delay: 0.5 }}
							className='text-gray-300  md:7xl text-4xl tracking-tight pt-2 mb-4 '
						>
							Hey, I am <br />
							<span className='text-[#25c19b] font-extrabold'>
								Kenneth Ejiofor
							</span>
						</motion.p>
						<motion.p
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 1, delay: 0.5 }}
							className='text-white md:2xl text-lg pt-2 tracking-tight mb-4'
						>
							I am a Solution-oriented Software Engineer with 4+ years’
							experience. Gifted in building innovative software solutions.
						</motion.p>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 1, delay: 1.5 }}
							className='flex flex-row items-center gap-6 my-20'
						>
							<motion.button
								whileHover={{
									scale: 1.05,
									boxShadow: "0px 0px rgba(0,0,0,0.3)",
								}}
								className='z-10  cursor-pointer font-bold text-gray-200 md-w-auto lg:p-4 px-2 py-3 lg-text-nomal text-sm  border border-[#25c19b] rounded-xl'
							>
								Download CV
							</motion.button>
							<div className='flex gap-6 flex-row text-5xl text-[#25c19b] z-20'>
								<motion.a
									whileHover={{ scale: 1.2 }}
									href='https://github.com/kenamaka'
									target='_blank'
								>
									<AiOutlineGithub />
								</motion.a>

								<motion.a
									whileHover={{ scale: 1.2 }}
									target='_blank'
									href='https://www.linkedin.com/in/kenneth-chiamaka-ejiofor-5b585111a/'
								>
									<AiOutlineLinkedin />
								</motion.a>

								<motion.a
									whileHover={{ scale: 1.2 }}
									href='https://www.instagram.com/kenneth.chiamaka/'
									target='_blank'
								>
									<AiOutlineInstagram />
								</motion.a>
							</div>
						</motion.div>
					</motion.div>

					<motion.img
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 1 }}
						src={profile}
						className='hidden md:block'
					/>
				</div>
				{/* <motion.div
					initial={{ opacity: 0, scale: 0 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1, delay: 0.5 }}
					className='flex flex-row md:text-7xl text-5xl w-full justify-center items-center py-32 px-4 md:px-0'
				>
					<p className='text-gray-200 md:text-xl text-xl  font-semibold'>
						My Tech Stack
					</p>
					<DiHtml5 className='text-orange-600 mx-2' />
					<DiCss3 className='text-blue-600 mx-2' />
					<DiJavascript1 className='text-yellow-500 mx-2' />
					<DiReact className='text-blue-500 mx-2' />
					<img
						src={reactnative}
						alt='react-native'
						width='60px'
						className='mx-2'
					/>

					<DiNodejsSmall className='text-green-500 mx-2' />
				</motion.div> */}

				<div className=' absolute inset-0 p-[0px] m-[0px] overflow-hidden  lg:overflow-visible no-scrollbar '>
					{/* <Beautify left={0} top={0} /> */}
					<div className='beautify-effect left-0 top-0 md:w-[1400px] md:h-[1400px] w-[1400px] h-[1400px] m-[0px]'></div>
				</div>
				<div className=' absolute inset-0 p-[0px] m-[0px] overflow-hidden  lg:overflow-visible no-scrollbar '>
					{/* <Beautify left={0} top={0} /> */}
					<div className='beautify-effect left-0 top-0 md:w-[1400px] md:h-[1400px] w-[1400px] h-[1400px] m-[0px]'></div>
				</div>
			</div>
		</>
	);
};

export default Hero;
