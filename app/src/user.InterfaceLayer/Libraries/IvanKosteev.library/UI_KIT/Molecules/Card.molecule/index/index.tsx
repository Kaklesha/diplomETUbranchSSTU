import React from "react";
import Button from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Atoms/Button/index/Button";
import { useTranslation } from "react-i18next";

import * as ST from "../styled/styled";

type Props = {
	// id: number;
	image: string;
	price: number;
	name: string;

	handleAddToCart: any;
};

const Card = ({ name, image, price, handleAddToCart }: Props) => {
	const { t } = useTranslation();

	return (
		<ST.container>
			<ST.block>
				<ST.image>
					<img
						src={image}
						alt={name}
					/>
				</ST.image>
				<ST.title>{name}</ST.title>
				<ST.price>{price} ₽</ST.price>
				<ST.btn onClick={handleAddToCart}>
					<Button
						type=""
						desciption={t("main.button")}
					/>
				</ST.btn>
			</ST.block>
		</ST.container>
	);
};

export default Card;
