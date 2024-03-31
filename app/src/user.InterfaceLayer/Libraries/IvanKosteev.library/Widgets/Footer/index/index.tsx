import React from "react";
import Logo from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Atoms/Logo/index/Logo";
import ButtonLK from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Atoms/ButtonLK/index";
import Category from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Molecules/Category.molecule/index/Category";
import { useTranslation } from "react-i18next";

import * as ST from "../../../constants/container/styled";
import * as FR from "../styled/styled";

const Footer = () => {
	const { t } = useTranslation();

	return (
		<ST.container>
			<FR.footer>
				<Logo desciption={t("navbar.logo")} />
				<Category text={t("navbar.NavbarText", { returnObjects: true })} />
				<ButtonLK desciption={t("footer.lk")} />
			</FR.footer>
		</ST.container>
	);
};

export default Footer;
