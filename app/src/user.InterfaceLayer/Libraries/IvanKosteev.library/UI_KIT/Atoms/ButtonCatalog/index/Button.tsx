import React from "react";

import * as ST from "../styled/styled";
import "../styled/style.css";

type Props = {
	description: string;
	handleTitleClick: () => void;
	active: boolean;
};

const ButtonCatalog = ({ active, description, handleTitleClick }: Props) => (
	<ST.Button
		className={active ? "active" : ""}
		onClick={handleTitleClick}
	>
		{description}
	</ST.Button>
);

export default ButtonCatalog;
