import React from "react";
import { motion } from "framer-motion";
import Show from "./Show";
const Experience = () => {
	const experience = [
		{
			company: "Foreshield",
			period: "June 2024 - Present",
			role: "Software Developer (Contract)",
			description:
				"Involved in developing an LMS project similar, featuring a robust dashboard, blog section, instructor management,business integration, admin management, course payment integration, and a responsive mobile version to ensure accessibility and functionality across all devices",
		},
		{
			company: "3MTT",
			period: "January 2024 - Present",
			role: "Training Instructor (Contract)",
			description:
				"As a Training Instructor, I focus on teaching essential programming skills like Python and SQL, guiding students in coding for data manipulation, visualization, and interpretation. I design and deliver a curriculum that integrates practical programming with real-world data analysis techniques, helping students confidently analyze and extract insights from complex datasets.",
		},

		{
			company: "Tagalong Technologies",
			period: "May 2023 - April 2024",
			role: "Frontend Engineer",
			description:
				"Developed the front-end for a mobility tech software project akin to Uber, including the landing page, user interfaces, and admin dashboard, ensuring a seamless user experience and efficient management system.",
		},
		{
			company: "DRHIHMAKX Company Limited",
			period: "November 2022 - March 2024",
			role: "Software Engineer",
			description:
				"Developed a full-stack application for Rhythm and Lyrics Project Season 1. A music talent hunt competition platform, encompassing a user robust user dashboard, admin dashboard, super user dashboard, payment gateway, voting system, email messaging, push notification etc. Also managed the web app for the entire duration of the competition",
		},
		{
			company: "Fidelity Stock US",
			period: "May 2022 - January 2023",
			role: "Software Engineer/Technical Lead",
			description:
				"Developed a full-stack blockchain peer-to-peer mining application, incorporating a user-friendly interface, secure transaction processing, real-time mining updates, wallet integration, and an admin dashboard to manage network operations and user activities efficiently.",
		},
		// {
		// 	company: "Foreshield",
		// 	period: "June 2024 - Present",
		// 	role: "Software Developer (Volunteer)",
		// 	description:
		// 		"Involved in developing an LMS project similar, featuring a robust dashboard, blog section, instructor management,business integration, admin management, course payment integration, and a responsive mobile version to ensure accessibility and functionality across all devices",
		// },
	];
	return (
		<>
			<div className='p-8 px-6 max-w-[700px] mx-auto ' id="experience">
				<h1 className='text-2xl  text-[#25c19b] font-bold md:text-center mb-12'>
					Experience
				</h1>
				<motion.div
					className='space-y-8'
					initial='hidden'
					animate='visible'
				>
					{experience.map((work, index) => (
						<Show>
							<motion.div
								key={index}
								initial='hidden'
								whileInView='visible'
								viewport={{ once: false, amount: 0.3 }}
								transition={{ duration: 1 }}
								className='  border border-[#25c19b] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-100 bg-[#25c19b]/20'
							>
								<h2 className='text-gray-100 text-xl font-semibold'>
									{work.company}
								</h2>
								<p className='text-gray-300 text-lg pt-2 font-medium'>
									{work.period}
								</p>
								<p className='text-lg text-gray-400 mt-4'>{work.description}</p>
								<p className='pt-5 text-gray-200 font-semibold'>{work.role}</p>
							</motion.div>
						</Show>
					))}
				</motion.div>
				<div className=' absolute inset-0 p-[0px] m-[0px] overflow-hidden  lg:overflow-visible no-scrollbar '>
					{/* <Beautify left={0} top={0} /> */}
					<div className='beautify-effect left-0 top-0 md:w-[1400px] md:h-[1400px] w-[1400px] h-[1400px] m-[0px]'></div>
				</div>
			</div>
		</>
	);
};

export default Experience;
