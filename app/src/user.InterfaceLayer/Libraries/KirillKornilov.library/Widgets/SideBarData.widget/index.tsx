import React, { FunctionComponent, useContext } from "react";
import { UserIdContext } from "user.InterfaceLayer/Components/KirillKornilov.components.bll/MainPage.component.bll copy";
import { useTranslation } from "react-i18next";
import {Link} from "react-router-dom";

import "../i18n.widget/i18n";
import Logo from "../../UI_KIT/Molecules/Logo.molecule";
import { Icons } from "../../UI_KIT/Atoms/Atom1/icons";
import SidebarDataItem from "../../UI_KIT/Molecules/SidebarDataItem.molecule";
import * as S from "./styled";
import SidebarDataWidgetType from "./type";
import { UserCategory } from "../Main.widget";

//const userId = useContext(UserIdContext);
//const SidebarDataWidget= () => {
const SidebarDataWidget: FunctionComponent<SidebarDataWidgetType> = ({
	useGetCategoriesQuery,
	setCategory,
	setVisibleCatalog,
	useDeleteCategoryMutation,
}) => {
	//const {useGetCategoriesQuery} = props;

	const { t } = useTranslation();

	const userId = useContext(UserIdContext);
	//alert(userId);

	const userCategory = useContext(UserCategory);

    const [deleteCategory]=useDeleteCategoryMutation();

    const handleDeleteCategory=  async (category_id:number)=>{
		const putUserCategory=userCategory;
        await deleteCategory(category_id);
		if(putUserCategory==category_id){setCategory(1);}
		else setCategory(putUserCategory);
		
    };

	const { data, isLoading } = useGetCategoriesQuery(userId);
	if (isLoading) return <h1>isLoading</h1>;


	return (
		<S.side_bar_box>
			<Logo />
			<>
				<S.data_name>{t("sidebar.categories")}</S.data_name>

				<S.data_items>
					<div
						key={1}
						onClick={() => setCategory(1)}
					>
						<SidebarDataItem
							text={t("sidebar.home")}
							color="#000"
							icon={Icons.House}
							active={userCategory == 1 ? true : false}
						/>
					</div>
					<div
						key={2}
						onClick={() => setCategory(2)}
					>
						<SidebarDataItem
							text={t("sidebar.family")}
							color="#000"
							icon={Icons.Family}
							active={userCategory == 2 ? true : false}
						/>
					</div>
					<div
						key={3}
						onClick={() => setCategory(3)}
					>
						<SidebarDataItem
							text={t("sidebar.job")}
							color="#000"
							icon={Icons.Job}
							active={userCategory == 3 ? true : false}
						/>
					</div>
					<div
						key={4}
						onClick={() => setCategory(4)}
					>
						<SidebarDataItem
							text={t("sidebar.sport")}
							color="#000"
							icon={Icons.Sport}
							active={userCategory == 4 ? true : false}
						/>
					</div>

					{data.map((user: any) => {
						if (user["id"] <= 4) return;

						return (
							<div
								key={user["id"]}
								onClick={() => setCategory(user["id"])}
							>
								<SidebarDataItem
                                    onDelete={()=>{handleDeleteCategory(Number(user["id"]));}}
									text={user["name"]}
									color="#000"
									icon={Icons.Star}
									active={userCategory == user["id"] ? true : false}
								/>
							</div>
						);
					})}
					<div onClick={() => setVisibleCatalog(true)}>
						<SidebarDataItem
							text={t("sidebar.add")}
							color="#29A19C"
							icon={Icons.ReactPlus}
							active={false}
						/>
					</div>
				</S.data_items>
			</>
	{/* useDeleteCategoryMutation={useDeleteCategoryMutation} */}
			
			<S.exit>
				<Link to="/kirillKornilov/sign" >  
				<SidebarDataItem
					text={t("sidebar.exit")}
					color="#000"
					icon={Icons.Exit}
					active={false}

				/>
					</Link>
			</S.exit>
		
		</S.side_bar_box>
	);
};

export default SidebarDataWidget;
