import React, { FC } from "react";
import { Link, Outlet } from "react-router-dom";

// import Navbar from "user.InterfaceLayer/Libraries/SvyatoslavZhilin.library/UI_KIT/Molecules/Navbar.molecule/const/Navbar";
import * as ST from "./styled";

const KosteevLayout: FC = () => (
	<ST.bg>
		<div style={{ padding: 20 }}>
			<Link to={"/ivanKosteev"}>main кнопка</Link>
		</div>
		<div style={{ padding: 20 }}>
			<Link to={"/ivanKosteev/fishing"}>Рыболовный магазин</Link>
		</div>

		<Outlet />
	</ST.bg>
);

export default KosteevLayout;
