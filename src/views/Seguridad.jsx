import Header from "../components/Header";
import BannerS from "../components/BannerS";
import Footer from "../components/Footer";
import Rotulo from "../components/Rotulo";
import Card from "../components/Card";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Seguridad() {
	return (
		<>
			<div>
				<a
					id="whatsapp-link"
					href="https://api.whatsapp.com/send?phone=+593962966301&text=Buenas%20tardes,%20deseo%20mas%20informaci%C3%B3n,%20vengo%20desde%20la%20p%C3%A1gina%20web."
					target="_blank"
				>
					<div id="whatsapp-btn">
						<WhatsAppIcon sx={{width: "45px", height: "45px", color: "#fff"}} />
					</div>
				</a>
				<Header />
				<BannerS img="seguridad.jpg" />
				<div
					className="w-[100%] h-[100%] px-[15%] py-[2rem] flex items-center justify-evenly"
					id="seguridad"
				>
					<img className="w-[30%]" src="seguridad-img.jpg" />
					<div className="w-[50%]">
						<p className="font-righteous text-3xl text-[#bf9000]">
							SEGURIDAD ELECTRÓNICA
						</p>
						<p className="font-times text-xl">
							Nuestras cámaras de seguridad ofrecen una{" "}
							<span className="text-[#073763] font-times text-xl bold">
								solución confiable y avanzada
							</span>{" "}
							para proteger tu hogar, negocio o propiedad. Diseñadas con
							tecnología de vanguardia. Garantizan una vigilancia continua y una
							tranquilidad inquebrantable.
						</p>
					</div>
				</div>
				<Rotulo text="¿Qué podemos hacer por nuestros clientes?" />
				<div
					className="flex gap-2 justify-center my-[2rem]"
					id="cards-seguridad"
				>
					<Card
						img="camaras.jpg"
						title="Cámaras de seguridad"
						content="Amplia gama de cámaras seguridad con inteligencia artificial, reconocimiento facial, cámaras infrarrojas de ultima generación."
						boton="Cotizar"
						url="https://api.whatsapp.com/send?phone=+593962966301&text=Buenas%20tardes,%20Deseo%20Informaci%C3%B3n%20sobre%20C%C3%A1maras%20de%20seguridad"
					/>
					<Card
						img="videop.jpg"
						title="Video porteros"
						content="Diseñados para brindar una experiencia de acceso segura cono reconocimiento facial, tarjeta y clave."
						boton="Cotizar"
						url="https://api.whatsapp.com/send?phone=+593962966301&text=Buenas%20tardes,%20Deseo%20Informaci%C3%B3n%20sobre%20Video%20Porteros"
					/>
					<Card
						img="alarma.jpg"
						title="Alarmas"
						content="Diseñadas para detectar, disuadir intrusos y alertarte ante cualquier situación de emergencia. Son la primera línea de defensa en tu sistema de seguridad."
						boton="Cotizar"
						url="https://api.whatsapp.com/send?phone=+593962966301&text=Buenas%20tardes,%20Deseo%20Informaci%C3%B3n%20sobre%20alarmas"
					/>
					<Card
						img="domotica.png"
						title="Domótica"
						content="Para el hogar empresa y negocios: control total sobre tu entorno, un espacio inteligente y personalizado."
						boton="Ver video"
						url="https://api.whatsapp.com/send?phone=+593962966301&text=Buenas%20tardes,%20Deseo%20Informaci%C3%B3n%20sobre%20Dom%C3%B3tica"
					/>
				</div>
				<div className="w-[screen]">
					<div className="flex justify-center">
						<a
							className="flex justify-center"
							href="https://api.whatsapp.com/message/ZMUMPHX37PTZK1?autoload=1&app_absent=0"
							target="_blank"
						>
							<img className="w-[35%]" src="contacto-btn.jpg" id="widthfull" />
						</a>
					</div>
				</div>
				<div className="mt-[5%]">
					<Footer
						text={
							<div className="space-x-3" id="menu_footer">
								<a className="link-1 elementosFooter" href="home">
									Inicio
								</a>
								<a className="elementosFooter" href="nosotros">
									¿Quiénes somos?
								</a>
								<a className="elementosFooter" href="contacto">
									Contáctanos
								</a>
								<a className="elementosFooter" href="trabajo">
									Trabaja con nosotros
								</a>
							</div>
						}
					/>
				</div>
			</div>
		</>
	);
}
