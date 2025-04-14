import React, {useState} from "react";

// Componente de carrusel simplificado al máximo para garantizar funcionamiento
const SamsungStyleCarousel = ({slides = []}) => {
	const [activeIndex, setActiveIndex] = useState(0);

	// Función para cambiar slides
	const handleSlideChange = (index) => {
		setActiveIndex(index);
	};

	return (
		<div className="w-full">
			{/* Botones de navegación */}
			<div className="flex justify-center space-x-4 mb-4">
				{slides.map((slide, index) => (
					<button
						key={index}
						className={`px-4 py-2 text-lg font-medium border-b-2 ${
							activeIndex === index
								? "border-black text-black"
								: "border-transparent text-gray-500"
						}`}
						onClick={() => handleSlideChange(index)}
					>
						{slide.title}
					</button>
				))}
			</div>

			{/* Contenedor del slide actual */}
			<div className="w-full relative" style={{height: "580px"}}>
				{slides.map((slide, index) => (
					<div
						key={index}
						className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${
							activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
						}`}
					>
						{/* Contenido del slide */}
						<div className="absolute z-20 p-8 max-w-lg">
							<h2 className="text-3xl font-bold mb-4">{slide.headline}</h2>
							<p className="text-lg mb-6">{slide.description}</p>

							{slide.cta && (
								<a
									className="bg-black text-white px-6 py-3 inline-flex items-center rounded-full"
									href={slide.cta.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									{slide.cta.text}
									<svg className="ml-2 w-4 h-4" viewBox="0 0 24 24">
										<path
											d="M5 3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7H5V5h7V3H5zm12 1h4v4h-2V6.59L10.59 15 9 13.41 17.41 5H15V3z"
											fill="currentColor"
										/>
									</svg>
								</a>
							)}
						</div>

						{/* Imagen de fondo */}
						<div className="w-full h-full">
							<img
								className="object-cover w-full h-full"
								src={slide.imageUrl}
								alt={slide.headline}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

// Componente de ejemplo con datos de muestra
const CarrouselSimple = () => {
	const sampleSlides = [
		{
			title: "Bespoke AI",
			headline: "Bespoke AI™",
			description:
				"Las convenientes soluciones de AI te brindan más tiempo libre y más ahorro de energía.",
			cta: {
				text: "Comprar ahora",
				link: "https://shop.samsung.com/latin/bespoke-ai",
			},
			imageUrl:
				"https://www.audiovideosaladejuntas.com/images/pizarron/banner.jpg",
		},
		{
			title: "Galaxy S24",
			headline: "Galaxy S24 Ultra",
			description:
				"Experimenta el poder de Galaxy AI con nuestra última innovación en smartphones.",
			cta: {
				text: "Descubrir más",
				link: "https://www.samsung.com/galaxy-s24",
			},
			imageUrl:
				"https://t4.ftcdn.net/jpg/02/69/15/39/360_F_269153974_8x5Mbf1vYy67OKDq7mArqXN5gZvixMnw.jpg",
		},
		{
			title: "Neo QLED",
			headline: "Neo QLED 8K",
			description:
				"Una experiencia visual sin precedentes con la tecnología Quantum Matrix.",
			cta: {
				text: "Ver detalles",
				link: "https://www.samsung.com/tvs/qled-tv",
			},
			imageUrl:
				"https://www.ricoh-americalatina.com/media-library/pantallas-interactivas-1.jpg?id=32328186&width=1000&quality=95",
		},
		{
			title: "Electrodomésticos",
			headline: "Electrodomésticos Inteligentes",
			description:
				"Conecta y controla tu hogar con nuestra línea de electrodomésticos SmartThings.",
			cta: {
				text: "Explorar",
				link: "https://www.samsung.com/home-appliances",
			},
			imageUrl:
				"https://concepto.de/wp-content/uploads/2014/08/tecnologia-e1551386726435.jpg",
		},
	];

	return (
		<div className="max-w-full mx-auto">
			<SamsungStyleCarousel slides={sampleSlides} />
		</div>
	);
};

export default CarrouselSimple;
