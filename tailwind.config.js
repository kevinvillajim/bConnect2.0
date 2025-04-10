/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					yellow: "#FECC2B",
					blue: "#28538C",
					darkBlue: "#122C4C",
				},
				secondary: {
					gray: "#A69E95",
					white: "#FFFFFF",
				},
			},
			fontFamily: {
				// Fuentes principales según el manual de marca
				montserrat: ["Montserrat Classic", "sans-serif"],
				helvetica: ["Helvetica", "sans-serif"],
				publicsans: ["Public Sans", "sans-serif"],
				display: ["Righteous", "sans-serif"], // Mantenemos esta para compatibilidad
				sans: ["Montserrat Classic", "Helvetica", "sans-serif"],
			},
			boxShadow: {
				card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
				hover:
					"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
