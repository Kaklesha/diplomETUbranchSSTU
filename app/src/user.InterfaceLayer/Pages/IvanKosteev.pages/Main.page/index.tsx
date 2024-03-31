import React from "react";
import Footer from "user.InterfaceLayer/Libraries/IvanKosteev.library/Widgets/Footer/index";
import Navbar from "user.InterfaceLayer/Libraries/IvanKosteev.library/Widgets/Navbar/index/Navbar";
import MainComponent from "user.InterfaceLayer/Components/IvanKosteev.components.bll/MainPage.component.bll";
import i18n from "user.InterfaceLayer/Components/IvanKosteev.components.bll/I18next/i18n";
import { I18nextProvider } from "react-i18next";

// import { useParams } from "react-router-dom";

import * as ST from "../../../Libraries/IvanKosteev.library/constants/container/styled";

// interface MainPageProps {
// 	id: string;
// }

const MainPage: React.FC = () => {
	// const { id } = useParams();

	return (
		<I18nextProvider i18n={i18n}>
			<>
				<ST.container>
					<Navbar />
					<MainComponent
					// id={id || ""}
					/>
				</ST.container>
				<ST.footer>
					<Footer />
				</ST.footer>
			</>
		</I18nextProvider>
	);
};

export default MainPage;
