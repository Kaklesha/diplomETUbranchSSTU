import React, { FC } from "react";

import * as ST from "./styled";
import Portal from "../services/Portal";

type Props = {
	children: JSX.Element;
};

const ToasterModalWindow: FC<Props> = ({ children }) => {
	return (
		<Portal>
			<ST.ModalToaster>{children}</ST.ModalToaster>
		</Portal>
	);
};
export default ToasterModalWindow;
