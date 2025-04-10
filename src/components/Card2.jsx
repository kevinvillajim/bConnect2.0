


export function Card2({ title, description, imageUrl, altText, link, icon }) {
  return (
		<div className="group relative">
			{/* Hexagon shape overlay */}
			<div className="absolute -inset-0.5 bg-gradient-to-r from-[#FECC2B] to-[#28538C] opacity-0 group-hover:opacity-100 rounded-lg blur-sm transition duration-1000"></div>

			{/* Card content */}
			<div className="relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl">
				{/* Honeycomb pattern in the corner */}
				<div className="absolute top-0 right-0 w-24 h-24 opacity-10 z-0">
					<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M25.98 0L0 15v30l25.98 15L51.96 45V15L25.98 0z"
							fill="#28538C"
							transform="translate(0 0)"
						></path>
						<path
							d="M25.98 0L0 15v30l25.98 15L51.96 45V15L25.98 0z"
							fill="#28538C"
							transform="translate(48 0)"
						></path>
						<path
							d="M25.98 0L0 15v30l25.98 15L51.96 45V15L25.98 0z"
							fill="#28538C"
							transform="translate(24 42)"
						></path>
						<path
							d="M25.98 0L0 15v30l25.98 15L51.96 45V15L25.98 0z"
							fill="#28538C"
							transform="translate(72 42)"
						></path>
					</svg>
				</div>

				{/* Image container with honeycomb clip-path */}
				<div className="relative h-56 w-full overflow-hidden">
					<div className="absolute inset-0 bg-[#FECC2B] opacity-30 mix-blend-multiply z-10"></div>

					{/* Bee icon or provided icon */}
					<div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full z-20">
						{icon || (
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M18 4H17V3C17 2.45 16.55 2 16 2C15.45 2 15 2.45 15 3V4H9V3C9 2.45 8.55 2 8 2C7.45 2 7 2.45 7 3V4H6C4.9 4 4 4.9 4 6V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V6C20 4.9 19.1 4 18 4Z"
									fill="#FECC2B"
								/>
								<path
									d="M9.5 10.5C9.5 11.33 8.83 12 8 12C7.17 12 6.5 11.33 6.5 10.5C6.5 9.67 7.17 9 8 9C8.83 9 9.5 9.67 9.5 10.5Z"
									fill="#28538C"
								/>
								<path
									d="M17.5 10.5C17.5 11.33 16.83 12 16 12C15.17 12 14.5 11.33 14.5 10.5C14.5 9.67 15.17 9 16 9C16.83 9 17.5 9.67 17.5 10.5Z"
									fill="#28538C"
								/>
								<path
									d="M9.5 16.5H14.5V14.5C14.5 13.4 13.6 12.5 12.5 12.5H11.5C10.4 12.5 9.5 13.4 9.5 14.5V16.5Z"
									fill="#28538C"
								/>
							</svg>
						)}
					</div>
				</div>

				<div className="p-6 relative z-10">
					{/* Title with honeycomb accent */}
					<div className="flex items-center mb-3">
						<h3 className="font-helvetica font-bold text-[#28538C] text-xl">
							{title}
						</h3>
						<div className="ml-2 w-4 h-4">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12 0L23.1244 6V18L12 24L0.875645 18V6L12 0Z"
									fill="#FECC2B"
								/>
							</svg>
						</div>
					</div>

					{/* Description */}
					<p className="font-public-sans text-[#122C4C] mb-6">{description}</p>

					{/* Call to action */}
					{link && <div className="mt-4"></div>}
				</div>

				{/* Honeycomb corner accent */}
				<div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden">
					<div className="absolute -bottom-8 -left-8 w-16 h-16 bg-[#FECC2B] opacity-10 rotate-45"></div>
				</div>
			</div>
		</div>
	);
}

export default Card2