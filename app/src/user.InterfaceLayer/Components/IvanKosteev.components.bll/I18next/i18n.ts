import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { de } from "./de";
/* eslint max-len: ["error", { "code": 200 }] */

const resources = {
	ru: {
		translation: {
			navbar: {
				logo: "Рыболовный магазин",
				NavbarText: [
					{
						id: 1,
						title: "Лодки",
					},
					{
						id: 2,
						title: "Приманки",
					},
					{
						id: 3,
						title: "Катушки",
					},
					{
						id: 4,
						title: "Стулья",
					},
				],
			},
			catalog: {
				title: "Каталог",
			},
			main: {
				catalogData: [
					{
						id: 1,
						title: "Все",
					},

					{
						id: 2,
						title: "Приманки",
					},
					{
						id: 3,
						title: "Катушки",
					},
					{
						id: 4,
						title: "Стулья",
					},

					{
						id: 5,
						title: "Лодки",
					},
				],
				button: "Добавить в корзину",
			},
			cart: {
				title: "Корзина",
				emptyCart: {
					paragragh: "Ваша корзина пуста",
					span: "Начните покупку",
				},
				cartTotal: {
					clearText: "Очистить корзину",
					total: "ИТОГО",
					title: "Товары",
					button: "Оформить заказ",
					quantity: "шт.",
				},
			},
			checkMethod: {
				paymentTitle: "Способ оплаты",
				deliveryTitle: "Способ Доставки",
			},
			footer: {
				lk: "Личный Кабинет",
			},
			account: {
				title: "Личный кабинет",
			},
		},
	},
	de,
};

i18n.use(initReactI18next).init({
	debug: true,
	lng: "ru",
	interpolation: {
		escapeValue: false,
	},
	resources,
});

export default i18n;
