import Header from "../components/Header";
import BannerS from "../components/BannerS";
import Rotulo from "../components/Rotulo";
import Footer from "../components/Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Contacto() {
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
				<BannerS img="contactanos.jpg" position="center" />
				<Rotulo text="Contáctanos" />
				<div className="mb-[3rem] pt-[2rem] px-[10%] flex gap-3" id="us">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d249.3620829156044!2d-78.494685!3d-0.202804!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a14e75d0b6b%3A0xb02936b33a96e6c2!2sCentro%20Amazonas%2C%20Gil%20R.%20D%C3%A1valos%2C%20Quito%20170143%2C%20Ecuador!5e0!3m2!1ses-419!2sus!4v1717504890997!5m2!1ses-419!2sus"
						width="600"
						height="450"
						style={{border: 0}}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
					<iframe
						src="https://docs.google.com/forms/d/e/1FAIpQLSeW0ljIByCL8nB9g-Lojdb3RsbBePCuQgOrLH6xfyRVX4xCww/viewform?embedded=true"
						width="600"
						height="450"
						frameBorder="0"
						marginHeight="0"
						marginWidth="0"
					>
						Cargando…
					</iframe>
				</div>
				<div className="flex justify-center">
					<p
						className="text-[#bf9000] font-times text-2xl text-center bold"
						id="uss"
					>
						Quito: Calle Ramirez Dávalos No. 136 y Amazonas, 4to piso of. 402,
						Edificio Centro Amazonas <br /> Telf.: (+593) 99 835 4926 <br />{" "}
						Telf.: (+593) 95 891 3568 Telf.: <br />
						(593) 99 843 7168 <br />
						administracion@bconnect-ec.com
					</p>
				</div>
				<div className="mt-[8%]">
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
