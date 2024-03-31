import React, { FC } from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout: FC = () => (
	<div>
		<div>
			<Link to={"/svyatoslavZhilin/last"}>last</Link>
		</div>
		<div>
			<Link to={"/svyatoslavZhilin"}>main</Link>
		</div>
		SvyatoslavZhilinMainLayout <Outlet />
	</div>
);

export default MainLayout;
