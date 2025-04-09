import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer({text}) {
	return (
		<>
			<div className="relative z-10">
				<img
					src="logo2.png"
					alt="logo-eco-plagas-fondo-negro"
					className="relative left-1/2 transform -translate-x-1/2 bottom-70 w-80 mb-[1rem]"
				/>
				<footer className="bg-white shadow-md w-full text-left font-medium text-base p-14 border-t border-b border-gray-200">
					<div className="flex justify-between items-start" id="footer">
						<div className="w-1/3">
							<div className="text-black mb-6">{text}</div>
							<p className="mt-12 text-gold text-base font-normal i-center">
								Business Connect © 2023
							</p>
						</div>
						<div className="w-1/3">
							<div className="mb-6 i-center">
								<p className="text-black font-light">
									Gil R. Dávalos y Av. Amazonas - Edificio Centro Amazonas -
									#402
									<br />
									Quito, Ecuador
								</p>
							</div>
							<div className="mb-6">
								<p className="text-black font-light i-center">
									+593 96 296 6301
								</p>
							</div>
							<div>
								<p className="text-black font-light i-center">
									<a
										id="contact-mail"
										href="mailto:info@eco-plagas.net"
										className="text-blue-500 hover:underline"
									>
										administracion@bconnect-ec.com
									</a>
								</p>
							</div>
						</div>
						<div className="w-1/4">
							<div className="flex items-center space-x-4 o-center">
								<a
									target="_blank"
									href="https://www.facebook.com/bconnect.ec?mibextid=ZbWKwL"
									className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center hover:bg-gray-300"
								>
									<img
										className="w-4"
										src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/iconoFacebook.png"
										alt="Facebook"
									/>
								</a>
								<a
									target="_blank"
									href="https://instagram.com/bconnect_ec?igshid=MzNlNGNkZWQ4Mg=="
									className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center hover:bg-gray-300"
								>
									<img
										className="w-4"
										src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/iconoInstagram.png"
										alt="Instagram"
									/>
								</a>
								<a
									target="_blank"
									href="https://www.linkedin.com/company/businessconnect.s.a.s/"
									className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center hover:bg-gray-300"
								>
									<LinkedInIcon style={{width: "20px"}} />
								</a>
								<a
									target="_blank"
									href="https://www.tiktok.com/@bconnect_ec?_op=1&_r=1&_t=8d5xNuhFo7K"
									className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center hover:bg-gray-300"
								>
									<img className="w-4" src="tiktok.svg" alt="TikTok" />
								</a>
							</div>
						</div>
					</div>
					<div className="text-black flex justify-center mt-8 font-semibold text-lg">
						Website by{" "}
						<a
							target="_blank"
							href="https://kevinvillajim.github.io/Portfolio/"
							className="text-blue-500 ml-2 hover:underline"
						>
							kevinvillajim
						</a>
					</div>
				</footer>
			</div>
		</>
	);
}
