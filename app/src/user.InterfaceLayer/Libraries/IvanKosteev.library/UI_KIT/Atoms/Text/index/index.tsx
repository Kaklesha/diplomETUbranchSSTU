import React from "react";

import * as ST from "../styled/styled";

interface TextProps {
	text: string;
}

const Text: React.FC<TextProps> = ({ text }: TextProps) => {
	return <ST.text>{text}</ST.text>;
};

export default Text;
