import React, { FC } from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout: FC = () => (
	<div>
		<div>
			<Link to={"/kirillKornilov/last"}> </Link>
		</div>
		<div>
			<Link to={"/kirillKornilov"}> </Link>
		</div>
		<div>
			<Link to={"/kirillKornilov/sign"}> </Link>
		</div>
		<Outlet />
	</div>
);

export default MainLayout;
