import React from "react";

import ButtonCatalog from "../../../Atoms/ButtonCatalog/index/Button";
import { CatalogProps } from "../type";

const Catalog: React.FC<CatalogProps> = ({
	handleCategoryClick,
	selectedCategory,
	CatalogData,
}: CatalogProps) => {
	return (
		<>
			{CatalogData.map((e: any) => (
				<ButtonCatalog
					key={e.id}
					description={e.title}
					handleTitleClick={() => handleCategoryClick(e.title)}
					active={selectedCategory === e.title}
				/>
			))}
		</>
	);
};

export default React.memo(Catalog);
