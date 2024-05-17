import React, { FC, useContext } from "react";
import { UserIdContext } from "user.InterfaceLayer/Components/KirillKornilov.components.bll/MainPage.component.bll copy";
import { useTranslation } from "react-i18next";

import TaskWidgetType from "./type";
import { UserCategory } from "../Main.widget";
import Task from "../../UI_KIT/Molecules/Task.molecule";
import CardDataOptions from "../../UI_KIT/Molecules/CardDataOptions.molecule";
import "../i18n.widget/i18n";

export const TaskWidget: FC<TaskWidgetType> = ({
	useGetTasksQuery,
	useDeleteTasksMutation,
	useToggleTaskMutation,

	setVisible,
}) => {
	// const { useGetTodoQuery } = props;
	//const {query}
	const { t } = useTranslation();
	// eslint-disable-next-line no-console
	const [toggleTask] = useToggleTaskMutation();
	const category_id = useContext(UserCategory);
	const { data, isLoading } = useGetTasksQuery({
		user_id: useContext(UserIdContext),
		category_id: category_id,
	});

	const handleToggle = async (id: number) => {
		await toggleTask(id);
		//alert(id);
		// eslint-disable-next-line no-console
		console.log(`handletoggle = ${id}`);
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [deleteTask] = useDeleteTasksMutation();

	const handleDelete = async (id: number) => {
		await deleteTask(id);
		//alert(id);
	};

	if (isLoading) return <h1>Loading..</h1>;

	const printingTask = (elem) => {
		const WinPrint = window.open(
			"",
			"",
			"left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0"
		);

		//WinPrint.document.write(prtCSS);
		WinPrint?.document.write(elem.innerHTML);
		//</>WinPrint.document.write('</div>');
		WinPrint?.document.close();
		WinPrint?.focus();
		WinPrint?.print();
		WinPrint?.close();
	};

	return (
		<>
			<CardDataOptions
				title={t("activeTask")}
				callback={
					(event) => printingTask(event.target.closest("article"))
					//event?.target.print()
					// 	() => {
					// 	// eslint-disable-next-line no-console
					// 	//console.log(event?.target);
					// 	//() => window.print()
					// }
				}
			>
				<div className="column-card">
					{data.map((task: any) => {
						if (!task["is_completed"])
							return (
								<Task
									key={task["id"]}
									text={task["goal"]}
									completed={task["is_completed"]}
									handleDeleteTask={() => handleDelete(Number(task["id"]))}
									handleToggle={() => handleToggle(task["id"])}
									onSetTaskEdit={() =>
										setVisible({
											task: { ...task, category_id },
											visible: true,
										})
									}
								/>
							);
					})}
				</div>
			</CardDataOptions>
			<CardDataOptions
				title={t("completedTask")}
				callback={
					(event) => printingTask(event.target.closest("article"))
					//event?.target.print()
					// 	() => {
					// 	// eslint-disable-next-line no-console
					// 	//console.log(event?.target);
					// 	//() => window.print()
					// }
				}
			>
				<div className="column-card">
					{data.map((task: any) => {
						if (task["is_completed"])
							return (
								<Task
									key={task["id"]}
									text={task["goal"]}
									completed={task["is_completed"]}
									handleToggle={() => handleToggle(task["id"])}
								/>
							);
					})}
				</div>
			</CardDataOptions>
		</>
	);
};

export default TaskWidget;
