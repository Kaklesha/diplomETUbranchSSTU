import React, { useState } from "react";
import { useAppSelector } from "business.InterfaceLayer/store/services/hooks/redux";

import Orders from "../const";

const OrderHistory: React.FC = () => {
	const initialOrders = useAppSelector((state: any) => state.cart.orders);

	const [orders, setOrders] = useState(initialOrders);

	const handleClearOrder = (orderId: any) => {
		setOrders((prevOrders: any) =>
			prevOrders.filter((order: any) => order.id !== orderId)
		);
	};

	return (
		<Orders
			handleClearOrder={handleClearOrder}
			orders={orders}
		/>
	);
};

export default OrderHistory;
