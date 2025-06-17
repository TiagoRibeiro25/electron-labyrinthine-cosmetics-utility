import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";
import Menu from "../views/Menu";
import ManageCosmetics from "../views/ManageCosmetics";
import MissingCosmetics from "../views/MissingCosmetics";

const Navigation: React.FC = (): React.JSX.Element => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Menu />} />
				<Route path="/manage-cosmetics" element={<ManageCosmetics />} />
				<Route path="/missing-cosmetics" element={<MissingCosmetics />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Navigation;
