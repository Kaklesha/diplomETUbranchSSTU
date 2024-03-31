import React, { FunctionComponent, useContext } from "react";
import { UserIdContext } from "user.InterfaceLayer/Components/KirillKornilov.components.bll/MainPage.component.bll copy";

import ObserveWidgetType from "./type";
import { UserCategory } from "../Main.widget";

const ObserveWidget: FunctionComponent<ObserveWidgetType> = ({ useGetObservationQuery }) => {

	const { data , isLoading} = useGetObservationQuery({user_id: useContext(UserIdContext),category_id:useContext(UserCategory)});
	//alert(`Observe ${data}`);
	if(isLoading)return <h1>Loading..</h1>;
	
		//return <Task key={task["id"]} text={task["goal"]} completed={task["is_completed"]}/>;
					{/* <p style={{margin:0}}>
						Больше всего задач вы <a href="#">создаете</a> в Понедельник<br/><br/>
						Больше всего задач вы завершаете во Вторник
					</p>		 */}

	return <>
			<p>{data["created"]}</p>
			<br />
			<p>{data["completed"]}</p>
	</>;
	
	
	
};

export default ObserveWidget;
