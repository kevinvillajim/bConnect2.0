function Card({img, title, content, boton, url}) {
	return (
		<>
			<div className="w-[22rem] rounded-md shadow-lg p-[1rem] flex flex-col justify-center">
				<div className="">
					<img src={img} className="" />
				</div>
				<div className="">
					<p className="text-[#bf9000] font-righteous text-3xl text-center mt-[1rem]">
						{title}
					</p>
					<p className="text-center py-[1.5rem] text-[#434343] font-arial">
						{content}
					</p>
				</div>
				<a className="w-full" href={url} target="">
					<div className="bg-[#090c2c] flex justify-center py-[0.2rem] rounded-sm">
						<span className="text-[white] text-center">{boton}</span>
					</div>
				</a>
			</div>
		</>
	);
}
export default Card;
