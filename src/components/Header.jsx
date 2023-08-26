import "../scss/components/header.scss";

const Header = () => {
	return (
		<>
			<header className="header">
				<nav className="header__nav">
					<div className="header__container">
						<img src="/src/assets/icons/menu.svg" alt="Menu" />
						<img src="/src/assets/icons/symbol.svg" alt="Logo" />
					</div>
					<div className="header__container shopping__cart">
						<img src="/src/assets/icons/search.svg" alt="Search icon" />
						<img src="/src/assets/icons/cart.svg" alt="Cart icon" />
						<div className="header__shopping--circle">
							<span>9</span>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};

export { Header };
