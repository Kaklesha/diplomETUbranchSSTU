import React , {createContext} from "react";
import MainWidget from "user.InterfaceLayer/Libraries/KirillKornilov.library/Widgets/Main.widget";
import { useGetGoodsQuery } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/task.entity/redux/api";
import { useGetTodoQuery } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/todo.entity/redux/api";
import { useGetCategoriesQuery } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/task.entity/redux/api";
import { useGetTasksQuery } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/task.entity/redux/api";
import { useGetObservationQuery } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/task.entity/redux/api";
import { useGetFactQuery } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/task.entity/redux/api";
import { useGetActivityQuery } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/task.entity/redux/api";
import { useAddTasksMutation } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/task.entity/redux/api";
import { useDeleteTasksMutation } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/task.entity/redux/api";
import { useGetUserQuery } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/task.entity/redux/api";
import { useToggleTaskMutation } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/task.entity/redux/api";
import { useEditTaskMutation } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/task.entity/redux/api";
import { usePostCategoryMutation } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/task.entity/redux/api";
import { useDeleteCategoryMutation } from "business.InterfaceLayer/store/shared/entities/kirillKornilov.entities/task.entity/redux/api";

export const UserIdContext = createContext(0);


const ComponentMainPage = () => {
		
	return  <>
	<UserIdContext.Provider value={1}>
	<MainWidget 
	useGetGoodsQuery={useGetGoodsQuery} 
	useGetTodoQuery={useGetTodoQuery}  
	useGetCategoriesQuery={useGetCategoriesQuery} 
	useGetTasksQuery={useGetTasksQuery}
	useGetObservationQuery={useGetObservationQuery}
	useGetFactQuery={useGetFactQuery}
	useGetActivityQuery={useGetActivityQuery}
	useAddTasksMutation={useAddTasksMutation}
	useDeleteTasksMutation={useDeleteTasksMutation}
	useGetUserQuery={useGetUserQuery}
	useToggleTaskMutation={useToggleTaskMutation}
	useEditTaskMutation={useEditTaskMutation}
	usePostCategoryMutation={usePostCategoryMutation}
	useDeleteCategoryMutation={useDeleteCategoryMutation}
	
	/></UserIdContext.Provider>
	</>;
	
};

export default ComponentMainPage;
