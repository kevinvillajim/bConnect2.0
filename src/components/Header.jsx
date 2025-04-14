import {useState, useEffect} from "react";
import React from "react";
import PropTypes from "prop-types";

// Datos por defecto para el menú
const defaultMenuItems = [
	{
		name: "Inicio",
		url: "/home",
	},
	{
		name: "Servicios",
		url: "/servicios",
		submenu: [
			{name: "Seguridad Electrónica", url: "/servicios/desarrollo-web"},
			{name: "Ciberseguridad", url: "/servicios/desarrollo-movil"},
		],
	},
	{
		name: "Productos",
		url: "/productos",
		submenu: [
			{name: "Pantallas Interactivas", url: "/productos/software"},
			{name: "Software", url: "/productos/software"},
			{name: "Hardware", url: "/productos/hardware"},
			{name: "Accesorios", url: "/productos/accesorios"},
		],
	},
	{
		name: "¿Quiénes somos?",
		url: "/nosotros",
	},
	{
		name: "Contáctanos",
		url: "/contacto",
	},
	{
		name: "Trabaja con nosotros",
		url: "/trabajo",
	},
];

// Componente Header limpio y minimalista
function Header({
	logo = "logo.png",
	menuItems = defaultMenuItems,
	backgroundColor = "bg-white",
	textColor = "text-gray-600",
	isFixed = true,
}) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState(null);
	const [windowWidth, setWindowWidth] = useState(
		typeof window !== "undefined" ? window.innerWidth : 0
	);

	// Determina si es móvil
	const isMobile = windowWidth < 1024;

	// Seguimiento del tamaño de ventana
	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Función para abrir/cerrar modal
	const toggleModal = () => setIsModalOpen(!isModalOpen);

	// Maneja el hover o clic para mostrar submenús
	const handleDropdown = (index, action) => {
		if (action === "enter" && !isMobile) {
			setActiveDropdown(index);
		} else if (action === "leave" && !isMobile) {
			setActiveDropdown(null);
		} else if (action === "click") {
			setActiveDropdown(activeDropdown === index ? null : index);
		}
	};

	return (
		<>
			{/* Header principal */}
			<div
				className={`w-full h-14 ${backgroundColor} flex justify-between items-center px-4 ${
					isFixed ? "fixed" : ""
				} top-0 left-0 right-0 border-b border-gray-200 z-50`}
			>
				{/* Logo */}
				<div className="flex items-center h-full">
					<img className="h-10" src={logo} alt="Logo" />
				</div>

				{/* Navegación */}
				<div className="flex items-center h-full">
					{isMobile ? (
						/* Botón de menú para móvil */
						<div className="cursor-pointer" onClick={toggleModal}>
							<span className="material-symbols-outlined">menu</span>
						</div>
					) : (
						/* Menú para escritorio */
						<nav className="flex items-center h-full">
							<ul className="flex items-center h-full">
								{menuItems.map((item, index) => {
									const hasSubmenu = item.submenu && item.submenu.length > 0;

									return (
										<React.Fragment key={index}>
											<div
												className="relative h-full flex items-center"
												onMouseEnter={() => handleDropdown(index, "enter")}
												onMouseLeave={() => handleDropdown(index, "leave")}
											>
												<a
													href={item.url}
													className="flex items-center h-full px-3"
												>
													<li
														className={`${textColor} cursor-pointer hover:text-blue-600 flex items-center`}
													>
														{item.name}
														{hasSubmenu && (
															<span className="material-symbols-outlined text-sm ml-1">
																{activeDropdown === index
																	? "keyboard_arrow_up"
																	: "keyboard_arrow_down"}
															</span>
														)}
													</li>
												</a>

												{/* Submenú */}
												{hasSubmenu && activeDropdown === index && (
													<div className="absolute top-full left-0 mt-0 bg-white shadow-md rounded py-2 min-w-40 z-10">
														<ul>
															{item.submenu.map((subItem, subIndex) => (
																<a
																	key={subIndex}
																	href={subItem.url}
																	className="block"
																>
																	<li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
																		{subItem.name}
																	</li>
																</a>
															))}
														</ul>
													</div>
												)}
											</div>

											{/* Separador */}
											{index < menuItems.length - 1 && (
												<li className={`${textColor} px-1`}>•</li>
											)}
										</React.Fragment>
									);
								})}
							</ul>

							{/* Icono de búsqueda */}
							<span
								className={`material-symbols-outlined ${textColor} cursor-pointer ml-4 hover:text-blue-600`}
							>
								search
							</span>
						</nav>
					)}
				</div>
			</div>

			{/* Modal para móvil */}
			{isModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex z-50">
					<div className="bg-white w-10/12 max-w-sm h-full ml-auto">
						<div className="flex justify-between items-center p-4 border-b">
							<div>Menú</div>
							<button onClick={toggleModal} className="text-gray-600">
								<span className="material-symbols-outlined">close</span>
							</button>
						</div>
						<nav className="p-4">
							<ul className="flex flex-col space-y-4">
								{menuItems.map((item, index) => {
									const hasSubmenu = item.submenu && item.submenu.length > 0;

									return (
										<li key={index} className="border-b pb-2">
											{hasSubmenu ? (
												<div>
													<div
														className="flex justify-between items-center cursor-pointer"
														onClick={() => handleDropdown(index, "click")}
													>
														<span className={textColor}>{item.name}</span>
														<span className="material-symbols-outlined text-sm">
															{activeDropdown === index
																? "keyboard_arrow_up"
																: "keyboard_arrow_down"}
														</span>
													</div>

													{activeDropdown === index && (
														<ul className="mt-2 ml-4 space-y-2 border-l-2 border-gray-200">
															{item.submenu.map((subItem, subIndex) => (
																<a
																	key={subIndex}
																	href={subItem.url}
																	onClick={toggleModal}
																>
																	<li
																		className={`${textColor} cursor-pointer pl-2`}
																	>
																		{subItem.name}
																	</li>
																</a>
															))}
														</ul>
													)}
												</div>
											) : (
												<a href={item.url} onClick={toggleModal}>
													<span className={`${textColor} cursor-pointer`}>
														{item.name}
													</span>
												</a>
											)}
										</li>
									);
								})}
							</ul>
						</nav>
					</div>
				</div>
			)}
		</>
	);
}

// PropTypes para validación
Header.propTypes = {
	logo: PropTypes.string,
	menuItems: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired,
			submenu: PropTypes.arrayOf(
				PropTypes.shape({
					name: PropTypes.string.isRequired,
					url: PropTypes.string.isRequired,
				})
			),
		})
	),
	backgroundColor: PropTypes.string,
	textColor: PropTypes.string,
	isFixed: PropTypes.bool,
};

export default Header;
