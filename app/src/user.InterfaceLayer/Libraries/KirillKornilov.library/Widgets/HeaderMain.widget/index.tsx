import React, { FunctionComponent } from "react";
import Button from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Molecules/Button.molecule";
// import {
// 	Icons,
// 	Icon,
// } from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Atoms/Atom1/icons";
//import Avatar from "user.InterfaceLayer/Libraries/KirillKornilov.library/UI_KIT/Atoms/Avatar.Atom";
// eslint-disable-next-line import/order
import { useTranslation } from "react-i18next";

import "../i18n.widget/i18n";
import { getLocalStorage } from "business.InterfaceLayer/store/services/utils/localstoreUser/localstore";

import LanguageSelectorMolecule from "../../UI_KIT/Molecules/LangSelector.molecule";
import * as S from "./styled";
import HeaderMainType from "./type";

const HeaderMainWidget: FunctionComponent<HeaderMainType> = ({
	visibleProfile,
	//setVisibleProfile,
//	useGetUserQuery,
	useGetGoodsQuery,
	useGetTodoQuery,
	setVisible,
}) => {
	const tempUser = getLocalStorage("user");

	const { t } = useTranslation();
	//{t("sidebar.categories")}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { data } = useGetGoodsQuery();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { data: todo } = useGetTodoQuery();

	//const { data: userInfo, isLoading: userInfoLoading } = useGetUserQuery(1);

	//if (userInfoLoading) return <h2>Loading...</h2>;

	return (
		<S.main_header>
			<S.container_hide hide={visibleProfile ? "none" : "flex"}>
				<Button
					text={t("header.newtask")}
					color="#29A19C"
					icon={true}
					onClick={() => setVisible(true)}
				/>
			</S.container_hide>
{/* 
			<S.theme_button>
				<Icon
					width={24}
					height={24}
					color="#bbbcb9"
					icon={Icons.Moon}
				/>
			</S.theme_button> */}
			<S.user_card>
				<LanguageSelectorMolecule />
				<p>
					{t("header.greetings")}, {tempUser ? tempUser["email"] : "noname"}
				</p>
				{/* <Avatar
					img={require(`../../assets/icons/${userInfo["avatar"]}`)}
					diameter={44}
				/> */}

				{/* <S.toggle_button onClick={() => setVisibleProfile(visibleProfile?false:true)}>
					&gt;
				</S.toggle_button> */}
			</S.user_card>
		</S.main_header>
	);
};

export default HeaderMainWidget;
