import styled from "styled-components";
import Colors from "user.InterfaceLayer/Libraries/IvanKosteev.library/constants/colors";
import { fonts } from "user.InterfaceLayer/Libraries/IvanKosteev.library/constants/fonts";

export const order = styled.div`
	border-radius: 10px;
	border: 2px solid ${Colors.BG};
	margin-bottom: 30px;
`;
export const title = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	border-radius: 10px;
	background: ${Colors.BG};
	span {
		color: ${Colors.BLUE__PRIMARY};
	}
`;
export const data = styled.div``;
export const sub = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 20px;
`;
export const subMethods = styled.div``;

export const div = styled.div`
	color: ${Colors.CART__PRICE}
	font-family: ${fonts.textOrder.fontFamily};
	font-size: ${fonts.textOrder.fontSize};
	font-style: ${fonts.textOrder.fontStyle};
	font-weight: ${fonts.textOrder.fontWeight};
	line-height: ${fonts.textOrder.lineHeight};
`;

export const total = styled.div`
color: ${Colors.CART__PRICE}
	font-family: ${fonts.textOrder.fontFamily};
	font-size: ${fonts.textOrder.fontSize};
	font-style: ${fonts.textOrder.fontStyle};
	font-weight: ${fonts.textOrder.fontWeight};
	line-height: ${fonts.textOrder.lineHeight};
	`;

export const block = styled.div`
	flex-direction: column;
	padding: 15px 20px;
	display: flex;
	justify-content: space-between;
`;

export const btn = styled.button`
	display: inline-flex;
	padding: 15px 20px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 5px;
	border: 1px solid ${Colors.INPUT};
`;
