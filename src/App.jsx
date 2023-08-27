import { useState } from "react";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { Footer } from "./components/Footer";
import "./index.scss";

const App = () => {
	const [selectedProductId, setSelectedProductId] = useState(null);
	return (
		<>
			<Header />
			<ProductList selectedProductId={selectedProductId} />
			<Footer
				setSelectedProductId={setSelectedProductId}
				selectedProductId={selectedProductId}
			/>
		</>
	);
};

export { App };
