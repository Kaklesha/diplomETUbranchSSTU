import { createSlice } from "@reduxjs/toolkit";

import reducerPaths from "../../../../../../reducerPaths";

export enum ITodoEnum {
	id = "id",
	name = "nameMy",
}

export interface ITodoType {
	[ITodoEnum.id]: string;
	[ITodoEnum.name]: string;
}

export const initialTodoState: ITodoType = {
	[ITodoEnum.id]: "",
	[ITodoEnum.name]: "",
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