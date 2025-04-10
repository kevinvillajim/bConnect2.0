import {useState, useEffect} from "react";
import PropTypes from "prop-types";

const SamsungProductCarousel = ({products = []}) => {
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
		<div className="lineup-card w-full relative">
			<div className="lineup-card__swiper">
				{/* Botón Anterior */}
				<button
					type="button"
					className={`lineup-card__data-swiper-prev p-2 absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md ${
						isPrevDisabled
							? "opacity-50 cursor-not-allowed"
							: "hover:bg-gray-100"
					}`}
					onClick={goToPrev}
					disabled={isPrevDisabled}
					aria-label="Anterior"
				>
					<span className="sr-only">Anterior</span>
					<svg
						className="w-6 h-6"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M15 18L9 12L15 6"
							stroke="black"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>

				{/* Contenedor de productos */}
				<div className="lineup-card__data-swiper overflow-hidden">
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
										<div className="lineup-card__item-promotion-card bg-white m-2 rounded-lg shadow h-full relative overflow-hidden">
											<div className="lineup-card__promotion-card-wrap h-full">
												<div className="lineup-card__promotion-card p-6 flex flex-col h-full">
													<div className="lineup-card__promotion-card-text">
														<div className="lineup-card__promotion-card-text-wrap mb-6">
															<div className="lineup-card__promotion-card-name-wrap mb-2">
																<h3 className="text-xl font-bold">
																	{product.promotionCard.title}
																</h3>
															</div>
															<p className="text-gray-600">
																{product.promotionCard.description}
															</p>
														</div>
														<div className="lineup-card__cta-wrap mt-auto">
															<a
																className="cta cta--contained bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition-colors flex items-center"
																href={product.promotionCard.ctaLink}
																target="_blank"
																rel="noopener noreferrer"
															>
																{product.promotionCard.ctaText}
																<svg
																	className="ml-2 w-4 h-4"
																	viewBox="0 0 24 24"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		d="M7 17L17 7M17 7H7M17 7V17"
																		stroke="currentColor"
																		strokeWidth="2"
																		strokeLinecap="round"
																		strokeLinejoin="round"
																	/>
																</svg>
															</a>
														</div>
													</div>
													<div className="lineup-card__promotion-card-image mt-6">
														<img
															src={product.promotionCard.image}
															alt={product.promotionCard.title}
															className="object-contain w-full max-h-60"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							}

							// Verificar si es un producto normal
							return (
								<div
									key={`product-${index}`}
									className="swiper-slide flex-shrink-0"
									style={{width: `${100 / displayCount}%`}}
								>
									<div className="lineup-card__item bg-white m-2 rounded-lg shadow p-4">
										{/* Badge (si existe) */}
										{product.badge && (
											<div className="lineup-card__badge absolute top-2 left-2">
												<span className="badge-icon badge-icon--label badge-icon--bg-color-blue text-xs font-bold py-1 px-2 rounded text-white bg-blue-500">
													{product.badge}
												</span>
											</div>
										)}

										{/* Imagen del producto */}
										<div className="lineup-card__image-wrap relative h-48 flex items-center justify-center mb-4">
											<a
												href={product.href || "#"}
												className="block w-full h-full"
											>
												<img
													src={product.image || "/api/placeholder/216/216"}
													alt={product.name || "Producto"}
													className="object-contain w-full h-full"
												/>
											</a>
										</div>

										{/* Contenido del producto */}
										<div className="lineup-card__content">
											{/* Nombre del producto */}
											<div className="lineup-card__name mb-2">
												<a
													href={product.href || "#"}
													className="text-lg font-medium text-gray-900 hover:text-blue-500"
												>
													{product.name || "Producto sin nombre"}
												</a>
											</div>

											{/* Info del producto (colores) */}
											{product.colors && product.colors.length > 0 && (
												<div className="lineup-card__info mb-3">
													<div className="option-selector">
														<div className="option-selector__color-name text-sm text-gray-600 mb-1">
															Color:{" "}
															<strong>
																{product.selectedColor ||
																	product.colors[0].name}
															</strong>
														</div>
														<div className="option-selector__wrap flex">
															{product.colors.map((color, colorIndex) => (
																<span
																	key={colorIndex}
																	className={`mr-2 ${
																		product.selectedColor === color.name
																			? "ring-2 ring-black"
																			: ""
																	}`}
																>
																	<span className="option-selector__color">
																		<span
																			className="inline-block w-6 h-6 rounded-full border border-gray-300"
																			style={{
																				backgroundColor: color.hex || "#cccccc",
																			}}
																		></span>
																	</span>
																</span>
															))}
														</div>
													</div>
												</div>
											)}

											{/* Rating */}
											{product.rating && (
												<div className="lineup-card__rating mb-3">
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
																		color={
																			i < Math.floor(product.rating)
																				? "#FFB400"
																				: "#E5E7EB"
																		}
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
														<strong className="rating__point ml-2 text-sm font-bold">
															{product.rating}
														</strong>
														<em className="rating__review-count ml-1 text-xs text-gray-500">
															({product.reviewCount || 0})
														</em>
													</span>
												</div>
											)}

											{/* CTA */}
											<div className="lineup-card__cta-wrap">
												<div className="lineup-card__cta">
													<a
														className="cta cta--outlined inline-block border border-black text-black py-2 px-4 rounded hover:bg-black hover:text-white transition-colors"
														href={product.href || "#"}
													>
														Más información
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/* Botón Siguiente */}
				<button
					type="button"
					className={`lineup-card__data-swiper-next p-2 absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md ${
						isNextDisabled
							? "opacity-50 cursor-not-allowed"
							: "hover:bg-gray-100"
					}`}
					onClick={goToNext}
					disabled={isNextDisabled}
					aria-label="Siguiente"
				>
					<span className="sr-only">Siguiente</span>
					<svg
						className="w-6 h-6"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9 18L15 12L9 6"
							stroke="black"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

// Definir PropTypes para validación
SamsungProductCarousel.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.oneOfType([
			PropTypes.shape({
				name: PropTypes.string,
				href: PropTypes.string,
				image: PropTypes.string,
				selectedColor: PropTypes.string,
				colors: PropTypes.arrayOf(
					PropTypes.shape({
						name: PropTypes.string.isRequired,
						hex: PropTypes.string.isRequired,
					})
				),
				rating: PropTypes.number,
				reviewCount: PropTypes.number,
				badge: PropTypes.string,
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

// Ejemplo de uso
const ProductCarouselExample = () => {
	const sampleProducts = [
		{
			name: "Galaxy Tab S9 FE (WiFi)",
			href: "/tablets/galaxy-tab-s9-fe",
			image: "/api/placeholder/216/216",
			selectedColor: "Light Green",
			colors: [
				{name: "Light Green", hex: "#c1d1a6"},
				{name: "Gray", hex: "#808080"},
				{name: "Silver", hex: "#c0c0c0"},
			],
			rating: 4.8,
			reviewCount: 174,
			badge: null,
		},
		{
			name: "Galaxy Tab S9 FE+ (WiFi)",
			href: "/tablets/galaxy-tab-s9-fe-plus",
			image: "/api/placeholder/216/216",
			selectedColor: "Light Green",
			colors: [
				{name: "Light Green", hex: "#c1d1a6"},
				{name: "Gray", hex: "#808080"},
				{name: "Silver", hex: "#c0c0c0"},
			],
			rating: 4.7,
			reviewCount: 69,
			badge: null,
		},
		{
			name: "Galaxy Tab S9 Ultra (Wi-Fi)",
			href: "/tablets/galaxy-tab-s9-ultra",
			image: "/api/placeholder/216/216",
			selectedColor: "Grafito",
			colors: [{name: "Grafito", hex: "#545356"}],
			rating: 5.0,
			reviewCount: 28,
			badge: "Nuevo",
		},
		{
			name: "Galaxy Tab S9+ (Wi-Fi)",
			href: "/tablets/galaxy-tab-s9-plus",
			image: "/api/placeholder/216/216",
			selectedColor: "Grafito",
			colors: [{name: "Grafito", hex: "#545356"}],
			rating: 4.8,
			reviewCount: 44,
			badge: "Nuevo",
		},
		{
			name: "Galaxy Tab S9 (Wi-Fi)",
			href: "/tablets/galaxy-tab-s9",
			image: "/api/placeholder/216/216",
			selectedColor: "Grafito",
			colors: [{name: "Grafito", hex: "#545356"}],
			rating: 4.9,
			reviewCount: 54,
			badge: "Nuevo",
		},
		{
			promotionCard: {
				title: "Serie Galaxy Tab S9",
				description:
					"Pre-compra y aprovecha nuestra actualización de almacenamiento especial.",
				ctaText: "Comprar ahora",
				ctaLink: "https://shop.samsung.com/latin/shop/tablets.html",
				image: "/api/placeholder/264/400",
			},
		},
	];

	return (
		<div className="max-w-6xl mx-auto p-4">
			<SamsungProductCarousel products={sampleProducts} />
		</div>
	);
};

export default ProductCarouselExample;
