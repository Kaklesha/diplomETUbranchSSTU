import React from "react";
import Logo from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Atoms/Logo/index/Logo";
import Category from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Molecules/Category.molecule/index/Category";
import Profile from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Molecules/Profile.molecule/index/Profile";
import { useTranslation } from "react-i18next";
import i18n from "user.InterfaceLayer/Components/IvanKosteev.components.bll/I18next/i18n";

import * as ST from "../styled/styled";
// import { NavbarText } from "../const";

const Navbar = () => {
	const { t } = useTranslation();

	const handleLanguageChange = (lng: any) => {
		i18n.changeLanguage(lng);
	};

	return (
		<ST.header>
			<Logo desciption={t("navbar.logo")} />
			<Category text={t("navbar.NavbarText", { returnObjects: true })} />
			<Profile />
			<button onClick={() => handleLanguageChange("ru")}>RU</button>
			<button onClick={() => handleLanguageChange("de")}>DE</button>
		</ST.header>
	);
};

export default Navbar;
