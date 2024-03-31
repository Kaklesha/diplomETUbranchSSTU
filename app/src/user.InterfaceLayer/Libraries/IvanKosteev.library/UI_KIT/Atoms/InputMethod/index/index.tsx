import React from "react";

import * as ST from "../styled/styled";

interface InputMethodProps {
	onChange: any;
	name: any;
	value: any;
	checked: boolean;
}

const InputMethod: React.FC<InputMethodProps> = ({
	onChange,
	name,
	value,
	checked,
}: InputMethodProps) => {
	return (
		<ST.Input
			onChange={onChange}
			type="radio"
			name={name}
			value={value}
			checked={checked}
		/>
	);
};

export default InputMethod;
