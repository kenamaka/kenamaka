import React, { useRef, useState } from "react";
import Show from "./Show";
import emailjs from '@emailjs/browser';
import { ColorRing } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {

	const form = useRef()
	const [loading, setLoading] = useState(false)
	 const contactMe = (e) => {
		 e.preventDefault();
		 setLoading(true)

			emailjs
				.sendForm("service_h2mq04r", "template_fwpwnpw", form.current, {
					publicKey: "bpeIEXL34zH6enf1H",
				})
				.then(
					() => {
						console.log("SUCCESS!");
						toast.success(
							"Thank you for your message! I appreciate your interest and will get back to you soon.",
							{
								position: "top-right",
								autoClose: 5000,
								hideProgressBar: false,
								closeOnClick: true,
								pauseOnHover: true,
								draggable: true,
								progress: undefined,
								theme: "colored",
							},
						);
						setLoading(false)
					},
					(error) => {
						console.log("FAILED...", error.text);
						toast.error(
							"Something went wrong! Please try again, or you can email me directly at ejioforkenneth08@gmail.com.",
							{
								position: "top-right",
								autoClose: 5000,
								hideProgressBar: false,
								closeOnClick: true,
								pauseOnHover: true,
								draggable: true,
								progress: undefined,
								theme: "colored",
							},
						);
						setLoading(false)
					},
			);
		 e.target.reset()
		};
	
	return (
		<>
			<div
				className='px-6 max-w-[1000px] py-6 mx-auto md:my-12'
				id='about'
			>
				<Show>
					<div className='grid md:grid-cols-2 plact-items-center'>
						<div>
							<div className='text-gray-300 my-3'>
								<h2 className='text-4xl font-semibold mb-5'>
									About <span className='text-[#25c19b]'>Me</span>
								</h2>
								<p className=' leading-7  mx-auto'>
									I am a Solution-oriented Software Engineer with a strong
									background in developing and executing innovative software
									solutions to improve business productivity. Experienced in the
									aspects of software development lifecycle (SDLC) and project
									management, from concept through to development and delivery.
									Endowed with ability to dissect complex algorithms and
									problems with unmatched creativity. Adept at motivating self
									and others. Passionate about solving everyday life problems
									using the relevant IT tools.
								</p>
							</div>

							<ToastContainer />

							<div className='flex mt-10 items-center gap-7'>
								<div className=' bg-[#25c19b]/40 p-5 rounded-lg'>
									<h3 className='md:text-4xl text-2xl font-semibold text-white'>
										18<span className='text-[#25c19b]'>+</span>
									</h3>
									<p className='text-xs md:text-base text-[#25c19b]'>
										Projects
									</p>
								</div>
								<div className=' bg-[#25c19b]/40 p-5 rounded-lg'>
									<h3 className='md:text-4xl text-2xl font-semibold text-white'>
										5<span className='text-[#25c19b]'>+</span>
									</h3>
									<p className='text-xs md:text-base text-[#25c19b]'>
										Years of Experience
									</p>
								</div>
								<div className=' bg-[#25c19b]/40 p-5 rounded-lg'>
									<h3 className='md:text-4xl text-2xl font-semibold text-white'>
										25<span className='text-[#25c19b]'>+</span>
									</h3>
									<p className='text-xs md:text-base text-[#25c19b]'>
										Happy Clients
									</p>
								</div>
							</div>
						</div>
						<form
							ref={form}
							onSubmit={contactMe}
							className='max-w-6xl p-5 pl-2 md:p-12 text-gray-900'
							id='contact'
						>
							<p className='text-gray-100 font-bold text-2xl mb-6 mt-6'>
								Let's Connect
							</p>
							<input
								className='mb-5 w-full rounded-md border border-[#25c19b] py-2 pl-2 pr-4 '
								type='text'
								placeholder='Enter your name...'
								id='name'
								name='user_name'
								required
							/>
							<input
								className='mb-5 w-full rounded-md border focus:outline-none border-[#25c19b] py-2 pl-2 pr-4 '
								type='email'
								placeholder='Enter your email...'
								id='email'
								name='user_email'
								required
							/>

							<textarea
								name='message'
								id='textarea'
								cols='30'
								rows='4'
								required
								placeholder='Your message...'
								className='mb-5 w-full rounded-md border border-[#25c19b] p-4 '
							/>
							{loading ? (
								<ColorRing
									visible={true}
									height='80'
									width='80'
									ariaLabel='blocks-loading'
									wrapperStyle={{}}
									wrapperClass='blocks-wrapper'
									colors={[
										"#b8c480",
										"#0e2c3e",
										"#F4442E",
										"#25c19b",
										"#429EA6",
									]}
								/>
							) : (
								<button
									type='submit'
									class='text-white bg-[#25c19b]/40 font-semibold hover:bg-[#25c19b] focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 text-center '
								>
									Send Message
								</button>
							)}
						</form>
					</div>
				</Show>
			</div>
		</>
	);
};

export default Contact;
