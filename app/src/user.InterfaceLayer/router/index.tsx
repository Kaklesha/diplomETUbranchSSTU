import React from "react";
import { RouteObject } from "react-router-dom";

import svyatoslavZhilinRoutes from "./routes/svyatoslavZhilin.route";
import RoutesPaths from "./routesPaths";
import ivanKosteevRoutes from "./routes/ivanKosteev.route";
import Error from "../Components/general.components/Error";
import kirillKornilovRoutesRoutes from "./routes/KirillKornilov.route";
import CheckAuth from "./services/Components/CheckAuth";

const mainRouter: RouteObject[] = [
	{
		path: RoutesPaths.MAIN,
		element: <CheckAuth />,
		errorElement: <Error />,
		children: [...svyatoslavZhilinRoutes , ...ivanKosteevRoutes, ...kirillKornilovRoutesRoutes],
	},
];

export default mainRouter;
