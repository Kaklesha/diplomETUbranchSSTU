import { useTranslation } from "react-i18next";

// eslint-disable-next-line import/order
import { Icons, Icon } from "../../Atoms/Atom1/icons";
import "../../../Widgets/i18n.widget/i18n";

// ../../../Widgets/i18n.widget/i18n
// app\src\user.InterfaceLayer\Libraries\KirillKornilov.library\UI_KIT\Molecules\Logo.molecule\index.tsx

import * as S from "./styled";

const Logo = () => {
	const { t } = useTranslation();

	return (
		<S.logo>
			<Icon
				width={54}
				height={54}
				color="#29A19C"
				icon={Icons.Clipboard}
			/>
			<p>{t("sidebar.logo")}</p>
		</S.logo>
	);
};

export default Logo;
