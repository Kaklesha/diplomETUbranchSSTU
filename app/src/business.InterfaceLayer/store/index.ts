import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import reducerPaths from "./reducerPaths";
import { todoApi } from "./shared/entities/svyatoslavZhilin.entities/todo.entity/redux/api";
import { todoReducer } from "./shared/entities/svyatoslavZhilin.entities/todo.entity/redux/slice";
import { fishingApi } from "./shared/entities/ivanKosteev.entities/todo.entity/redux/api";
import { cartReducer } from "./shared/entities/ivanKosteev.entities/todo.entity/redux/slice/CartSlice";
import { signApi } from "./shared/entities/kirillKornilov.entities/sign.entity/redux/api";
import { goodsApi } from "./shared/entities/kirillKornilov.entities/task.entity/redux/api";


const allSliceReducersReducer = combineReducers({
	// [reducerPaths.auth]: authReducer,
	[fishingApi.reducerPath]: fishingApi.reducer,
	[todoApi.reducerPath]: todoApi.reducer,
	[goodsApi.reducerPath]: goodsApi.reducer,
	[signApi.reducerPath]: signApi.reducer,
	[reducerPaths.cart]: cartReducer,
	[reducerPaths.todo]: todoReducer,
});

export const store = configureStore({
	reducer: allSliceReducersReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(todoApi.middleware,goodsApi.middleware,signApi.middleware, fishingApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;