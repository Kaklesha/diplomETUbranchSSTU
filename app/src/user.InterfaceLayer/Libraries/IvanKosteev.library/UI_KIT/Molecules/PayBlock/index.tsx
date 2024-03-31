import React from "react";

import * as ST from "./styled";
import Text from "../../Atoms/Text/index";
import InputMethod from "../../Atoms/InputMethod/index";

interface PayBlockProps {
	name: string;
	value: any;
	checked: any;
	onChange: any;
}

const PayBlock: React.FC<PayBlockProps> = ({
	name,
	value,
	checked,
	onChange,
}: PayBlockProps) => {
	return (
		<ST.text>
			<InputMethod
				onChange={onChange}
				name={name}
				value={value}
				checked={checked}
			/>
			<Text text={name} />
		</ST.text>
	);
};

export default PayBlock;
