import React, { FC } from "react";
// import ComponentLogInForm from "user.InterfaceLayer/Components/KirillKornilov.components.bll/LogInForm.component.bll copy";
// import HeaderSign from "user.InterfaceLayer/Components/KirillKornilov.components.bll/HeaderSign.component.bll";
// import FooterSign from "user.InterfaceLayer/Components/KirillKornilov.components.bll/FooterSign.component.bll";
import SignPageComp from "user.InterfaceLayer/Components/KirillKornilov.components.bll/SignPageComp.component.bll";
import "./style.css";

//import Component1 from "../../../Components/KirillKornilov.components.bll/Components1.component.bll";
// import { Component1 } from "test-lib";

const SignPage: FC = () => {
	// eslint-disable-next-line no-console
	// console.log(Component1);

	return(
			<>
			{/* <HeaderSign/>
			<ComponentLogInForm/>
			<FooterSign/> */}
			<SignPageComp/>
		</>
	);
};

export default SignPage;

