export const payment = [
	{ id: 1, name: "Картой курьеру", method: "payment", type: "card" },
	{ id: 2, name: "Наличными курьеру", method: "payment", type: "cash" },
	{
		id: 3,
		name: "Картой при самовывозе",
		method: "payment",
		type: "card_self",
	},
	{
		id: 4,
		name: "Наличными при самовывозе",
		method: "payment",
		type: "cash_self",
	},
];

export const delivery = [
	{ id: 1, name: "Курьером", method: "delivery", type: "courier" },
	{ id: 2, name: "Самовывоз", method: "delivery", type: "self" },
];
