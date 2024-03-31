import React from "react";
import Title from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Atoms/Title/index";
import CartList from "user.InterfaceLayer/Libraries/IvanKosteev.library/Widgets/CartList/index";
import { useTranslation } from "react-i18next";

import * as ST from "../styled";

const CartComponent = () => {
	const { t } = useTranslation();

	return (
		<ST.container>
			<Title title={t("cart.title")} />

			<CartList
				paragragh={t("cart.emptyCart.paragragh")}
				span={t("cart.emptyCart.span")}
				textTitle={t("cart.cartTotal.title")}
				textButton={t("cart.cartTotal.button")}
				textQuantity={t("cart.cartTotal.quantity")}
				textTotal={t("cart.cartTotal.total")}
				clearText={t("cart.cartTotal.clearText")}
			/>
		</ST.container>
	);
};

export default CartComponent;
