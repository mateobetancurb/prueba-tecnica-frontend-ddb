import { useGlobalState } from "../hooks/useGlobalState";
import "../scss/components/product-list.scss";

const ProductList = () => {
	const { loading, filteredProductList } = useGlobalState();

	return (
		<>
			<main className="main">
				<h1 className="product__general--title">Cervezas</h1>
				<section className="product__list--container">
					{loading ? (
						<p>Loading...</p>
					) : (
						filteredProductList.map((product) => (
							<div key={product?.id} className="product__container">
								<div className="product__info">
									<img
										src={product?.image}
										alt={product?.name}
										className="product__image"
									/>
									<h3 className="product__name">{product?.name}</h3>
									<p className="product__description">{product?.description}</p>
									<p className="product__price">${product?.price}</p>
								</div>
								<div className="product__button-container">
									<p className="product__button">AGREGAR</p>
								</div>
							</div>
						))
					)}
				</section>
				<div className="continue__shopping--container">
					<div>
						<p className="continue__shopping--p">Sigue mercando</p>
						<h3 className="continue__shopping--h3">Vinos</h3>
					</div>
					<img
						src="/icons/arrow.svg"
						alt="Arrow right"
						className="continue__shopping--icon"
					/>
				</div>
			</main>
		</>
	);
};

export { ProductList };
