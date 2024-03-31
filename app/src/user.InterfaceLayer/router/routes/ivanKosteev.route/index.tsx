import React, { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";

import RoutesPaths from "../../routesPaths";
import Error from "../../../Components/general.components/Error";
import MainLayout from "../../../Layouts/IvanKosteev.layouts/Main.layout";
import Loader from "../../../Components/general.components/Loader";
import ivanKosteevRoutesPaths from "./ivanKosteev.routesPaths";

const CartPage = lazy(
	() => import("../../../Pages/IvanKosteev.pages/Cart.page")
);
const IdCardPage = lazy(
	() => import("../../../Pages/IvanKosteev.pages/IdCard.page")
);

const MainPage = lazy(
	() => import("../../../Pages/IvanKosteev.pages/Main.page")
);

const AccountPage = lazy(
	() => import("../../../Pages/IvanKosteev.pages/Account.page")
);
const CheckOutPage = lazy(
	() => import("../../../Pages/IvanKosteev.pages/CheckOut.page")
);

const ivanKosteevRoutes: RouteObject[] = [
	{
		path: RoutesPaths.IVAN_KOSTEEV,
		element: <MainLayout />,
		errorElement: <Error />,
		children: [
			{
				path: ivanKosteevRoutesPaths.FISHING,
				index: true,
				element: (
					<Suspense fallback={<Loader />}>
						<MainPage />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: ivanKosteevRoutesPaths.ACCOUNT,
				index: true,
				element: (
					<Suspense fallback={<Loader />}>
						<AccountPage />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: ivanKosteevRoutesPaths.CHECK,
				index: true,
				element: (
					<Suspense fallback={<Loader />}>
						<CheckOutPage />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: `${ivanKosteevRoutesPaths.FISHING}:id`,
				element: (
					<Suspense fallback={<Loader />}>
						<IdCardPage />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: ivanKosteevRoutesPaths.CART,
				element: (
					<Suspense fallback={<Loader />}>
						<CartPage />
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

export default ivanKosteevRoutes;
