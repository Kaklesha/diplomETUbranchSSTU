import React from "react";
import { Link } from "react-router-dom";

import Button from "../../../Atoms/Button/index/Button";
import * as ST from "../styled/styled";
interface CheckTotalProps {
	total: any;
	type: any;
	quantity: any;
	link: any;
	textButton: any;
	textTitle: any;
	textQuantity: any;
	textTotal: any;
	handleCheckout: any;
}

const CheckTotal: React.FC<CheckTotalProps> = ({
	total,
	type,
	quantity,
	link,
	textTitle,
	textButton,
	textQuantity,
	textTotal,
	handleCheckout,
}: CheckTotalProps) => {
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
			<div onClick={handleCheckout}>
				<Link to={link}>
					<Button
						desciption={textButton}
						type={type}
					/>
				</Link>
			</div>
		</ST.total>
	);
};

export default CheckTotal;
