function Banner({link}) {
	return (
		<>
			<div
				className="w-screen h-screen bg-black bg-fixed banner"
				style={{
					backgroundImage: `url("banner-home.jpg")`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="bg-black bg-opacity-50 h-[100%] w-[100%] flex justify-center items-center flex-col">
					<p className="text-[#F1C232] font-times text-4xl italic">
						¡El futuro es{" "}
						<span className="font-times text-[#bf9000] text-4xl italic">
							AHORA!
						</span>
					</p>
					<br></br>
					<div
						className="w-[50%] flex justify-center flex-col text-center"
						id="banner-text"
					>
						<p className="font-righteous text-[#bf9000] font-bold text-5xl">
							TECNOLOGÍA
						</p>
						<p className="font-righteous text-[#bf9000] font-bold text-5xl">
							E INNOVACIÓN
						</p>
					</div>
					<div className="w-[2rem] h-[2rem] absolute bottom-1 flex justify-center">
						<a href={link}>
							<span className="material-symbols-outlined text-6xl text-[white] cursor-pointer text-center">
								keyboard_arrow_down
							</span>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Banner;
