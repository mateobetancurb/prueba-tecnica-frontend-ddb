import { useState, useEffect } from "react";
import { useGlobalState } from "../hooks/useGlobalState";
import "../scss/components/modal.scss";

const ModalContent = ({ handleModal }) => {
	const { selectedProductIds, setSelectedProductIds } = useGlobalState();
	const [numberFilterActive, setNumberFilterActive] = useState(0);

	const [checkboxStates, setCheckboxStates] = useState({
		1: false,
		2: false,
		3: false,
	});

	const handleCheckboxChange = (e) => {
		const selectedProductId = e.target.value;
		const isChecked = e.target.checked;

		setCheckboxStates((prevState) => ({
			...prevState,
			[selectedProductId]: isChecked,
		}));

		if (isChecked) {
			setSelectedProductIds([...selectedProductIds, selectedProductId]);
		} else {
			setSelectedProductIds(
				selectedProductIds.filter((id) => id !== selectedProductId)
			);
		}
	};

	const [isButtonDisabled, setIsButtonDisabled] = useState(true);

	const handleButton = () => {
		if (selectedProductIds.length > 0) {
			setIsButtonDisabled(false);
		} else {
			setIsButtonDisabled(true);
		}
	};

	useEffect(() => {
		const updatedCheckboxStates = {};
		selectedProductIds.forEach((id) => {
			updatedCheckboxStates[id] = true;
		});
		setCheckboxStates(updatedCheckboxStates);
	}, [selectedProductIds]);

	useEffect(() => {
		handleButton();
	}, [selectedProductIds]);

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
								checked={checkboxStates["1"]}
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
								checked={checkboxStates["2"]}
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
								checked={checkboxStates["3"]}
							/>
						</div>
					</section>
				</div>
				<div className="modal__footer">
					<div className="modal__buttons--container">
						<button
							onClick={() => {
								setSelectedProductIds([]);
								handleModal();
							}}
							className={
								isButtonDisabled
									? "modal__clear--button"
									: "modal__button--enable"
							}
						>
							LIMPIAR
						</button>
						<button
							onClick={() => {
								setSelectedProductIds(selectedProductIds);
								handleModal();
							}}
							className="modal__filter--button"
						>
							FILTRAR
							<img
								src="/icons/filters.svg"
								alt="Filter icon"
								className="footer__filter--icon"
							/>
							<div className="container__number--filter">
								<p>{selectedProductIds.length}</p>
							</div>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export { ModalContent };
