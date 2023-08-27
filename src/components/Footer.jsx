import { useState } from "react";
import ReactModal from "react-modal";
import { ModalContent } from "./ModalContent";
import "../scss/components/footer.scss";
import "../scss/components/modal.scss";

const Footer = ({ setSelectedProductId, selectedProductId }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const handleModal = () => {
		setModalIsOpen(!modalIsOpen);
	};

	const handleSelectedProduct = (productId) => {
		setSelectedProductId(productId);
		handleModal();
	};

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
						<button onClick={handleModal} className="footer__filter--button">
							FILTRAR
							<img
								src="/icons/filters.svg"
								alt="Filter icon"
								className="footer__filter--icon"
							/>
						</button>
					</div>
				</section>
				<ReactModal
					isOpen={modalIsOpen}
					onRequestClose={handleModal}
					contentLabel="Modal"
					appElement={document.getElementById("root")}
					className="modal"
				>
					<ModalContent
						handleModal={handleModal}
						handleSelectedProduct={handleSelectedProduct}
						selectedProductId={selectedProductId}
					/>
				</ReactModal>
			</footer>
		</>
	);
};

export { Footer };
