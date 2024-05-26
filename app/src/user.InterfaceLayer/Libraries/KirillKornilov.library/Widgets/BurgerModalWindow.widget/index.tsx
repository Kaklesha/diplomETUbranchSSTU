/* eslint-disable max-lines */
import React, {
	FunctionComponent,

} from "react";

import Button from "../../UI_KIT/Molecules/Button.molecule";
//import { Icons, Icon } from "../../UI_KIT/Atoms/Atom1/icons";
import ModalWindowWidgetType from "./type";
import * as S from "./styled";
import BurgerMenuWidget from "../BurgerMenu.widget";

const BurgerModalWindowWidget: FunctionComponent<ModalWindowWidgetType> = ({
	visible,
	setVisible,
	useGetCategoriesQuery,
	setCategory,
	setVisibleCatalog,
	useDeleteCategoryMutation
}) => {
	
	//alert(data);

	return (
		<S.modal_base display={visible ? "flex" : "none"}>
			<S.modal_window>

			<BurgerMenuWidget
						useGetCategoriesQuery={useGetCategoriesQuery}
						setCategory={setCategory}
						setVisibleCatalog={setVisibleCatalog}
						useDeleteCategoryMutation={useDeleteCategoryMutation}
					/>

				<S.modal_buttons>
				
					<div>
				
						<Button
							text="Закрыть"
							color="#29A19C"
							icon={false}
							onClick={() => {
								
								setVisible(false);
								
							}}
						/>
					</div>
				</S.modal_buttons>
			</S.modal_window>
		</S.modal_base>
	);
};

export default BurgerModalWindowWidget;
