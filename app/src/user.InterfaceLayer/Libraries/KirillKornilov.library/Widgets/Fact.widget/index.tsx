import React, { FunctionComponent } from "react";

import FactWidgetType from "./type";


const FactWidget: FunctionComponent<FactWidgetType> = ({ useGetFactQuery }) => {

	const { data , isLoading} = useGetFactQuery();
	//alert(`fact ${data}`);
	if(isLoading)return <h1>Loading..</h1>;
	
	

	return <>
			<p>{data["fact"]}</p>
		
	</>;
	
	
	
};

export default FactWidget;
