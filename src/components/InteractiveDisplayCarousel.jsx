import {useState, useEffect} from "react";
import React from "react";
import PropTypes from "prop-types";

// Colores corporativos consistentes con BeeCard
const colors = {
	primary: {
		yellow: "#FECC2B",
		blue: "#28538C",
		darkBlue: "#122C4C",
	},
	secondary: {
		gray: "#A69E95",
		white: "#FFFFFF",
	},
};

const InteractiveDisplayCarousel = ({products = []}) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [displayCount, setDisplayCount] = useState(4);

	// Ajustar la cantidad de productos visibles según el ancho de la pantalla
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setDisplayCount(1);
			} else if (window.innerWidth < 1024) {
				setDisplayCount(2);
			} else if (window.innerWidth < 1280) {
				setDisplayCount(3);
			} else {
				setDisplayCount(4);
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Navegar a la izquierda
	const goToPrev = () => {
		if (activeIndex > 0) {
			setActiveIndex(activeIndex - 1);
		}
	};

	// Navegar a la derecha
	const goToNext = () => {
		if (activeIndex < products.length - displayCount) {
			setActiveIndex(activeIndex + 1);
		}
	};

	// Verificar si los botones de navegación deben estar deshabilitados
	const isPrevDisabled = activeIndex === 0;
	const isNextDisabled = activeIndex >= products.length - displayCount;

	// Verificar si hay productos para mostrar
	if (!products || products.length === 0) {
		return (
			<div className="w-full p-4 text-center">No hay productos disponibles</div>
		);
	}

	return (
		<div className="display-carousel w-full relative py-8">
			<div className="display-carousel__swiper">
				{/* Botón Anterior */}
				<button
					type="button"
					className={`display-carousel__data-swiper-prev p-2 absolute left-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full shadow-md transition-all duration-300 ${
						isPrevDisabled ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg"
					}`}
					onClick={goToPrev}
					disabled={isPrevDisabled}
					aria-label="Anterior"
					style={{
						backgroundColor: colors.secondary.white,
						color: colors.primary.blue,
						border: `1px solid ${colors.primary.yellow}`,
					}}
				>
					<span className="sr-only">Anterior</span>
					<svg
						className="w-6 h-6"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M15 18L9 12L15 6" />
					</svg>
				</button>

				{/* Contenedor de productos */}
				<div className="display-carousel__data-swiper overflow-hidden mx-8">
					<div
						className="swiper-wrapper flex transition-transform duration-300 ease-out"
						style={{
							transform: `translateX(-${activeIndex * (100 / displayCount)}%)`,
						}}
					>
						{products.map((product, index) => {
							// Verificar si es una tarjeta promocional
							if (product.promotionCard) {
								return (
									<div
										key={`promo-${index}`}
										className="swiper-slide flex-shrink-0"
										style={{width: `${100 / displayCount}%`}}
									>
										<div
											className="display-carousel__promo-card rounded-lg shadow-lg h-full relative overflow-hidden transition-all duration-300 hover:shadow-xl m-2"
											style={{
												background: colors.secondary.white,
												borderTop: `3px solid ${colors.primary.yellow}`,
												borderBottom: `1px solid ${colors.primary.yellow}`,
											}}
										>
											{/* Patrón de hexágonos en el fondo */}
											<div className="absolute inset-0 overflow-hidden">
												{Array.from({length: 4}).map((_, i) => (
													<svg
														key={i}
														className="absolute opacity-20"
														style={{
															width: "30px",
															height: "30px",
															left: `${Math.random() * 100}%`,
															top: `${Math.random() * 100}%`,
														}}
														viewBox="0 0 100 100"
													>
														<polygon
															points="50 0, 93.3 25, 93.3 75, 50 100, 6.7 75, 6.7 25"
															fill={colors.secondary.gray}
														/>
													</svg>
												))}
											</div>

											<div className="display-carousel__promotion-card-wrap h-full">
												<div className="display-carousel__promotion-card p-6 flex flex-col h-full relative">
													<div className="display-carousel__promotion-card-text">
														{/* Categoría badge - Diseño minimalista */}
														<span
															className="inline-block py-1 px-2 text-xs font-medium mb-3"
															style={{
																color: colors.primary.blue,
																borderLeft: `2px solid ${colors.primary.yellow}`,
															}}
														>
															Promoción
														</span>

														<div className="display-carousel__promotion-card-text-wrap mb-6">
															<div className="display-carousel__promotion-card-name-wrap mb-2">
																{/* Título con subrayado minimalista */}
																<div
																	className="font-bold text-xl mb-2 relative inline-block"
																	style={{color: colors.primary.darkBlue}}
																>
																	{product.promotionCard.title}
																	<div
																		className="absolute -bottom-1 left-0 h-0.5 w-12"
																		style={{background: colors.primary.yellow}}
																	/>
																</div>
															</div>
															<p
																className="text-base"
																style={{
																	color: colors.primary.blue,
																	lineHeight: "1.6",
																}}
															>
																{product.promotionCard.description}
															</p>
														</div>

														{/* Botón con estilo minimalista y elegante */}
														<div className="display-carousel__cta-wrap mt-auto">
															<a
																className="relative overflow-hidden group py-2 px-4 rounded flex items-center transition-all duration-300 transform hover:-translate-y-[2px]"
																href={product.promotionCard.ctaLink}
																target="_blank"
																rel="noopener noreferrer"
																style={{
																	backgroundColor: colors.primary.blue,
																	color: colors.secondary.white,
																}}
															>
																<span className="transition-transform duration-300">
																	{product.promotionCard.ctaText}
																</span>

																{/* Flecha animada elegantemente */}
																<svg
																	className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
																	viewBox="0 0 24 24"
																	fill="none"
																	stroke="currentColor"
																	strokeWidth="2"
																>
																	<path d="M5 12h14M12 5l7 7-7 7"></path>
																</svg>

																{/* Sombra elegante en hover */}
																<div
																	className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
																	style={{
																		boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
																		transform: "scale(1.05)",
																		pointerEvents: "none",
																	}}
																/>
															</a>
														</div>
													</div>
													<div className="display-carousel__promotion-card-image mt-6">
														<img
															src={product.promotionCard.image}
															alt={product.promotionCard.title}
															className="object-contain w-full max-h-60 transition-transform duration-500 hover:scale-105"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							} else {
								// Verificar si es un producto normal
								return (
									<div
										key={`product-${index}`}
										className="swiper-slide flex-shrink-0"
										style={{width: `${100 / displayCount}%`}}
									>
										<div
											className="display-carousel__item m-2 rounded-lg shadow-lg overflow-hidden relative transition-all duration-300 hover:shadow-xl flex flex-col h-full"
											style={{
												background: colors.secondary.white,
												borderTop: `3px solid ${colors.primary.yellow}`,
											}}
										>
											{/* Patrón de hexágonos en el fondo */}
											<div className="absolute inset-0 overflow-hidden">
												{Array.from({length: 3}).map((_, i) => (
													<svg
														key={i}
														className="absolute opacity-10"
														style={{
															width: "30px",
															height: "30px",
															left: `${Math.random() * 100}%`,
															top: `${Math.random() * 100}%`,
														}}
														viewBox="0 0 100 100"
													>
														<polygon
															points="50 0, 93.3 25, 93.3 75, 50 100, 6.7 75, 6.7 25"
															fill={colors.secondary.gray}
														/>
													</svg>
												))}
											</div>

											{/* Badge (si existe) */}
											{product.badge && (
												<div className="display-carousel__badge absolute top-2 right-2 z-10">
													<span
														className="text-xs font-bold py-1 px-2 rounded-full"
														style={{
															backgroundColor: colors.primary.yellow,
															color: colors.primary.darkBlue,
														}}
													>
														{product.badge}
													</span>
												</div>
											)}

											{/* Categoría badge - Diseño minimalista */}
											<div className="px-4 pt-4 relative">
												<span
													className="inline-block py-1 px-2 text-xs font-medium mb-2"
													style={{
														color: colors.primary.blue,
														borderLeft: `2px solid ${colors.primary.yellow}`,
													}}
												>
													{product.category || "Pantalla Interactiva"}
												</span>
											</div>

											{/* Imagen del producto */}
											<div className="display-carousel__image-wrap relative px-4 h-48 flex items-center justify-center mb-4">
												<a
													href={product.href || "#"}
													className="block w-full h-full"
												>
													<img
														src={product.image || "/api/placeholder/216/216"}
														alt={product.name || "Producto"}
														className="object-contain w-full h-full transition-transform duration-500 hover:scale-105"
													/>
												</a>
											</div>

											{/* Contenido del producto */}
											<div className="display-carousel__content flex-1 flex flex-col px-6 pb-4 relative">
												{/* Nombre del producto */}
												<div className="display-carousel__name mb-3">
													<div
														className="font-bold text-lg relative inline-block"
														style={{color: colors.primary.darkBlue}}
													>
														{product.name || "Producto sin nombre"}
														<div
															className="absolute -bottom-1 left-0 h-0.5 w-10"
															style={{background: colors.primary.yellow}}
														/>
													</div>
												</div>

												{/* Descripción corta si existe */}
												{product.shortDescription && (
													<div className="display-carousel__description mb-3">
														<p
															className="text-sm"
															style={{
																color: colors.primary.blue,
																lineHeight: "1.6",
															}}
														>
															{product.shortDescription}
														</p>
													</div>
												)}

												{/* Info del producto (tamaños) */}
												{product.sizes && product.sizes.length > 0 && (
													<div className="display-carousel__info mb-3">
														<div className="option-selector">
															<div
																className="option-selector__size-name text-sm mb-1"
																style={{color: colors.primary.blue}}
															>
																Tamaño disponible:{" "}
																<strong>
																	{product.selectedSize || product.sizes[0]}
																</strong>
															</div>
															<div className="option-selector__wrap flex flex-wrap gap-1">
																{product.sizes.map((size, sizeIndex) => (
																	<span
																		key={sizeIndex}
																		className={`size-option inline-block px-2 py-1 text-xs border rounded ${
																			product.selectedSize === size
																				? "border-transparent"
																				: "border-gray-300 text-gray-700 hover:border-gray-400"
																		}`}
																		style={
																			product.selectedSize === size
																				? {
																						backgroundColor:
																							colors.primary.yellow,
																						color: colors.primary.darkBlue,
																				  }
																				: {}
																		}
																	>
																		{size}
																	</span>
																))}
															</div>
														</div>
													</div>
												)}

												{/* Especificaciones clave si existen */}
												{product.keySpecs && product.keySpecs.length > 0 && (
													<div className="display-carousel__specs mb-3">
														<h4
															className="text-sm font-medium mb-1"
															style={{color: colors.primary.darkBlue}}
														>
															Especificaciones clave:
														</h4>
														<ul
															className="text-xs list-disc pl-4"
															style={{color: colors.primary.blue}}
														>
															{product.keySpecs.map((spec, index) => (
																<li key={index}>{spec}</li>
															))}
														</ul>
													</div>
												)}

												{/* Rating si existe */}
												{product.rating && (
													<div className="display-carousel__rating mb-3">
														<span className="rating flex items-center">
															<span className="rating__star-list flex">
																{[1, 2, 3, 4, 5].map((star, i) => (
																	<span
																		key={i}
																		className="rating__star-item mr-1"
																	>
																		<svg
																			className="w-4 h-4"
																			fill={
																				i < Math.floor(product.rating)
																					? "currentColor"
																					: "none"
																			}
																			stroke="currentColor"
																			viewBox="0 0 24 24"
																			style={{
																				color:
																					i < Math.floor(product.rating)
																						? colors.primary.yellow
																						: "#E5E7EB",
																			}}
																		>
																			<path
																				strokeLinecap="round"
																				strokeLinejoin="round"
																				strokeWidth="2"
																				d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
																			/>
																		</svg>
																	</span>
																))}
															</span>
															<strong
																className="rating__point ml-2 text-sm font-bold"
																style={{color: colors.primary.darkBlue}}
															>
																{product.rating}
															</strong>
															<em className="rating__review-count ml-1 text-xs text-gray-500">
																({product.reviewCount || 0})
															</em>
														</span>
													</div>
												)}

												{/* CTA - Botón estilo BeeCard */}
												<div className="display-carousel__cta-wrap mt-auto pt-3 flex justify-end">
													<a
														className="relative overflow-hidden group py-2 px-4 rounded flex items-center transition-all duration-300 transform hover:-translate-y-[2px]"
														href={product.href || "#"}
														style={{
															backgroundColor: colors.primary.blue,
															color: colors.secondary.white,
														}}
													>
														<span className="transition-transform duration-300">
															Más información
														</span>

														{/* Flecha animada elegantemente */}
														<svg
															className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth="2"
														>
															<path d="M5 12h14M12 5l7 7-7 7"></path>
														</svg>

														{/* Sombra elegante en hover */}
														<div
															className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
															style={{
																boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
																transform: "scale(1.05)",
																pointerEvents: "none",
															}}
														/>
													</a>
												</div>
											</div>

											{/* Borde inferior sutil para mantener la elegancia */}
											<div
												className="h-1 w-full"
												style={{
													background: colors.primary.yellow,
													boxShadow: `0 1px 3px ${colors.primary.darkBlue}15`,
												}}
											/>
										</div>
									</div>
								);
							}
						})}
					</div>
				</div>

				{/* Botón Siguiente */}
				<button
					type="button"
					className={`display-carousel__data-swiper-next p-2 absolute right-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full shadow-md transition-all duration-300 ${
						isNextDisabled ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg"
					}`}
					onClick={goToNext}
					disabled={isNextDisabled}
					aria-label="Siguiente"
					style={{
						backgroundColor: colors.secondary.white,
						color: colors.primary.blue,
						border: `1px solid ${colors.primary.yellow}`,
					}}
				>
					<span className="sr-only">Siguiente</span>
					<svg
						className="w-6 h-6"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M9 18L15 12L9 6" />
					</svg>
				</button>
			</div>

			{/* Indicadores de navegación para móvil */}
			<div className="display-carousel__indicators flex justify-center mt-4 lg:hidden">
				{Array.from({length: Math.ceil(products.length / displayCount)}).map(
					(_, index) => (
						<button
							key={index}
							className="w-2 h-2 mx-1 rounded-full transition-all duration-300"
							onClick={() => setActiveIndex(index * displayCount)}
							aria-label={`Ir a página ${index + 1}`}
							style={
								index === Math.floor(activeIndex / displayCount)
									? {backgroundColor: colors.primary.yellow}
									: {backgroundColor: colors.secondary.gray, opacity: 0.5}
							}
						/>
					)
				)}
			</div>
		</div>
	);
};

// Definir PropTypes para validación
InteractiveDisplayCarousel.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.oneOfType([
			PropTypes.shape({
				name: PropTypes.string,
				href: PropTypes.string,
				image: PropTypes.string,
				shortDescription: PropTypes.string,
				selectedSize: PropTypes.string,
				sizes: PropTypes.arrayOf(PropTypes.string),
				keySpecs: PropTypes.arrayOf(PropTypes.string),
				rating: PropTypes.number,
				reviewCount: PropTypes.number,
				badge: PropTypes.string,
				category: PropTypes.string,
			}),
			PropTypes.shape({
				promotionCard: PropTypes.shape({
					title: PropTypes.string.isRequired,
					description: PropTypes.string.isRequired,
					ctaText: PropTypes.string.isRequired,
					ctaLink: PropTypes.string.isRequired,
					image: PropTypes.string.isRequired,
				}).isRequired,
			}),
		])
	),
};

export default InteractiveDisplayCarousel;
