import React from "react";
import InteractiveDisplayCarousel from "./InteractiveDisplayCarousel";

// Colores corporativos consistentes
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

const DisplayCarouselExample = () => {
	// Datos de ejemplo para TL7
	const tl7Products = [
		{
			name: 'Pantalla Interactiva TL7 65"',
			href: "/pantallas/tl7-65",
			image:
				"https://imagedelivery.net/0tt38OLkrSmHRt7hdItWEA/3b5b7bb0-77cf-4068-449d-4b4c6cabd700/public", // Reemplazar con imagen real
			shortDescription:
				'Pantalla interactiva premium de 65" con tecnología táctil ultraprecisa',
			selectedSize: '65"',
			sizes: ['65"', '75"', '86"'],
			keySpecs: [
				"Resolución UHD 4K",
				"Hasta 40 puntos de toque simultáneos",
				"Sistema Android integrado",
				"Vidrio antirreflejo templado de 4mm",
			],
			rating: 4.9,
			reviewCount: 42,
			badge: "Bestseller",
		},
		{
			name: 'Pantalla Interactiva TL7 75"',
			href: "/pantallas/tl7-75",
			image:
				"https://imagedelivery.net/0tt38OLkrSmHRt7hdItWEA/3b5b7bb0-77cf-4068-449d-4b4c6cabd700/public", // Reemplazar con imagen real
			shortDescription:
				'Experiencia inmersiva de 75" para aulas y salas de conferencia',
			selectedSize: '75"',
			sizes: ['65"', '75"', '86"'],
			keySpecs: [
				"Resolución UHD 4K",
				"Hasta 40 puntos de toque simultáneos",
				"Sistema Android integrado",
				"Vidrio antirreflejo templado de 4mm",
			],
			rating: 4.8,
			reviewCount: 36,
			badge: null,
		},
		{
			name: 'Pantalla Interactiva TL7 86"',
			href: "/pantallas/tl7-86",
			image:
				"https://imagedelivery.net/0tt38OLkrSmHRt7hdItWEA/3b5b7bb0-77cf-4068-449d-4b4c6cabd700/public", // Reemplazar con imagen real
			shortDescription:
				'Máxima superficie interactiva de 86" para espacios colaborativos',
			selectedSize: '86"',
			sizes: ['65"', '75"', '86"'],
			keySpecs: [
				"Resolución UHD 4K",
				"Hasta 40 puntos de toque simultáneos",
				"Sistema Android integrado",
				"Vidrio antirreflejo templado de 4mm",
			],
			rating: 5.0,
			reviewCount: 28,
			badge: "Nuevo",
		},
		{
			promotionCard: {
				title: "Serie TL7",
				description:
					"Descubre nuestra línea premium de pantallas interactivas con tecnología táctil de última generación.",
				ctaText: "Conoce más",
				ctaLink: "/series/tl7",
				image:
					"https://imagedelivery.net/0tt38OLkrSmHRt7hdItWEA/3b5b7bb0-77cf-4068-449d-4b4c6cabd700/public", // Reemplazar con imagen real
			},
		},
	];

	// Datos de ejemplo para T7
	const t7Products = [
		{
			name: 'Pantalla Interactiva T7 65"',
			href: "/pantallas/t7-65",
			image: "https://imagedelivery.net/0tt38OLkrSmHRt7hdItWEA/3b5b7bb0-77cf-4068-449d-4b4c6cabd700/public", // Reemplazar con imagen real
			shortDescription: 'Pantalla táctil de 65" ideal para entornos educativos',
			selectedSize: '65"',
			sizes: ['65"', '75"', '86"'],
			keySpecs: [
				"Resolución UHD 4K",
				"20 puntos táctiles",
				"Sistema Android 11",
				"Conectividad inalámbrica avanzada",
			],
			rating: 4.7,
			reviewCount: 51,
			badge: "Popular",
		},
		{
			name: 'Pantalla Interactiva T7 75"',
			href: "/pantallas/t7-75",
			image: "https://imagedelivery.net/0tt38OLkrSmHRt7hdItWEA/3b5b7bb0-77cf-4068-449d-4b4c6cabd700/public", // Reemplazar con imagen real
			shortDescription:
				'Solución interactiva de 75" con excelente relación calidad-precio',
			selectedSize: '75"',
			sizes: ['65"', '75"', '86"'],
			keySpecs: [
				"Resolución UHD 4K",
				"20 puntos táctiles",
				"Sistema Android 11",
				"Conectividad inalámbrica avanzada",
			],
			rating: 4.6,
			reviewCount: 38,
			badge: null,
		},
		{
			name: 'Pantalla Interactiva T7 86"',
			href: "/pantallas/t7-86",
			image: "https://imagedelivery.net/0tt38OLkrSmHRt7hdItWEA/3b5b7bb0-77cf-4068-449d-4b4c6cabd700/public", // Reemplazar con imagen real
			shortDescription:
				'Gran superficie interactiva de 86" para espacios amplios',
			selectedSize: '86"',
			sizes: ['65"', '75"', '86"'],
			keySpecs: [
				"Resolución UHD 4K",
				"20 puntos táctiles",
				"Sistema Android 11",
				"Conectividad inalámbrica avanzada",
			],
			rating: 4.8,
			reviewCount: 32,
			badge: null,
		},
	];

	// Datos de ejemplo para Cámaras con IA
	const camerasProducts = [
		{
			name: "Cámara Inteligente AI-Track",
			href: "/camaras/ai-track",
			image:
				"https://hiraoka.com.pe/media/mageplaza/blog/post/t/i/tipos_de_c_mara_web_y_cu_l_elegir.jpg", // Reemplazar con imagen real
			shortDescription:
				"Cámara con seguimiento inteligente para presentadores y educadores",
			keySpecs: [
				"Seguimiento automático del presentador",
				"Zoom inteligente",
				"Campo visual de 120°",
				"Resolución 4K UHD",
			],
			rating: 4.8,
			reviewCount: 64,
			badge: "Recomendado",
		},
		{
			name: "Cámara Inteligente AI-Conference",
			href: "/camaras/ai-conference",
			image:
				"https://hiraoka.com.pe/media/mageplaza/blog/post/t/i/tipos_de_c_mara_web_y_cu_l_elegir.jpg", // Reemplazar con imagen real
			shortDescription:
				"Solución de videoconferencia con inteligencia artificial",
			keySpecs: [
				"Encuadre automático de participantes",
				"Cancelación de ruido IA",
				"Reconocimiento facial",
				"Conectividad USB-C plug & play",
			],
			rating: 4.9,
			reviewCount: 47,
			badge: "Nuevo",
		},
		{
			name: "Cámara Inteligente AI-Classroom",
			href: "/camaras/ai-classroom",
			image:
				"https://hiraoka.com.pe/media/mageplaza/blog/post/t/i/tipos_de_c_mara_web_y_cu_l_elegir.jpg", // Reemplazar con imagen real
			shortDescription: "Diseñada específicamente para entornos educativos",
			keySpecs: [
				"Detección de estudiantes",
				"Seguimiento múltiple",
				"Integración con plataformas educativas",
				"Análisis de participación",
			],
			rating: 4.7,
			reviewCount: 39,
			badge: null,
		},
		{
			promotionCard: {
				title: "Cámaras con Inteligencia Artificial",
				description:
					"Transforma tus presentaciones y clases con nuestra tecnología de seguimiento inteligente.",
				ctaText: "Descubrir",
				ctaLink: "/camaras-inteligentes",
				image:
					"https://hiraoka.com.pe/media/mageplaza/blog/post/t/i/tipos_de_c_mara_web_y_cu_l_elegir.jpg", 
			},
		},
	];

	// Datos de ejemplo para Soportes
	const standsProducts = [
		{
			name: "Soporte Móvil Simple",
			href: "/soportes/movil-simple",
			image: "https://www.steren.com.ec/media/catalog/product/cache/532829604b379f478db69368d14615cd/image/21204544c/soporte-movil-para-pantallas-de-19-a-83-con-repisa.jpg", // Reemplazar con imagen real
			shortDescription: "Soporte móvil básico para pantallas interactivas",
			selectedSize: "Simple",
			sizes: ["Simple", "Media", "Robusta"],
			keySpecs: [
				'Para pantallas de hasta 75"',
				"Ajuste manual de altura",
				"4 ruedas con freno",
				"Capacidad máxima 80kg",
			],
			rating: 4.5,
			reviewCount: 53,
			badge: null,
		},
		{
			name: "Soporte Móvil Media",
			href: "/soportes/movil-media",
			image: "https://www.steren.com.ec/media/catalog/product/cache/532829604b379f478db69368d14615cd/image/21204544c/soporte-movil-para-pantallas-de-19-a-83-con-repisa.jpg", // Reemplazar con imagen real
			shortDescription:
				"Soporte versátil con ajuste de altura para pantallas de gran formato",
			selectedSize: "Media",
			sizes: ["Simple", "Media", "Robusta"],
			keySpecs: [
				'Para pantallas de hasta 86"',
				"Ajuste eléctrico de altura",
				"Bandeja para accesorios",
				"Capacidad máxima 100kg",
			],
			rating: 4.7,
			reviewCount: 48,
			badge: "Más vendido",
		},
		{
			name: "Soporte Móvil Robusta",
			href: "/soportes/movil-robusta",
			image: "https://www.steren.com.ec/media/catalog/product/cache/532829604b379f478db69368d14615cd/image/21204544c/soporte-movil-para-pantallas-de-19-a-83-con-repisa.jpg", // Reemplazar con imagen real
			shortDescription:
				"Soporte premium con máxima estabilidad y funcionalidad",
			selectedSize: "Robusta",
			sizes: ["Simple", "Media", "Robusta"],
			keySpecs: [
				'Para pantallas de hasta 98"',
				"Ajuste eléctrico con memoria",
				"Compartimento para mini PC",
				"Capacidad máxima 150kg",
			],
			rating: 4.9,
			reviewCount: 36,
			badge: "Premium",
		},
		{
			promotionCard: {
				title: "Soportes Móviles para Pantallas",
				description:
					"Añade movilidad a tus pantallas interactivas con nuestros soportes especializados.",
				ctaText: "Ver opciones",
				ctaLink: "/soportes-moviles",
				image: "https://www.steren.com.ec/media/catalog/product/cache/532829604b379f478db69368d14615cd/image/21204544c/soporte-movil-para-pantallas-de-19-a-83-con-repisa.jpg", // Reemplazar con imagen real
			},
		},
	];

	return (
		<div className="max-w-6xl mx-auto p-4 space-y-16">
			<section>
				<h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
					Pantallas Interactivas TL7
				</h2>
				<p className="text-gray-600 mb-6">
					Nuestra línea premium con tamaños desde 65&quot hasta 86&quot
				</p>
				<InteractiveDisplayCarousel products={tl7Products} />
			</section>

			<section>
				<h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
					Pantallas Interactivas T7
				</h2>
				<p className="text-gray-600 mb-6">
					Serie esencial con excelente desempeño en 65&quot, 75&quot y 86&quot
				</p>
				<InteractiveDisplayCarousel products={t7Products} />
			</section>

			<section>
				<h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
					Cámaras con Inteligencia Artificial
				</h2>
				<p className="text-gray-600 mb-6">
					Soluciones inteligentes para seguimiento y videoconferencias
				</p>
				<InteractiveDisplayCarousel products={camerasProducts} />
			</section>

			<section>
				<h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
					Soportes Móviles para Pantallas
				</h2>
				<p className="text-gray-600 mb-6">
					Añade movilidad a tus pantallas interactivas con diferentes opciones
				</p>
				<InteractiveDisplayCarousel products={standsProducts} />
			</section>
		</div>
	);
};

export default DisplayCarouselExample;
