import React from "react";
import Footer from "user.InterfaceLayer/Libraries/IvanKosteev.library/Widgets/Footer/index";
import Navbar from "user.InterfaceLayer/Libraries/IvanKosteev.library/Widgets/Navbar/index/Navbar";
import AccountComponent from "user.InterfaceLayer/Components/IvanKosteev.components.bll/AccountPage.component.bll";

import * as ST from "../../../Libraries/IvanKosteev.library/constants/container/styled";

const AccountPage: React.FC = () => {
	return (
		<>
			<ST.container>
				<Navbar />
				<ST.block>
					<AccountComponent />
				</ST.block>
			</ST.container>
			<ST.footer>
				<Footer />
			</ST.footer>
		</>
	);
};

export default AccountPage;