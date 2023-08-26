import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { Footer } from "./components/Footer";
import "./index.scss";

const App = () => {
	return (
		<>
			<Header />
			<ProductList />
			<Footer />
		</>
	);
};

export { App };
