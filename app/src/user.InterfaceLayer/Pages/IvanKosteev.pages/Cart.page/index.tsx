import React, { FC } from "react";
import Footer from "user.InterfaceLayer/Libraries/IvanKosteev.library/Widgets/Footer/index";
import Navbar from "user.InterfaceLayer/Libraries/IvanKosteev.library/Widgets/Navbar/index/Navbar";
import CartComponent from "user.InterfaceLayer/Components/IvanKosteev.components.bll/CartPage.component.bll";

import * as ST from "../../../Libraries/IvanKosteev.library/constants/container/styled";

const LastPage: FC = () => (
	<>
		<ST.container>
			<Navbar />
			<CartComponent />
		</ST.container>
		<ST.footer>
			<Footer />
		</ST.footer>
	</>
);

export default LastPage;
