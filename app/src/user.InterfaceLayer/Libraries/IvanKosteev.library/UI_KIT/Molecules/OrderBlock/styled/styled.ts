import styled from "styled-components";
import Colors from "user.InterfaceLayer/Libraries/IvanKosteev.library/constants/colors";
import { fonts } from "user.InterfaceLayer/Libraries/IvanKosteev.library/constants/fonts";

export const orders = styled.div`
	padding: 15px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const imagesBl = styled.div`
	display: flex;
	justify-content: space-between;
`;
export const image = styled.div`
	max-width: 75px;
	margin-right: 10px;
	& img {
		width: 100%;
		height: 60px;
	}
`;
export const name = styled.div`
	width: 217px;
	display: flex;
	align-items: center;
	color: ${Colors.CART__PRICE}
	font-family: ${fonts.textOrder.fontFamily};
	font-size: ${fonts.textOrder.fontSize};
	font-style: ${fonts.textOrder.fontStyle};
	font-weight: ${fonts.textOrder.fontWeight};
	line-height: ${fonts.textOrder.lineHeight};
`;
export const quantity = styled.div`
	color: ${Colors.CART__PRICE}
	font-family: ${fonts.textOrder.fontFamily};
	font-size: ${fonts.textOrder.fontSize};
	font-style: ${fonts.textOrder.fontStyle};
	font-weight: ${fonts.textOrder.fontWeight};
	line-height: ${fonts.textOrder.lineHeight};
`;
export const price = styled.div`
	color: ${Colors.CART__PRICE}
	font-family: ${fonts.textOrder.fontFamily};
	font-size: ${fonts.textOrder.fontSize};
	font-style: ${fonts.textOrder.fontStyle};
	font-weight: ${fonts.textOrder.fontWeight};
	line-height: ${fonts.textOrder.lineHeight};
`;
