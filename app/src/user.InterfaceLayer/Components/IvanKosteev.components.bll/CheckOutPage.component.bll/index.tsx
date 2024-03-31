import {
	addOrder,
	clearCart,
	setDeliveryMethod,
	setPaymentMethod,
} from "business.InterfaceLayer/store/shared/entities/ivanKosteev.entities/todo.entity/redux/slice/CartSlice";
import React from "react";
import CheckOutWidget from "user.InterfaceLayer/Libraries/IvanKosteev.library/Widgets/CheckOut/index";
import {
	useAppDispatch,
	useAppSelector,
} from "business.InterfaceLayer/store/services/hooks/redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { payment, delivery } from "./const";

const CheckOutComponent: React.FC = () => {
	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const selectedPayment = useAppSelector(
		(state: any) => state.cart.paymentMethod
	);

	const selectedDelivery = useAppSelector(
		(state: any) => state.cart.deliveryMethod
	);

	const handleSelectPayment = (paymentType: string) => {
		dispatch(setPaymentMethod(paymentType));
	};

	const handleSelectDelivery = (deliveryType: string) => {
		dispatch(setDeliveryMethod(deliveryType));
	};

	const cart = useAppSelector((state) => state.cart);

	const handleCheckout = () => {
		const order = {
			items: cart.items.map((item) => ({ ...item })),
			total: cart.total,
			deliveryMethod: selectedDelivery,
			paymentMethod: selectedPayment,
		};
		dispatch(addOrder(order));
		dispatch(clearCart());
		navigate("/ivanKosteev/fishing/account");
	};

	const { t } = useTranslation();

	return (
		<>
			<CheckOutWidget
				selectedPayment={selectedPayment}
				selectedDelivery={selectedDelivery}
				handleSelectPayment={handleSelectPayment}
				handleSelectDelivery={handleSelectDelivery}
				handleCheckout={handleCheckout}
				delivery={delivery}
				payment={payment}
				textPaymentTitle={t("checkMethod.paymentTitle")}
				textDeliveryTitle={t("checkMethod.deliveryTitle")}
				textTitle={t("cart.cartTotal.title")}
				textButton={t("cart.cartTotal.button")}
				textQuantity={t("cart.cartTotal.quantity")}
				textTotal={t("cart.cartTotal.total")}
			/>
		</>
	);
};

export default CheckOutComponent;
