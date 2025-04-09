import Header from "../components/Header";
import BannerS from "../components/BannerS";
import Rotulo from "../components/Rotulo";
import Footer from "../components/Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Trabajo() {
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
				<BannerS img="trabajo.jpg" position="center" />
				<Rotulo text="Trabaja con nosotros" />
				<div className="mt-[3rem]">
					<p className="text-[15px] text-center">
						Somos una empresa líder en soluciones tecnológicas. Creemos que cada
						miembro es pieza fundamental para ofrecer el mejor servicio.
					</p>
					<p className="text-[20px] text-center">
						¡Te invitamos a ser parte de nuestro equipo!
					</p>
				</div>
				<div className="w-screen px-[20%] py-[2rem]">
					<img className="w-screen" src="work.jpg" />
					<a href="https://docs.google.com/forms/d/e/1FAIpQLSd1tGrKbWnaEQFu_2wkM3f8BPwzM6AfHT62uzMyJHDC7efPDw/viewform">
						<div className="py-[1rem] bg-[rgba(12,18,63,1)] flex justify-center rounded-sm">
							<span className="text-white text-center">Deja tu CV aquí!</span>
						</div>
					</a>
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
