import React from "react";

import { useGetTodoQuery } from "../../../../business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/todo.entity/redux/api";
import Widget1 from "../../../Libraries/KirillKornilov.library/Widgets/widget1";

const ComponentProfilePage = () => {
	return <Widget1 useGetTodoQuery={useGetTodoQuery} />;
};

export default ComponentProfilePage;
