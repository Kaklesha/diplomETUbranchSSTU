import styled from "styled-components";
import Colors from "user.InterfaceLayer/Libraries/IvanKosteev.library/constants/colors";
import { fonts } from "user.InterfaceLayer/Libraries/IvanKosteev.library/constants/fonts";

export const block = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	padding: 18px;
	margin: 20px 0;
	background: ${Colors.WHITE};
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
	border-radius: 30px;
`;

export const image = styled.div`
	border-radius: 10px;
	width: 150px;
	height: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	& img {
		height: 100%;
		width: 100%;
	}
`;
export const list = styled.div`
	margin-left: 23px;
`;

export const title = styled.div`
	margin-top: 10px;
	color: var(--black, ${Colors.TEXT__PRIMARY});
	font-family: ${fonts.primaryBtn.fontFamily};
	font-size: ${fonts.primaryBtn.fontSize};
	font-style: ${fonts.primaryBtn.fontStyle};
	font-weight: ${fonts.primaryBtn.fontWeight};
	line-height: ${fonts.primaryBtn.lineHeight};
`;

export const price = styled.div`
	margin-top: 10px;
	color: var(--black-2, ${Colors.CART__PRICE});
	font-family: ${fonts.cardPrice.fontFamily};
	font-size: ${fonts.cardPrice.fontSize};
	font-style: ${fonts.cardPrice.fontStyle};
	font-weight: ${fonts.cardPrice.fontWeight};
	line-height: ${fonts.cardPrice.lineHeight};
`;
export const count = styled.div`
	display: flex;
	margin-top: 10px;
	color: var(--black-2, ${Colors.CART__PRICE});
	font-family: ${fonts.cardPrice.fontFamily};
	font-size: ${fonts.cardPrice.fontSize};
	font-style: ${fonts.cardPrice.fontStyle};
	font-weight: ${fonts.cardPrice.fontWeight};
	line-height: ${fonts.cardPrice.lineHeight};
`;
export const count__svg = styled.div`
	svg {
		cursor: pointer;
		fill: var(--blue, ${Colors.BLUE__PRIMARY});
	}
`;

export const remove = styled.div`
	svg {
		cursor: pointer;
		top: 0;
		right: 0;
		position: absolute;
		width: 60px;
		height: 60px;
		fill: ${Colors.BLUE__PRIMARY};
		&:hover {
		}
	}
`;
export const count__counter = styled.div`
	margin: 0 10px;
`;
