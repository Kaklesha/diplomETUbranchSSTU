import React, { FunctionComponent } from "react";

import LogInForm from "../LogInForm.widget";
import SignWidgetType from "./type";
import HeaderSignMolecule from "../../UI_KIT/Molecules/HeaderSign.molecule";
import FooterSignWidget from "../FooterSign";
// import * as S from "./styled";


const SignWidget: FunctionComponent<SignWidgetType> = ({ usePostAuthMutation}) => {



	return <>	
		<HeaderSignMolecule/>
		<LogInForm usePostAuthMutation={usePostAuthMutation}/>
		<FooterSignWidget/>
		
		</>;
};

export default SignWidget;
