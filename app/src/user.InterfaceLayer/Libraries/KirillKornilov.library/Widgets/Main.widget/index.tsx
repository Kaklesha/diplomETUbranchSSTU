import React, { FunctionComponent, useState, createContext } from "react";
import { useTranslation } from "react-i18next";
//import { UserIdContext } from "user.InterfaceLayer/Components/KirillKornilov.components.bll/MainPage.component.bll copy";

import MainWidgetType from "./type";
import SidebarDataWidget from "../SideBarData.widget";
import HeaderMainWidget from "../HeaderMain.widget";
import Card from "../../UI_KIT/Atoms/Card.Atom";
// import CardDataOptions from "../../UI_KIT/Molecules/CardDataOptions.molecule";
// import Activity from "../../UI_KIT/Molecules/Activity.molecule";
import TaskWidget from "../Task.widget";
import CardData from "../../UI_KIT/Atoms/CardData.Atom";
import DateTime from "../../UI_KIT/Molecules/DateTime.molecule";
import * as S from "./styled";
import ObserveWidget from "../Observe.widget";
import FactWidget from "../Fact.widget";
import GraphLineWidget from "../GraphLine.widget";
import ModalWindowWidget from "../ModalWindow.widget";
import EditModalWindowWidget from "../EditModalWindow.widget";
import ProfileWidget from "../Profile.widget";
import CatalogModalWidget from "../CatalogModal.widget";
import "../i18n.widget/i18n";

export const UserCategory = createContext(1);

const MainWidget: FunctionComponent<MainWidgetType> = ({
	useGetCategoriesQuery,
	useGetGoodsQuery,
	useGetTodoQuery,
	useGetTasksQuery,
	useGetObservationQuery,
	useGetFactQuery,
	useGetActivityQuery,
	useAddTasksMutation,
	useDeleteTasksMutation,
	useGetUserQuery,
	useToggleTaskMutation,
	useEditTaskMutation,
	usePostCategoryMutation,
	useDeleteCategoryMutation,
}) => {
	const { t } = useTranslation();
	const [category, setCategory] = useState(1);
	const [visible, setVisible] = useState(false);
	const [visibleEdit, setVisibleEdit] = useState({ task: {}, visible: false });
	const [visibleProfile, setVisibleProfile] = useState(false);
	const [visibleCatalog, setVisibleCatalog] = useState(false);

	return (
		<>
			<UserCategory.Provider value={category}>
				<SidebarDataWidget
					useGetCategoriesQuery={useGetCategoriesQuery}
					setCategory={setCategory}
					setVisibleCatalog={setVisibleCatalog}
					useDeleteCategoryMutation={useDeleteCategoryMutation}
				/>
				<S.main_page>
					<HeaderMainWidget
						useGetGoodsQuery={useGetGoodsQuery}
						useGetTodoQuery={useGetTodoQuery}
						setVisible={setVisible}
						useGetUserQuery={useGetUserQuery}
						setVisibleProfile={setVisibleProfile}
						visibleProfile={visibleProfile}
					/>
					<ModalWindowWidget
						useAddTasksMutation={useAddTasksMutation}
						useGetCategoriesQuery={useGetCategoriesQuery}
						visible={visible}
						setVisible={setVisible}
						category={category}
					/>
					<EditModalWindowWidget
						useEditTaskMutation={useEditTaskMutation}
						useGetCategoriesQuery={useGetCategoriesQuery}
						visible={visibleEdit["visible"]}
						setVisible={setVisibleEdit}
						//taskEdit={taskEdit}
						task={visibleEdit["task"]}
					/>
					<CatalogModalWidget
						usePostCategoryMutation={usePostCategoryMutation}
						visible={visibleCatalog}
						setVisibleCatalog={setVisibleCatalog}
					/>
					<S.columns>
						<S.left_column>
							<S.container_hide hide={!visibleProfile ? "none" : "flex"}>
								<ProfileWidget />
							</S.container_hide>

							<S.container_hide hide={visibleProfile ? "none" : "flex"}>
								{/* <Card>
									<CardDataOptions title={t("weekAchievements.title")}>
										<Activity useGetActivityQuery={useGetActivityQuery} />
									</CardDataOptions>
								</Card> */}

								<Card>
									<TaskWidget
										useToggleTaskMutation={useToggleTaskMutation}
										useGetTodoQuery={useGetGoodsQuery}
										useGetTasksQuery={useGetTasksQuery}
										useDeleteTasksMutation={useDeleteTasksMutation}
										setVisible={setVisibleEdit}
									/>
								</Card>
							</S.container_hide>
						</S.left_column>

						<S.right_column>
							<Card>
								<CardData title={t("timer.title")}>
									<DateTime />
								</CardData>
							</Card>
							<Card>
								<CardData title={t("observation")}>
									<ObserveWidget
										useGetObservationQuery={useGetObservationQuery}
									/>
								</CardData>
							</Card>
							<Card>
								<CardData title={t("dayFact")}>
									<FactWidget useGetFactQuery={useGetFactQuery} />
								</CardData>
							</Card>
							<Card>
								<CardData title={t("chart")}>
									<GraphLineWidget useGetActivityQuery={useGetActivityQuery} />
								</CardData>
							</Card>
						</S.right_column>
					</S.columns>
				</S.main_page>
			</UserCategory.Provider>
		</>
	);
};

export default MainWidget;
