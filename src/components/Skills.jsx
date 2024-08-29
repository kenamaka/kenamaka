import React from "react";
import redux from "../assets/svg/redux.svg";

import {
	DiBootstrap,
	DiMongodb,
	DiGithubBadge,
	DiCss3,
	DiExtjs,
	DiNodejsSmall,
	DiJavascript1,
	DiSass,
	DiReact,
	DiHtml5,
	DiMaterializecss,
	DiMysql,
	DiTerminal,
	DiDjango,
	DiPython,
} from "react-icons/di";
import Show from "./Show";
const Skills = () => {
	const skills = [
		{
			category: "Frontend",
			technologies: [
				{ name: "HTML", icon: <DiHtml5 className='text-orange-600' /> },
				{ name: "CSS", icon: <DiCss3 className='text-blue-600' /> },
				{
					name: "Saas",
					icon: <DiSass className='text-pink-600' />,
				},
				{
					name: "Bootstrap",
					icon: <DiBootstrap className='text-purple-600' />,
				},

				{
					name: "Tailwind CSS",
					icon: (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 128 128'
							className='w-6'
						>
							<path
								d='M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0'
								fill='#38bdf8'
							/>
						</svg>
					),
				},
				{
					name: "JavaScript",
					icon: <DiJavascript1 className='text-yellow-500' />,
				},
				{ name: "React", icon: <DiReact className='text-blue-500' /> },
				{
					name: "Redux",
					icon: (
						<img
							src={redux}
							alt='redux'
							width='23px'
						/>
					),
				},
			],
		},
		{
			category: "Backend",
			technologies: [
				{ name: "NodeJS", icon: <DiNodejsSmall className='text-green-500' /> },
				{
					name: "Express JS",
					icon: (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 128 128'
							className='text-emerald-950 w-6'
						>
							<path d='M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z' />
						</svg>
					),
				},
				{ name: "MySQL", icon: <DiMysql className='text-lime-400' /> },
				{ name: "MongoDB", icon: <DiMongodb className='text-green-500' /> },
				{ name: "GitHub", icon: <DiGithubBadge className='text-gray-200' /> },
				{ name: "Terminal", icon: <DiTerminal className='text-[#25c19b]' /> },
				{ name: "Python", icon: <DiPython className='text-[#25c19b]' /> },
				{ name: "Django", icon: <DiDjango className='text-pink-400 ' /> },
			],
		},
	];

	return (
		<>
			<div
				className='max-w[1300px] mx-auto flex flex-col items-center justify-center px-4 pb-8 py-14 text-gray-200 md:py-12'
				id='skills'
			>
				<Show>
					<h2 className=' text-2xl font-bold text-[#25c19b] mb-4 md:text-center'>
						Skills
					</h2>
					<p className='md:text-center text-lg text-gray-300 mb-8'>
						I have developed many software products, using these tools and many
						more. .
					</p>
					<div
						className='flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 
                 
                '
					>
						{skills.map((skill, index) => (
							<div
								key={index}
								className='border    border-[#25c19b] p-12 bg-[#25c19b]/10 shadow-lg rounded-lg w-full md:w-1/2'
							>
								<h3 className='text-xl font-bold mb-4 text-center  grid-cols-2 gap-4'>
									{skill.category}
								</h3>
								<div className='grid grid-cols-2 gap-6'>
									{skill.technologies.map((tech, key) => (
										<div
											key={key}
											className='flex items-center space-x-2 '
										>
											<span className='text-2xl'>{tech.icon}</span>
											<span className='text-white'>{tech.name}</span>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</Show>
			</div>
		</>
	);
};

export default Skills;
