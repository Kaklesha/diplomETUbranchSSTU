import { createSlice } from "@reduxjs/toolkit";

import reducerPaths from "../../../../../../reducerPaths";

export enum ITodoEnum {
	id = "id",
	name = "name",
	price = "price",
	image = "image",
	category = "category",
}

export interface ITodoType {
	[ITodoEnum.id]: string;
	[ITodoEnum.name]: string;
	[ITodoEnum.price]: number;
	[ITodoEnum.image]: string;
	[ITodoEnum.category]: string;
}

export const initialTodoState: ITodoType = {
	[ITodoEnum.id]: "",
	[ITodoEnum.name]: "",
	[ITodoEnum.price]: 0,
	[ITodoEnum.image]: "",
	[ITodoEnum.category]: "",
};

export const todoSlice = createSlice({
	name: reducerPaths.todo,
	initialState: initialTodoState,
	reducers: {
		undefined() {
			return initialTodoState;
		},
	},
});

export const todoActions = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
