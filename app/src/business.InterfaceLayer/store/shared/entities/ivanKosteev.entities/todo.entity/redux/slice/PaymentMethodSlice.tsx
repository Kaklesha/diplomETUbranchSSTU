import { createSlice } from "@reduxjs/toolkit";

interface PaymentMethod {
	id: string;
	name: string;
	description: string;
}

interface PaymentMethodsState {
	methods: PaymentMethod[];
}

const initialState: PaymentMethodsState = {
	methods: [],
};

export const paymentMethodsSlice = createSlice({
	name: "paymentMethods",
	initialState,
	reducers: {
		setPaymentMethods: (state, action) => {
			state.methods = action.payload;
		},
		addPaymentMethod: (state, action) => {
			state.methods.push(action.payload);
		},
	},
});

export const { setPaymentMethods, addPaymentMethod } =
	paymentMethodsSlice.actions;
export const paymentMethods = paymentMethodsSlice.reducer;
