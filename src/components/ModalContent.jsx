import { useState, useEffect } from "react";
import "../scss/components/modal.scss";

const ModalContent = ({
	handleModal,
	handleSelectedProduct,
	selectedProductId,
}) => {
	const handleCheckboxChange = (e) => {
		const selectProductId = e.target.value;
		handleSelectedProduct(selectProductId);
	};

	const [isButtonDisabled, setIsButtonDisabled] = useState(true);

	const handleButton = () => {
		if (selectedProductId) {
			setIsButtonDisabled(false);
		} else {
			setIsButtonDisabled(true);
		}
	};

	useEffect(() => {
		handleButton();
	}, [selectedProductId]);

	return (
		<>
			<div className="modal">
				<div className="modal__content">
					<section className="section">
						<h2 className="section__h2">Filtros</h2>
						<div onClick={handleModal} className="close__icon--container">
							<img src="/icons/close.svg" alt="Close icon" />
						</div>
						<img src="/icons/rectangle-large.png" alt="Rectangle icon" />
						<div className="section__container--product">
							<p>Rubia</p>
							<input
								onChange={handleCheckboxChange}
								type="checkbox"
								name="Rubia"
								value="1"
							/>
						</div>
						<img src="/icons/rectangle-large.png" alt="Rectangle icon" />
						<div className="section__container--product">
							<p>Morena</p>
							<input
								onChange={handleCheckboxChange}
								type="checkbox"
								name="Morena"
								value="2"
							/>
						</div>
						<img src="/icons/rectangle-large.png" alt="Rectangle icon" />
						<div className="section__container--product">
							<p>Roja</p>
							<input
								onChange={handleCheckboxChange}
								type="checkbox"
								name="Roja"
								value="3"
							/>
						</div>
					</section>
				</div>
				<div className="modal__footer">
					<div className="modal__buttons--container">
						<button
							className={
								isButtonDisabled
									? "modal__clear--button"
									: "modal__button--enable"
							}
						>
							LIMPIAR
						</button>
						<button className="modal__filter--button">
							FILTRAR
							<img
								src="/icons/filters.svg"
								alt="Filter icon"
								className="footer__filter--icon"
							/>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export { ModalContent };
