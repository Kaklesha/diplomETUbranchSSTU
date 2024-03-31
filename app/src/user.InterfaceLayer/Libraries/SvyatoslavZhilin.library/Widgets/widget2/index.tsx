import React, { FunctionComponent } from "react";

import Widget1Type from "./type";

const Widget1: FunctionComponent<Widget1Type> = ({ useGetTodoQuery }) => {
	const { data } = useGetTodoQuery({ authToken: "", params: { id: "1" } });

	return <div>data from jsonplaceholder : {JSON.stringify(data)}</div>;
};

export default Widget1;
