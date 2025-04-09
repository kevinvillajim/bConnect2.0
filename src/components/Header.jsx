import React, {useState} from "react";

function Header() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<>
			<div className="w-full h-[3.5rem] bg-white flex justify-between px-[1rem] fixed border-y-[1px]">
				<div className="h-[2rem]">
					<img
						className="h-[3rem] flex align-center p-[0.2rem]"
						src="logo.png"
					/>
				</div>
				<div className="flex items-center">
					<div className="" id="hamb" onClick={toggleModal}>
						<span className="material-symbols-outlined cursor-pointer">
							menu
						</span>
					</div>
					<ul className="flex items-center gap-[1rem]" id="onone">
						<a href="home">
							<li className="text-[rgba(106,106,106,1)] cursor-pointer">
								Inicio
							</li>
						</a>
						<li className="text-[rgba(106,106,106,1)]">•</li>
						<a href="nosotros">
							<li className="text-[rgba(106,106,106,1)] cursor-pointer">
								¿Quiénes somos?
							</li>
						</a>
						<li className="text-[rgba(106,106,106,1)]">•</li>
						<a href="contacto">
							<li className="text-[rgba(106,106,106,1)] cursor-pointer">
								Contáctanos
							</li>
						</a>
						<li className="text-[rgba(106,106,106,1)]">•</li>
						<a href="trabajo">
							<li className="text-[rgba(106,106,106,1)] cursor-pointer">
								Trabaja con nosotros
							</li>
						</a>
						<li></li>
					</ul>
					<span
						className="material-symbols-outlined text-[rgba(106,106,106,1)] cursor-pointer"
						id="inone"
					>
						search
					</span>
				</div>
			</div>

			{isModalOpen && (
				<div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex z-50">
					<div className="bg-white p-4 rounded w-[90%] max-w-[400px]">
						<div className="flex justify-end">
							<button onClick={toggleModal} className="text-gray-600">
								<span className="material-symbols-outlined">close</span>
							</button>
						</div>
						<ul className="flex flex-col items-start gap-[1rem]">
							<a href="home" onClick={toggleModal}>
								<li className="text-[rgba(106,106,106,1)] cursor-pointer">
									Inicio
								</li>
							</a>
							<a href="nosotros" onClick={toggleModal}>
								<li className="text-[rgba(106,106,106,1)] cursor-pointer">
									¿Quiénes somos?
								</li>
							</a>
							<a href="contacto" onClick={toggleModal}>
								<li className="text-[rgba(106,106,106,1)] cursor-pointer">
									Contáctanos
								</li>
							</a>
							<a href="trabajo" onClick={toggleModal}>
								<li className="text-[rgba(106,106,106,1)] cursor-pointer">
									Trabaja con nosotros
								</li>
							</a>
						</ul>
					</div>
				</div>
			)}
		</>
	);
}

export default Header;
