import React from "react";

// import * as ST from "../styled/styled";
import SelectInput from "../../../Atoms/SelectInput/index";
import { FormProps } from "../type";
import SubTitle from "../../../Atoms/SubTitle/index";

const Form: React.FC<FormProps> = ({ userData }: FormProps) => {
	return (
		<>
			<SubTitle title="Личные данные" />
			<form action="">
				{userData.map((e: any) => (
					<SelectInput
						key={e.id}
						placeholder={e.placeholder}
					/>
				))}
			</form>
		</>
	);
};

export default Form;
