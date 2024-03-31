import { useState } from "react";
import i18next from "i18next";

import "./styled/style.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as S from "./styled";
const LanguageSelectorMolecule = () => {
	//return <Widget1 useGetTodoQuery={useGetTodoQuery} />;

	const [languageIcon, setLanguageIcon] = useState(require("../../../assets/icons/ru.png"));
//require(`../../assets/icons/${userInfo["avatar"]}`)
	const changeLanguage = () => {
		if (i18next.language=="ru") {

			i18next.changeLanguage("en");
			
			setLanguageIcon(require("../../../assets/icons/ru.png"));
		} else {
			setLanguageIcon(require("../../../assets/icons/us.png"));
			i18next.changeLanguage("ru");
	
		}
	};

	return (
		<button
			onClick={changeLanguage}
			className="language-selector"
		>
			<img
				
				src={languageIcon}
				alt=""
			/>
		</button>
	);
};

export default LanguageSelectorMolecule;
