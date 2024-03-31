import React from "react";
import { Link } from "react-router-dom";

import Button from "../../../Atoms/Button/index/Button";
import * as ST from "../styled/styled";
 interface CartTotalProps {
		total: any;
		type: any;
		quantity: any;
		link: any;
		textButton: any;
		textTitle: any;
		textQuantity: any;
		textTotal: any;
 }

 const CartTotal: React.FC<CartTotalProps> = ({
		total,
		type,
		quantity,
		link,
		textTitle,
		textButton,
		textQuantity,
		textTotal,
 }: CartTotalProps) => {
		return (
			<ST.total>
				<ST.block>
					<ST.title>{textTotal}:</ST.title>
					<ST.price> {total} ₽</ST.price>
				</ST.block>
				<ST.block>
					<ST.subtitle>{textTitle}</ST.subtitle>
					<ST.quantity>
						{quantity} {textQuantity}
					</ST.quantity>
				</ST.block>
				<Link to={link}>
					<Button
						desciption={textButton}
						type={type}
					/>
				</Link>
			</ST.total>
		);
 };

export default CartTotal;
