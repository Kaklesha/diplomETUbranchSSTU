import React, { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";

import RoutesPaths from "../../routesPaths";
import Error from "../../../Components/general.components/Error";
import MainLayout from "../../../Layouts/SvyatoslavZhilin.layouts/Main.layout";
import svyatoslavZhilinRoutesPaths from "./svyatoslavZhilin.routesPaths";
import Loader from "../../../Components/general.components/Loader";

const LastPage = lazy(
	() => import("../../../Pages/SvyatoslavZhilin.pages/Last.page")
);

const MainPage = lazy(
	() => import("../../../Pages/SvyatoslavZhilin.pages/Main.page")
);

const svyatoslavZhilinRoutes: RouteObject[] = [
	{
		path: RoutesPaths.SVYATOSLAV_ZHILIN,
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
				path: svyatoslavZhilinRoutesPaths.LAST,
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

export default svyatoslavZhilinRoutes;
