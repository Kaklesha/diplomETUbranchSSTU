import React from "react";

import * as ST from "../styled/styled";
import { SelectInputProps } from "../type";

const SelectInput: React.FC<SelectInputProps> = ({
	placeholder,
}: SelectInputProps) => {
	return (
		<ST.block>
			<ST.Input placeholder={placeholder} />
			<ST.Reddit>Изменить</ST.Reddit>
		</ST.block>
	);
};

export default SelectInput;
