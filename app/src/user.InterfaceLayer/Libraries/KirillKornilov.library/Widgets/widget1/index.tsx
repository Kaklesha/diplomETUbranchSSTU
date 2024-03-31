import React, { FunctionComponent } from "react";

import {Icons , Icon } from "../../UI_KIT/Atoms/Atom1/icons";
import Widget1Type from "./type";

const Widget1: FunctionComponent<Widget1Type> = ({ useGetTodoQuery }) => {
	const { data } = useGetTodoQuery({ authToken: "", params: { id: "1" } });

	return <div>data from jsonplaceholder : {JSON.stringify(data)}
			<Icon width={20} height={20} color="#FAFAFA" icon={Icons.House}  />
	</div>;
};

export default Widget1;
