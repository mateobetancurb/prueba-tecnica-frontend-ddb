import { createContext, useState, useEffect } from "react";
import products from "../data/products.json";

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [productList, setProductList] = useState([]);
	const [selectedProductIds, setSelectedProductIds] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		try {
			setProductList(products);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	}, []);

	const filteredProductList =
		selectedProductIds.length > 0
			? productList.filter((product) =>
					selectedProductIds.includes(product.categoryId)
			  )
			: productList;

	return (
		<AppContext.Provider
			value={{
				productList,
				filteredProductList,
				selectedProductIds,
				loading,
				setSelectedProductIds,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export { AppProvider, AppContext };
