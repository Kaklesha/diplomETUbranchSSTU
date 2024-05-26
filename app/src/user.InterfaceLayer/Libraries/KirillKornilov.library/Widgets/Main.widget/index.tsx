/* eslint-disable max-lines */
import React, { FunctionComponent, useState, createContext } from "react";
import { useTranslation } from "react-i18next";

import MainWidgetType from "./type";
import SidebarDataWidget from "../SideBarData.widget";
import HeaderMainWidget from "../HeaderMain.widget";
import Card from "../../UI_KIT/Atoms/Card.Atom";
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
import BurgerModalWindowWidget from "../BurgerModalWindow.widget";
import Logo from "../../UI_KIT/Molecules/Logo.molecule";

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
	const [visibleMenu, setVisibleMenu] = useState(false);
	const [visibleEdit, setVisibleEdit] = useState({ task: {}, visible: false });
	const [visibleProfile, setVisibleProfile] = useState(false);
	const [visibleCatalog, setVisibleCatalog] = useState(false);

	return (
		<>
			<UserCategory.Provider value={category}>
				<S.container_heap>
					
					<SidebarDataWidget
						useGetCategoriesQuery={useGetCategoriesQuery}
						setCategory={setCategory}
						setVisibleCatalog={setVisibleCatalog}
						useDeleteCategoryMutation={useDeleteCategoryMutation}
					/>
					<S.main_page>
						<S.burger_menu>
						<BurgerModalWindowWidget
							useGetCategoriesQuery={useGetCategoriesQuery}
							visible={visibleMenu}
							setVisible={setVisibleMenu}
							setCategory={setCategory}
							setVisibleCatalog={setVisibleCatalog}
							useDeleteCategoryMutation={useDeleteCategoryMutation}
						/>
						
						<div
							onClick={() => {
								setVisibleMenu(true);
							}}
						>
							<Logo />
						</div>
					
					</S.burger_menu>
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
										<GraphLineWidget
											useGetActivityQuery={useGetActivityQuery}
										/>
									</CardData>
								</Card>
							</S.right_column>
						</S.columns>
					</S.main_page>
				</S.container_heap>
			</UserCategory.Provider>
		</>
	);
};

export default MainWidget;
