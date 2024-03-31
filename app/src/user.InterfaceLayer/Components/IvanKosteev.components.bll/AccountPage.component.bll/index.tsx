import React from "react";
import { useTranslation } from "react-i18next";
import Title from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Atoms/Title/index";
import AccountBlock from "user.InterfaceLayer/Libraries/IvanKosteev.library/Widgets/AccountBlock/index";

const AccountComponent: React.FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<Title title={t("account.title")} />
			<AccountBlock />
		</>
	);
};

export default AccountComponent;
