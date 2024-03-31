import React from "react";

import * as ST from "../styled/styled";

type Props = {
	name: any;
	image: any;
	price: any;
	quantity: any;
};

const OrderBlock = ({ name, image, price, quantity }: Props) => {
	return (
		<ST.orders>
			<ST.imagesBl>
				<ST.image>
					<img
						src={image}
						alt={name}
					/>
				</ST.image>
				<ST.name>{name}</ST.name>
			</ST.imagesBl>
			<ST.quantity>{quantity} шт.</ST.quantity>
			<ST.price>{price}</ST.price>
		</ST.orders>
	);
};

export default OrderBlock;
