const BeeCard = ({
	title = "Bee Solutions",
	description = "Transformamos tu negocio con soluciones innovadoras",
	buttonText = "Conocer más",
	imageUrl = "/api/placeholder/400/320",
	category = "Servicios",
	featured = false,
}) => {
	// Colores corporativos
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

	return (
		<div
			className={`max-w-sm rounded-lg overflow-hidden shadow-lg relative transition-all duration-300 hover:shadow-xl
      }`}
			style={{
				background: colors.secondary.white,
				borderTop: `3px solid ${colors.primary.yellow}`,
			}}
		>
			{/* Patrón de hexágonos en el fondo - reducido para menor distracción */}
			<div className="absolute inset-0 overflow-hidden">
				{Array.from({length: 6}).map((_, index) => (
					<svg
						key={index}
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

			{/* Contenido de la tarjeta */}
			<div className="relative px-6 py-4">
				{/* Categoría badge - Diseño más minimalista */}
				<span
					className="inline-block py-1 px-2 text-xs font-medium mb-3"
					style={{
						color: colors.primary.blue,
						borderLeft: `2px solid ${colors.primary.yellow}`,
					}}
				>
					{category}
				</span>

				{/* Imagen con borde superior sutil */}
				<div className="mb-4 overflow-hidden">
					<img
						className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
						src={imageUrl}
						alt={title}
					/>
				</div>

				{/* Título con subrayado minimalista */}
				<div
					className="font-bold text-xl mb-2 relative inline-block"
					style={{color: colors.primary.darkBlue}}
				>
					{title}
					<div
						className="absolute -bottom-1 left-0 h-0.5 w-12"
						style={{background: colors.primary.yellow}}
					/>
				</div>

				{/* Descripción con estilo minimalista */}
				<p
					className="text-base my-4"
					style={{color: colors.primary.blue, lineHeight: "1.6"}}
				>
					{description}
				</p>
			</div>

			{/* Botón con estilo minimalista y elegante - CORREGIDO */}
			<div className="px-6 py-4 flex justify-end">
				<button
					className="relative overflow-hidden group py-2 px-4 rounded flex items-center transition-all duration-300 transform hover:-translate-y-[2px]"
					style={{
						backgroundColor: colors.primary.blue,
						color: colors.secondary.white,
					}}
				>
					<span className="transition-transform duration-300">
						{buttonText}
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
				</button>
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
	);
};

export default BeeCard;

