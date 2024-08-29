import React, { useRef, useEffect } from "react";
import project1 from "../assets/portfolio/foreshield.png";
import project4 from "../assets/portfolio/fidelity.png";
import project3 from "../assets/portfolio/rhythm.png";
import project2 from "../assets/portfolio/tagalong.png";

const ScrollableImage = ({ image,alt }) => {
	const containerRef = useRef(null);
	const isScrolling = useRef(false);

	useEffect(() => {
		const container = containerRef.current;

		const scrollToBottom = () => {
			if (container && !isScrolling.current) {
				container.scroll({
					top: container.scrollHeight,
					behavior: "smooth",
				});
			}
		};

		const handleMouseEnter = () => {
			scrollToBottom();
		};

		const handleFocus = () => {
			scrollToBottom();
		};

		const handleMouseDown = () => {
			isScrolling.current = true;
		};

		const handleMouseUp = () => {
			isScrolling.current = false;
		};

		const handleScroll = () => {
			isScrolling.current = true;
		};

		if (container) {
			container.addEventListener("mouseenter", handleMouseEnter);
			container.addEventListener("focus", handleFocus);
			container.addEventListener("mousedown", handleMouseDown);
			container.addEventListener("mouseup", handleMouseUp);
			container.addEventListener("scroll", handleScroll);

			return () => {
				container.removeEventListener("mouseenter", handleMouseEnter);
				container.removeEventListener("focus", handleFocus);
				container.removeEventListener("mousedown", handleMouseDown);
				container.removeEventListener("mouseup", handleMouseUp);
				container.removeEventListener("scroll", handleScroll);
			};
		}
	}, []);
	return (
		<>
			<div
				ref={containerRef}
				tabIndex={0}
				className='w-full h-80 md:h-96 md:w-1/2    overflow-y-auto  scrollbar-custom  transition duration-300 cursor-pointer'
				style={{ scrollBehavior: "scroll" }}
			>
				<img
					src={image}
					alt={alt}
					className='pointer-events-none  shadow-lg  w-full object-cover  '
					onContextMenu={(e) => e.preventDefault()}
				/>
			</div>

			
		</>
	);
};

export default ScrollableImage;
