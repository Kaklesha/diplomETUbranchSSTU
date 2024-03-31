import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { store } from "./business.InterfaceLayer/store";
import mainRouter from "./user.InterfaceLayer/router";
import ToasterModalWindow from "./user.InterfaceLayer/Components/general.components/ModalWindows/Toaster.modalWindow";

import "./user.InterfaceLayer/styles/global.css";
import "user.InterfaceLayer/styles/default.css";
import "user.InterfaceLayer/styles/global.css";
import "user.InterfaceLayer/styles/scrollbar.css";
import "user.InterfaceLayer/styles/fonts.css";

const element = document.getElementById("app") as HTMLElement;
const root = ReactDOM.createRoot(element);
const routers = createBrowserRouter(mainRouter);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={routers} />
		</Provider>
		<ToasterModalWindow>
		<Toaster
			position="bottom-left"
			reverseOrder={false}
		/>
	</ToasterModalWindow>
	</React.StrictMode>
);
