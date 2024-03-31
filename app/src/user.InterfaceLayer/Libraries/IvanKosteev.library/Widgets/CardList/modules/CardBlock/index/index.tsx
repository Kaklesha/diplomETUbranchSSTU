import React from "react";
import Card from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Molecules/Card.molecule/index";

import { CardBlockProps } from "../type";

const CardBlock: React.FC<CardBlockProps> = ({
	filteredProducts,
	error,
	isLoading,
	handleAddToCart,
}: CardBlockProps) => {
	return (
		<>
			{isLoading ? (
				<p>Loading.....</p>
			) : error ? (
				<p>Ошибка загрузки с сервера</p>
			) : (
				<>
					{filteredProducts?.map((product: any) => (
						<Card
							key={product.id}
							name={product.name}
							image={product.image}
							price={product.price}
							handleAddToCart={() => handleAddToCart(product)}
						/>
					))}
				</>
			)}
		</>
	);
};

export default CardBlock;
