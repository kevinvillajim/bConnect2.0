import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Imgs from "../components/Imgs";
import Aliados from "../components/Aliados";
import Rotulo from "../components/Rotulo";
import Footer from "../components/Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Home() {
	return (
		<>
			<div className="w-screen">
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
				<Banner bgImg="banner-home.jpg" link="#products" />
				<div id="products" className="flex justify-center py-[1rem] gap-4">
					<Card
						img="pantallas.png"
						title="Pantallas interactivas"
						content="Pantallas táctiles interactivas que funcionan como tu lo haces, en aulas y en salas de conferencia."
						boton="Ver más"
						url="/pantallas"
					/>
					<Card
						img="seguridad-electronica.png"
						title="Seguridad electrónica"
						content="Cámaras de seguridad, controles de acceso, ingresos, videoporteros, porteros eléctricos, automatización y domótica"
						boton="Ver más"
						url="/seguridad-electronica"
					/>
					<Card
						img="cibersecurity.png"
						title="Ciberseguridad"
						content="SOC, PAM, WAF, DLP, Ethical Hacking, Antispam, Seguridad de endpoints, Implementación de firewall, redes."
						boton="Ver más"
						url="/ciberseguridad"
					/>
					<Card
						img="tecnologia.png"
						title="Soluciones Tecnológicas"
						content="Computadoras, Laptops, Tablets, Celulares, Periféricos y Gadgets"
						boton="Ver más"
						url="/tecnologia"
					/>
				</div>
				<div className="flex gap-[3rem] py-[3rem] justify-center" id="videos">
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/hkHt--S5yoY?si=fR7zF3pfl0Sp3adr"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/Ly0EfdiO408?si=gRMDCaaaGfzjbJKx"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
				<div className="flex gap-[2rem] justify-center" id="imagenes">
					<Imgs img="carr1.jpeg" />
					<Imgs img="carr2.jpeg" />
					<Imgs img="carr3.jpeg" />
					<Imgs img="carr4.jpg" />
				</div>
				<div className="my-[2rem]">
					<Rotulo text="Nuestros Aliados" />
				</div>
				<div className="flex justify-center gap-[2rem]" id="aliados">
					<Aliados img="aliado.png" />
					<Aliados img="aliado1.png" />
					<Aliados img="aliado2.png" />
					<Aliados img="aliado3.png" />
				</div>
				<div className="flex justify-center my-[2rem]">
					<Aliados img="aliado4.png" />
				</div>
				<div className="flex flex-col min-h-screen">
					<div className="flex-grow"></div>
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

export default Home;
