import React from "react";

import * as ST from "../styled/styled";

type Props = {
	title: string;
};

const Title = ({ title }: Props) => {
	return <ST.div>{title}</ST.div>;
};

export default Title;
