import "../scss/components/modal.scss";

const ModalContent = ({ handleModal, handleSelectedProduct }) => {
	const handleCheckboxChange = (e) => {
		const selectProductId = e.target.value;
		handleSelectedProduct(selectProductId);
	};

	return (
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
	);
};

export { ModalContent };
