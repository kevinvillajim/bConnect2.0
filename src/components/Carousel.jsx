import {useState, useEffect, useRef} from "react";
import {Play, Pause, ChevronLeft, ChevronRight} from "lucide-react";

const SamsungCarousel = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(true);
	const [progress, setProgress] = useState(0);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
	const progressInterval = useRef(null);
	const slideDuration = 5000; // 5 segundos por slide

	const slides = [
		{
			id: 1,
			title: "BESPOKE AI",
			description: "Simplifica tu vida, disfruta de tu hogar",
			cta: "Más información",
			ctaLink: "https://www.samsung.com/latin/home-appliances/bespoke-home/",
			textColor: "white",
			contentPosition: "top-[42%]",
			bgImage:
				"https://images.samsung.com/is/image/samsung/assets/latin/2025-bespoke-home-n01-kv-latam-pc.jpg",
			mobileBgImage:
				"https://images.samsung.com/is/image/samsung/assets/latin/2025-bespoke-home-n01-kv-latam-mo.jpg",
		},
		{
			id: 2,
			title: "Galaxy S25 Ultra",
			cta: "Más información",
			ctaLink: "/latin/smartphones/galaxy-s25-ultra/",
			textColor: "white",
			bgImage:
				"https://images.samsung.com/is/image/samsung/assets/latin/home/18-02/HOME_P3_Main-KV_1440x640_pc_LTR_ticker.jpg",
			mobileBgImage:
				"https://images.samsung.com/is/image/samsung/assets/latin/home/18-02/HOME_P3_Main-KV_720x1080_mo.jpg",
		},
		{
			id: 3,
			title: "Cómpralo y Sorpréndete",
			description: "Aplican términos y condiciones.",
			cta: "Comprar ahora",
			ctaLink: "https://slatin.shop/BuyandTry",
			textColor: "white",
			contentPosition: "top-[50%]",
			bgImage:
				"https://images.samsung.com/is/image/samsung/assets/latin/kv/Buy-Try-KV-PC.jpg",
			mobileBgImage:
				"https://images.samsung.com/is/image/samsung/assets/latin/kv/BUY_TRY_720x1080.jpg",
		},
		{
			id: 4,
			title: "Serie Galaxy Tab S10",
			description: "El nuevo estándar de tabletas premium",
			cta: "Más información",
			ctaLink:
				"/latin/tablets/galaxy-tab-s/galaxy-tab-s10-ultra-gray-256gb-sm-x920nzadgto/",
			textColor: "black",
			contentPosition: "top-[50%]",
			bgImage:
				"https://images.samsung.com/is/image/samsung/assets/latin/New-Desktop_GalaxTabS10.jpg",
			mobileBgImage:
				"https://images.samsung.com/is/image/samsung/assets/latin/New-Mobile_GalaxTabS10.jpg",
		},
		{
			id: 5,
			title: "Galaxy A56 | A36 | A26",
			cta: "Comprar ahora",
			ctaLink: "https://shop.samsung.com/latin/galaxy-serie-a/",
			textColor: "black",
			contentPosition: "top-[50%]",
			bgImage:
				"https://images.samsung.com/is/image/samsung/assets/latin/kv/Galaxy_A26_launch_PC_3.jpg",
			mobileBgImage:
				"https://images.samsung.com/is/image/samsung/assets/latin/kv/Galaxy_A26_launch_MO_4.jpg",
		},
		{
			id: 6,
			eyebrow: "Asombroso con promociones increíbles",
			title: "3 de abril | 8PM (PA)",
			cta: "Comprar ahora",
			ctaLink: "//shop.samsung.com/latin/live-commerce",
			textColor: "white",
			contentPosition: "top-[50%]",
			bgImage:
				"https://images.samsung.com/is/image/samsung/assets/latin/Live_shop_PC_2.jpg",
			mobileBgImage:
				"https://images.samsung.com/is/image/samsung/assets/latin/Live_shop_MO_2.jpg",
		},
	];

	// Manejar cambio de tamaño de ventana
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Iniciar o detener el progreso y el carrusel automático
	useEffect(() => {
		if (isPlaying) {
			startProgressInterval();
		} else {
			clearInterval(progressInterval.current);
		}

		return () => clearInterval(progressInterval.current);
	}, [isPlaying, activeIndex]);

	const startProgressInterval = () => {
		clearInterval(progressInterval.current);

		progressInterval.current = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					nextSlide();
					return 0;
				}
				return prev + 100 / (slideDuration / 100);
			});
		}, 100);
	};

	const goToSlide = (index) => {
		setActiveIndex(index);
		setProgress(0);
		if (isPlaying) {
			clearInterval(progressInterval.current);
			startProgressInterval();
		}
	};

	const nextSlide = () => {
		setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
		setProgress(0); //
	};

	const prevSlide = () => {
		setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
		setProgress(0);
	};

	const togglePlayPause = () => {
		setIsPlaying(!isPlaying);
	};

	return (
		<div className="relative w-full h-full overflow-hidden bg-gray-900">
			{/* Carrusel */}
			<div
				className="relative w-full"
				style={{height: isMobile ? "700px" : "650px"}}
			>
				{slides.map((slide, index) => (
					<div
						key={slide.id}
						className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
							activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
						}`}
					>
						{/* Fondo de imagen */}
						<div className="relative w-full h-full overflow-hidden">
							<img
								src={isMobile ? slide.mobileBgImage : slide.bgImage}
								alt={slide.title}
								className="object-cover w-full h-full"
							/>

							{/* Overlay para texto más legible */}
							<div className="absolute inset-0 bg-black bg-opacity-20"></div>
						</div>

						{/* Contenido del slide */}
						<div
							className={`absolute z-20 ${
								isMobile
									? `${
											slide.contentPositionMobile || "bottom-12 left-0 right-0"} text-center px-4`
									: `${slide.contentPosition || "top-[42%]"} left-20 max-w-lg `
							}`}
						>
							{slide.eyebrow && (
								<p
									className={`text-sm font-medium mb-2 text-${slide.textColor}`}
								>
									{slide.eyebrow}
								</p>
							)}
							<h2
								className={`text-3xl md:text-4xl font-bold mb-2 text-${slide.textColor}`}
							>
								{slide.title}
							</h2>
							{slide.description && (
								<p className={`text-lg mb-4 text-${slide.textColor}`}>
									{slide.description}
								</p>
							)}
							<div className="mt-4">
								<a
									href={slide.ctaLink}
									className={`inline-block px-6 py-2 rounded-full ${
										slide.textColor === "white"
											? "bg-white text-black"
											: "bg-black text-white"
									} font-medium text-sm transition hover:opacity-90`}
								>
									{slide.cta}
								</a>
							</div>
						</div>
					</div>
				))}

				{/* Navegación lateral */}
				<button
					onClick={prevSlide}
					className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white bg-opacity-30 flex items-center justify-center hover:bg-opacity-50 transition-all"
					aria-label="Slide anterior"
				>
					<ChevronLeft className="text-white" size={24} />
				</button>

				<button
					onClick={nextSlide}
					className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white bg-opacity-30 flex items-center justify-center hover:bg-opacity-50 transition-all"
					aria-label="Siguiente slide"
				>
					<ChevronRight className="text-white" size={24} />
				</button>
			</div>

			{/* Barra de controles e indicadores */}
			<div className="absolute bottom-0 left-0 right-0 z-30 bg-black bg-opacity-10 px-4 py-2">
				<div className="flex items-center justify-between">
					{/* Botón de Play/Pause */}
					<button
						onClick={togglePlayPause}
						className="p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition"
						aria-label={isPlaying ? "Pausar carrusel" : "Reproducir carrusel"}
					>
						{isPlaying ? (
							<Pause className="text-white" size={isMobile ? 16 : 20} />
						) : (
							<Play className="text-white" size={isMobile ? 16 : 20} />
						)}
					</button>

					{/* Indicadores de slide */}
					<div className="flex-1 flex items-center justify-center">
						{isMobile ? (
							// Versión móvil - puntos
							<div className="flex space-x-2">
								{slides.map((_, index) => (
									<button
										key={index}
										onClick={() => goToSlide(index)}
										className={`w-4 h-4 transition-all ${
											activeIndex === index ? "bg-white" : "bg-white opacity-40"
										} hexagon`}
										aria-label={`Ir a slide ${index + 1}`}
									/>
								))}
							</div>
						) : (
							// Versión desktop - barras de progreso
							<div className="flex items-center w-full max-w-2xl mx-auto space-x-2">
								{slides.map((slide, index) => (
									<div
										key={index}
										className="relative flex-1 group"
										onMouseEnter={() => !isPlaying && goToSlide(index)}
									>
										{/* Tooltip del título en hover */}
										<div className="absolute bottom-full left-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black bg-opacity-70 px-2 py-1 rounded text-xs text-white">
											{slide.title}
										</div>

										{/* Barra de progreso */}
										<div className="h-1 bg-white bg-opacity-40 rounded overflow-hidden cursor-pointer">
											{activeIndex === index && (
												<div
													className="h-full bg-white transition-all"
													style={{width: `${progress}%`}}
												/>
											)}
										</div>
									</div>
								))}
							</div>
						)}
					</div>

					{/* Espaciado para equilibrar el layout */}
					<div className="w-8" />
				</div>
			</div>
		</div>
	);
};

export default SamsungCarousel;
