import { createContext } from "react";

// import {Icons , Icon } from "../../UI_KIT/Atoms/Atom1/icons";
// import Widget1Type from "./type";

//const Widget1: FunctionComponent<Widget1Type> = ({ useGetTodoQuery }) => {
	//const { data } = useGetTodoQuery({ authToken: "", params: { id: "1" } });

	//return <div>data from jsonplaceholder : {JSON.stringify(data)}
	//		<Icon width={20} height={20} color="#FAFAFA" icon={Icons.House}  />
	//</div>;
//};

const dataContext = createContext({
	"goods":[
	{
	"id": 1,
	"name": "username",
	"categories" : [
		{   

			"id": 1,
			"cname" : "Дом",
			"tasks" : [
				{   "id": 1,
					"task" : "Приготовить вкусный ужин",
					"isComplete" : false,
					"created" : "2012-04-23T18:25:43.511Z",
					"finished" : ""
				},
				{   "id": 2,
					"task" : "Приготовить вкусный ужин",
					"isComplete" : true,
					"created" : "2012-04-23T18:25:43.511Z",
					"finished" : "2012-04-25T18:25:43.511Z"
				}
			]
		},
		{   

			"id": 2,
			"cname" : "Дом",
			"tasks" : [
				{   "id": 1,
					"task" : "Приготовить вкусный ужин",
					"isComplete" : false,
					"created" : "2012-04-23T18:25:43.511Z",
					"finished" : ""
				},
				{   "id": 2,
					"task" : "Приготовить вкусный ужин",
					"isComplete" : true,
					"created" : "2012-04-23T18:25:43.511Z",
					"finished" : "2012-04-25T18:25:43.511Z"
				}
			]
		}
		]
	},
	{
		"id":2,
		"name": "Milk"
	},
	{
		"id":3,
		"name": "bananas"
	}
	]
});

export default dataContext;
