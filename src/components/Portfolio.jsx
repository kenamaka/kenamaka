import React from "react";
import ScrollableImage from "./ScrollableImage";
import project1 from "../assets/portfolio/foreshield.png";
import project4 from "../assets/portfolio/fidelity.png";
import project3 from "../assets/portfolio/rhythm.png";
import project2 from "../assets/portfolio/tagalong.png";
import project5 from "../assets/portfolio/tagalong1.png";
import project6 from "../assets/portfolio/dashboard.png";
import { AiOutlineGithub } from "react-icons/ai";
import Show from "./Show";


const Portfolio = () => {

  const portfolio = [
		{
			img: project1,
			title: "Foreshield LMS",
			description:
				"An innovative Learning Management System designed for enhanced online education. ",
			links: {
				site: "https://github.com/kenamaka/foreshield/tree/master",
				github: "https://github.com/kenamaka/foreshield/tree/master",
			},
		},
		{
			img: project2,
			title: "Tagalong Technologies Web",
			description:
				"A cutting-edge mobility tech platform for seamless rider-driver connections.",
			links: {
				site: "https://github.com/kenamaka/tagalong",
				github: "https://github.com/kenamaka/tagalong",
			},
		},
		{
			img: project3,
			title: "Rhythm and Lyrics Project",
			description: "Learning Management System(LMS) for Foreshield  ",
			links: {
				site: "https://github.com/kenamaka/dhrimax",
				github: "https://github.com/kenamaka/dhrimax",
			},
		},
		{
			img: project6,
			title: "Interactive Dashboard",
			description:
				"A user-friendly dashboard for managing rides, tracking drivers, and analyzing trip data.  ",
			links: {
				site: "https://github.com/kenamaka/tagalong",
				github: "https://github.com/kenamaka/tagalong",
			},
		},
		{
			img: project4,
			title: "Fidelity Stock Exchange",
			description: "A crypto mining and peer-to-peer trading platform  ",
			links: {
				site: "https://github.com/kenamaka/fidelityStock",
				github: "https://github.com/kenamaka/fidelityStock",
			},
		},
		{
			img: project5,
			title: "Tagalong Landing Page",
			description:
				"A seamless mobility platform connecting riders and drivers effortlessly ",
			links: {
				site: "https://github.com/kenamaka/tagalong",
				github: "https://github.com/kenamaka/tagalong",
			},
		},
	];
	return (
		<>
			<div
				className='max-w-[1000px]   mx-auto p-6 md:my-20   '
				id='portfolio'
			>
				<h2 className='text-2xl font-bold md:text-center text-[#25c19b] mb-10 '>
					Portfolio
				</h2>
				{/* <h1 className='text-2xl font-bold  text-gray-200 mb-8'>Portfolio</h1> */}
				{portfolio.map((image, index) => (
					<Show>
						<div
							key={index}
							className={`flex flex-col md:flex-row ${
								index % 2 !== 0 ? "md:flex-row-reverse" : ""
							} mb-8 gap-6`}
						>
							<ScrollableImage
								image={image.img}
								alt={image.title}
							/>
							<div className='w-full md:w-1/2 py-4 flex flex-col justify-center'>
								<h1 className='text-xl text-gray-200 font-semibold mb-4'>
									{image.title}
								</h1>
								<h2 className='text-gray-400 text-lg font-normal  mb-4'>
									{image.description}
								</h2>
								<div className='flex space-x-4'>
									<a
										href={image.links.site}
										target='_blank'
										className='px-4 py-2 bg-[#25c19b]/20 text-gray-100 rounded-lg hover:bg-[#25c19b]
									transition duration-300'
									>
										View Code
									</a>
									<a
										href={image.links.github}
										target='_blank'
										className='px-4 py-2 bg-[#25c19b]/20 text-gray-100 rounded-lg hover:bg-[#25c19b]
									transition duration-300'
									>
										<AiOutlineGithub />
									</a>
								</div>
							</div>
						</div>
					</Show>
				))}
			</div>
		</>
	);
};

export default Portfolio;
