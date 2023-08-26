import "../scss/components/footer.scss";

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<section className="footer__section--icons">
					<p className="section__icons--p">¿Podemos ayudarle?</p>
					<div className="section__icons--container">
						<div className="footer__container--icon">
							<img
								src="/icons/intercom.svg"
								alt="Chat icon"
								className="footer__icon"
							/>
							<p className="intercom__container--p">CHAT</p>
						</div>
						<div className="footer__container--icon">
							<img
								src="/icons/phone.png"
								alt="Phone icon"
								className="footer__icon"
							/>
							<p className="intercom__container--p">LLAMAR</p>
						</div>
					</div>
				</section>
				<section className="footer__section--texts">
					<div className="section__texts--container">
						<button>SOBRE NOSOTROS</button>
						<button>MEDIDAS DE SEGURIDAD (COVID-19)</button>
						<button>CÓMO MERCAR</button>
						<button>PROVEEDORES</button>
						<button>CONTÁCTENOS</button>
						<button>ZONA DE COBERTURA</button>
					</div>
					<img
						src="/icons/rectangle.png"
						alt="Rectangle icon"
						className="footer__rectangle--icon"
					/>
					<div className="footer__instagram--container">
						<div className="footer__instagram--icon">
							<img src="/icons/instagram.png" alt="Instagram icon" />
						</div>
						<p className="footer__instagram--p">
							POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES
						</p>
					</div>
					<div className="footer__filter">
						<button className="footer__filter--button">
							FILTRAR
							<img
								src="/icons/filters.svg"
								alt="Filter icon"
								className="footer__filter--icon"
							/>
						</button>
					</div>
				</section>
			</footer>
		</>
	);
};

export { Footer };
