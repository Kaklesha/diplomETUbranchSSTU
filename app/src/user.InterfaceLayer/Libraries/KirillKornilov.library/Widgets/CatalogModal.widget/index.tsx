import React, { FunctionComponent, useContext, useState } from "react";
import { UserIdContext } from "user.InterfaceLayer/Components/KirillKornilov.components.bll/MainPage.component.bll copy";

import Button from "../../UI_KIT/Molecules/Button.molecule";
import CatalogModalWidgetType from "./type";
import * as S from "./styled";

const CatalogModalWidget: FunctionComponent<CatalogModalWidgetType> = ({
	visible,
	setVisibleCatalog,
	usePostCategoryMutation,
}) => {

	const [valueCategory,setValueCategory]=useState("");
	const [addCategory] = usePostCategoryMutation();
	const userId = useContext(UserIdContext);
	const handleAddCategory = async () => {
		await addCategory({user_id:userId,name:valueCategory});
	};

	return (
		<S.modal_base display={visible ? "flex" : "none"}>
			<S.modal_window>
				<S.modal_title>
					<p>Добавить категорию</p>
				</S.modal_title>
				<S.modal_category>
					<p>Название категории</p>
					<input value={valueCategory}  onChange={(e)=>setValueCategory(e.target.value)} type="text" />
				</S.modal_category>
				<S.modal_button>
					<Button
						onClick={() =>{ setVisibleCatalog(false);setValueCategory("");}}
						text="Отменить"
						color="#F05454"
						icon={false}
					/>
					<Button
						onClick={()=>{handleAddCategory();setVisibleCatalog(false);setValueCategory("");}}
						text="Добавить"
						color="#29A19C"
						icon={false}
					/>
				</S.modal_button>
			</S.modal_window>
		</S.modal_base>
	);
};

export default CatalogModalWidget;
