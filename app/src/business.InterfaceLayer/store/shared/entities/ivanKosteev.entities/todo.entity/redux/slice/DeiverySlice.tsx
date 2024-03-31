import { createSlice } from "@reduxjs/toolkit";

interface DeliveryMethod {
	id: string;
	quantity: number;
	name: string;
	price: number;
	image: string;
}

interface DeliveryMethodsState {
	methods: DeliveryMethod[];
}

const initialState: DeliveryMethodsState = {
	methods: [],
};

export const deliveryMethodsSlice = createSlice({
	name: "deliveryMethods",
	initialState,
	reducers: {
		setDeliveryMethods: (state, action) => {
			state.methods = action.payload;
		},
		addDeliveryMethod: (state, action) => {
			state.methods.push(action.payload);
		},
	},
});

export const { setDeliveryMethods, addDeliveryMethod } =
	deliveryMethodsSlice.actions;
export const deliveryMethods = deliveryMethodsSlice.reducer;
