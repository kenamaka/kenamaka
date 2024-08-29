import React from "react";
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import logo from '../assets/new1.png'
import Show from "./Show";
const Footer = () => {
	return (
		<>
			<div className='space-y-4 pb-10 pt-20 flex flex-col max-w-[1300px] mx-auto items-center text-center '>
				<div className='flex flex-row gap-4 text-[#25c19b] text-4xl'>
					<a
						href='https://github.com/kenamaka'
						target='_blank'
					>
						<AiFillGithub />
					</a>
					<a
						href='https://www.instagram.com/kenneth.chiamaka/'
						target='_blank'
					>
						<AiFillInstagram />
					</a>
					<a
						href='https://www.facebook.com/profile.php?id=100080925417881'
					target="_blank"
					>
						<AiFillFacebook />
					</a>
					<a
						target='_blank'
						href='https://www.linkedin.com/in/kenneth-chiamaka-ejiofor-5b585111a/'
					>
						<AiFillLinkedin />
					</a>
					<a
						href='https://x.com/Kennethejiofo'
						target='_blank'
					>
						<AiFillTwitterCircle />
					</a>
				</div>
				<p className='text-gray-300 text-sm md:text-lg px-1 py-2'>
					@ {new Date().getUTCFullYear()}&nbsp;
					<span className='font-bold '>Kenneth Ejiofor</span> | Crafted with
					passion.
				</p>
			</div>
		</>
	);
};

export default Footer;
