import React from "react";
import { Link } from "react-router-dom";

import * as ST from "../styled/styled";

type Props = {
	desciption: string;
};

const Logo = ({ desciption }: Props) => {
	return (
		<Link to={"/ivanKosteev/fishing"}>
			<ST.Logo>{desciption}</ST.Logo>
		</Link>
	);
};

export default Logo;
