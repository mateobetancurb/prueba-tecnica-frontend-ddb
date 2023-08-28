import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { Footer } from "./components/Footer";
import { AppProvider } from "./context/AppProvider";
import "./index.scss";

const App = () => {
	return (
		<>
			<AppProvider>
				<Header />
				<ProductList />
				<Footer />
			</AppProvider>
		</>
	);
};

export { App };
