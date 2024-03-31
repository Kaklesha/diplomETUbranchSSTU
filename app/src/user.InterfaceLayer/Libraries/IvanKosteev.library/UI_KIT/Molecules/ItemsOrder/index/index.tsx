import React from "react";

import * as ST from "../styled/styled";

type Props = {
	name: any;
	image: any;
	price: any;
	data: any;
	quantity: any;
};

const ItemsOrder = ({ name, image, price, data, quantity }: Props) => {
	return (
		<>
			<ST.orders>
				<ST.title>
					<ST.data>
						Заказ <span>от {data}</span>
					</ST.data>
					<ST.total>
						<span>Total ₽</span>
					</ST.total>
				</ST.title>
				<ST.block>
					<ST.imagesBl>
						<ST.image>
							<img
								src={image}
								alt={name}
							/>
						</ST.image>
						<ST.name>{name}</ST.name>
					</ST.imagesBl>
					<ST.quantity>{quantity}</ST.quantity>
					<ST.price>{price}</ST.price>
				</ST.block>
				<ST.btn>Удалить заказ</ST.btn>
			</ST.orders>
		</>
	);
};

export default ItemsOrder;
