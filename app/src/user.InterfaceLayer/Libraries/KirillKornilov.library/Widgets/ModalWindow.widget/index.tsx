/* eslint-disable max-lines */
import React, { FunctionComponent, useContext, useState,useEffect } from "react";
import { UserIdContext } from "user.InterfaceLayer/Components/KirillKornilov.components.bll/MainPage.component.bll copy";

import Button from "../../UI_KIT/Molecules/Button.molecule";
//import { Icons, Icon } from "../../UI_KIT/Atoms/Atom1/icons";
import ModalWindowWidgetType from "./type";
import * as S from "./styled";

const ModalWindowWidget: FunctionComponent<ModalWindowWidgetType> = ({
	visible,
	setVisible,
	useGetCategoriesQuery,
	useAddTasksMutation,
	category
}) => {
	const datetime = new Date();

	const year = datetime.getFullYear();
	const month =
		(datetime.getMonth() + 1).toString().length > 1
			? datetime.getMonth() + 1
			: "0" + (datetime.getMonth() + 1);
	const day =
		(datetime.getDate() + 1).toString().length > 1
			? datetime.getDate() + 1
			: "0" + (datetime.getDate() + 1);

	// const time = `${years}:${months}:${seconds}`;

	const userId = useContext(UserIdContext);

	const [value, setValue] = useState("2");
	const [valueCategory, setValueCategory] = useState("1");
	const [valueDate, setValueDate] = useState(`${year}-${month}-${day}`);
	const [valueGoal, setValueGoal] = useState("");
	//const userCategory = useContext(UserCategory);

	useEffect(()=>{
		
		setValueCategory(`${category}`);
		
	},[category]);
	const [addTask] = useAddTasksMutation();

	const { data, isLoading } = useGetCategoriesQuery(userId);

	if (isLoading) return <h1>isLoading</h1>;

	const handleAddTask = async () => {
		await addTask({
			category_id: Number(valueCategory),
			user_id: Number(userId),
			goal: valueGoal,
			is_completed: false,
			deadline: `${valueDate}T00:00:00Z`,
			priority: Number(value),
		});

		// [{"id":1,"category_id":1,"user_id":1,"goal":"Полить цветы",
		// "is_completed":false,"deadline":"2002-05-11T00:00:00Z","priority":0}
	};

	//alert(data);

	return (
		<S.modal_base
		display={visible ? "flex" : "none" }
		>
			<S.modal_window>
				<S.modal_title>
					<p>Добавить новую задачу</p>
					<select>
						<option
							value=""
							disabled
							selected
						>
							Выбрать шаблон
						</option>
						<option value="Template">Template</option>
					</select>
				</S.modal_title>
				<S.modal_task_name>
					<p>Что нужно сделать?</p>
					<input
						type="text"
						value={valueGoal}
						onChange={(e) => setValueGoal(e.target.value)}
					/>
				</S.modal_task_name>
				<S.modal_parameters>
					<div>
						<p>Категория</p>
						<select
							value={valueCategory}
							onChange={(e) => setValueCategory(e.target.value)}
						>

							{data.map((user: any) => {
								return (
									<option
										key={user["id"]}
										value={user["id"]}
									>
										{user["name"]}
									</option>
								);

								// (<div key={user["id"]} onClick={()=>setCategory(user["id"])}>
								// <SidebarDataItem text={user["name"]} color="#000" icon={Icons.Star} active={userCategory==user["id"]?true:false}/>
								// </div>);
							})}
						</select>
					</div>
					<div>
						<p>Когда?</p>

						<S.sd_container>
							<input
								className="sd"
								type="date"
								name="selected_date"
								value={valueDate}
								onChange={(e) => setValueDate(e.target.value)}
							/>
						</S.sd_container>
					</div>
					<div>
						<p>Приоритет задачи</p>
						<select
							value={value}
							onChange={(e) => setValue(e.target.value)}
						>
							<option value="1">Важный</option>
							<option value="2">Обычный</option>
							<option value="3">Неважный</option>
						</select>

					</div>
				</S.modal_parameters>
				<S.modal_buttons>
					<Button
						text="Отменить"
						color="#F05454"
						icon={false}
						onClick={() => setVisible(false)}
					/>
					<div>
						<Button
							text="Сохранить как шаблон"
							color="#29A19C"
							icon={false}
						/>
						<Button
							text="Добавить"
							color="#29A19C"
							icon={false}
							onClick={() => {handleAddTask();setVisible(false);setValueGoal("");}}
						/>
					</div>
				</S.modal_buttons>
			</S.modal_window>
		</S.modal_base>
	);
};

export default ModalWindowWidget;
