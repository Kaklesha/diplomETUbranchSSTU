import React, { useState } from "react";
import Title from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Atoms/Title/index";
import CardList from "user.InterfaceLayer/Libraries/IvanKosteev.library/Widgets/CardList/index";
import { useGetAllFishingQuery } from "business.InterfaceLayer/store/shared/entities/ivanKosteev.entities/todo.entity/redux/api";
import { addItem } from "business.InterfaceLayer/store/shared/entities/ivanKosteev.entities/todo.entity/redux/slice/CartSlice";
import { useAppDispatch } from "business.InterfaceLayer/store/services/hooks/redux";
import { useTranslation } from "react-i18next";

import * as ST from "../styled";

const MainComponent = () => {
	const { t } = useTranslation();
	const {
		data: products,
		error,
		isLoading,
	} = useGetAllFishingQuery({
		authToken: "",
		params: {
			name: "",
			image: "",
			price: 0,
			category: "",
			desciption: "",
			id: "",
		},
	});

	const catalogData = t("main.catalogData", { returnObjects: true });

	const dispatch = useAppDispatch();
	const handleAddToCart = (item: any) => {
		dispatch(addItem(item));
	};

	const [selectedCategory, setSelectedCategory] = useState("Все" || "Alle");

	const handleCategoryClick = (category: string) => {
		setSelectedCategory(category);
	};

	const filteredProducts =
		selectedCategory === "Все" || selectedCategory === "Alle"
			? products
			: products?.filter(
					(product: any) => product.category === selectedCategory
			  );

	return (
		<ST.container>
			<ST.div>
				<Title title={t("catalog.title")} />
				<CardList
					CatalogData={catalogData}
					error={error}
					isLoading={isLoading}
					handleAddToCart={handleAddToCart}
					handleCategoryClick={handleCategoryClick}
					filteredProducts={filteredProducts}
					selectedCategory={selectedCategory}
				/>
			</ST.div>
		</ST.container>
	);
};

export default MainComponent;
