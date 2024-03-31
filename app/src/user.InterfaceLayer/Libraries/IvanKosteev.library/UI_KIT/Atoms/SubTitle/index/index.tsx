import React from "react";

import * as ST from "../styled/styled";

interface SubTitleProps {
	title: string;
}

const SubTitle: React.FC<SubTitleProps> = ({ title }: SubTitleProps) => {
	return <ST.title>{title}</ST.title>;
};

export default SubTitle;
