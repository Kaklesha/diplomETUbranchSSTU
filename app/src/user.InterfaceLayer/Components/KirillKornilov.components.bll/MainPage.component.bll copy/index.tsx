import React, { createContext, useState } from "react";
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
import { getLocalStorage } from "business.InterfaceLayer/store/services/utils/localstoreUser/localstore";
import { Link } from "react-router-dom";

import * as S from "./styled";

export const UserIdContext = createContext(1);

//const UserIdContext = createContext(1);
function UserCheck(callback) {
	//localStorage.getItem("user");
	//if localStorage.getItem("user")
	//	const navigate: NavigateFunction = useNavigate();
	//const navigate: NavigateFunction = useNavigate();
	if (getLocalStorage("user")) {
		() => callback(getLocalStorage("user")["id"]);

		return true;
	}

	// setTimeout(() => {
	// 	navigate("/sign", { replace: false });
	// 	window.location.reload();
	// },1000);
	//navigate("/sign", { relative: "path" });
	//window.location.reload();
	// useEffect(() => {
	// 	navigate("/sign", { replace: false });
	// 	window.location.reload();
	// }, []);
	// useEffect(() => {
	// 	//navigate(window.origin + location.pathname);
	// 	//	navigate("sign/", { relative: "path" });
	// 	navigate("/sign");
	// 	//	window.location.reload();
	// }, []);

	// useEffect(() => {
	// 	if (userIsInactive) {
	// 	  fake.logout();
	// 	  navigate("/session-timed-out");
	// 	}
	//   }, [userIsInactive]);

	return false;
}
const ComponentMainPage = () => {
	//	const [UserIdContext, setUserIdContext] = useState(1);
	const [currentUser, setCurrentUser] = useState(2);
	//localStorage.getItem("user");
	//, JSON.stringify(response.data)

	const Content = UserCheck(setCurrentUser) ? (
		<>
			<UserIdContext.Provider value={currentUser}>
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
				/>
			</UserIdContext.Provider>
		</>
	) : (
		<>
			

			<S.container>
				<S.wrapper>
					<h4>Уведомление</h4>
					<h3>Вам необходимо авторизоваться</h3>
					<h3>You need auth in your account</h3>
					{/* <Button
						onClick={() => onClickHandler()}
						text="Войти"
						color="#29A19C"
						icon={false}
					/> */}
					<Link to="/kirillKornilov/sign">Авторизация / Sign In</Link>
				</S.wrapper>
			</S.container>
		</>
	);

	return Content;
};

export default ComponentMainPage;
