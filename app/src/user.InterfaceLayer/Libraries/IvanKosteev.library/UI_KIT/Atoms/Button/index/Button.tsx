import React from "react";

import * as ST from "../styled/styled";

type Props = {
	desciption: string;
	type: any;
};

const Button = ({ desciption, type }: Props) => (
	<ST.Button type={type}>{desciption}</ST.Button>
);

export default Button;