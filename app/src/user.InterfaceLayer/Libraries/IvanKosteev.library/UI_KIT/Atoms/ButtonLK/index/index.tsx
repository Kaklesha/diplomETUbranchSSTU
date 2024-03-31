import React from "react";

import * as ST from "../styled/styled";

type Props = {
	desciption: string;
};

const ButtonLK = ({ desciption }: Props) => <ST.Button>{desciption}</ST.Button>;

export default ButtonLK;
