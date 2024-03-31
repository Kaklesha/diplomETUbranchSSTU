import styled from "styled-components";
import Colors from "user.InterfaceLayer/Libraries/IvanKosteev.library/constants/colors";
import { fonts } from "user.InterfaceLayer/Libraries/IvanKosteev.library/constants/fonts";

export const Button = styled.button`
	border-radius: 5px;
	background: ${Colors.BLUE__PRIMARY};
	color: ${Colors.WHITE};
	width: 100%;
	padding: 20px 30px;
	justify-content: center;
	font-family: ${fonts.primaryBtn.fontFamily};
	font-size: ${fonts.primaryBtn.fontSize};
	font-style: ${fonts.primaryBtn.fontStyle};
	font-weight: ${fonts.primaryBtn.fontWeight};
	line-height: ${fonts.primaryBtn.lineHeight};
	letter-spacing: ${fonts.primaryBtn.letterSpacing};
`;
export const orders = styled.div`
	border-radius: 10px;
	border: 2px solid ${Colors.BG};
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
export const total = styled.div``;
export const span = styled.span``;
export const block = styled.div`
	padding: 15px 20px;
	display: flex;
	justify-content: space-between;
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
export const btn = styled.button`
	margin: 15px 0 15px 15px;
	display: inline-flex;
	padding: 15px 20px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 5px;
	border: 1px solid ${Colors.INPUT};
`;
