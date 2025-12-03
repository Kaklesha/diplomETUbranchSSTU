import React, { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";

import RoutesPaths from "../../routesPaths";
import Error from "../../../Components/general.components/Error";
import kirillKornilovRoutesPaths from "./kirillKornilov.routesPaths";
import Loader from "../../../Components/general.components/Loader";
import MainLayout from "../../../Layouts/KirillKornilov.layouts/Main.layout";

const LastPage = lazy(
	() => import("../../../Pages/KirillKornilov.pages/Last.page")
);

const MainPage = lazy(
	() => import("../../../Pages/KirillKornilov.pages/Main.page")
);
const SignPage = lazy(
	() => import("../../../Pages/KirillKornilov.pages/Sign.page")
);
const RegisterPage = lazy(
	() => import("../../../Pages/KirillKornilov.pages/Register.page")
);


const kirillKornilovRoutesRoutes: RouteObject[] = [
	{
		path: RoutesPaths.KIRILL_KORNILOV,
		element: <MainLayout />,
		errorElement: <Error />,
		children: [
			
			{
				index: true,
				element: (
					<Suspense fallback={<Loader />}>
						<MainPage />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: kirillKornilovRoutesPaths.SIGN,
				element: (
					<Suspense fallback={<Loader />}>
						<SignPage />
					</Suspense>
				),
				errorElement: <Error />,
			},	
			{
				path: kirillKornilovRoutesPaths.REGISTER,
				element: (
					<Suspense fallback={<Loader />}>
						<RegisterPage />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: kirillKornilovRoutesPaths.LAST,
				element: (
					<Suspense fallback={<Loader />}>
						<LastPage />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: RoutesPaths.NOT_FOUND,
				element: <div>страницы нет</div>,
			},
		],
	},
];

export default kirillKornilovRoutesRoutes;
