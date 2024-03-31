import React from "react";

import * as ST from "../styled/styled";

type Props = {
	text: any;
};

const Category = ({ text }: Props) => {
	return (
		<ST.a>
			{text.map((e: any) => (
				<a key={e.id}>{e.title}</a>
			))}
		</ST.a>
	);
};

export default Category;
