import styled from "styled-components";
import Colors from "user.InterfaceLayer/Libraries/IvanKosteev.library/constants/colors";
import { fonts } from "user.InterfaceLayer/Libraries/IvanKosteev.library/constants/fonts";

export const container = styled.div`
	margin: 40px 0 385px 0;
`;

export const block = styled.div`
	// display: flex;
	// justify-content: space-between;
	// flex-wrap: wrap;
`;

export const cart = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;
export const cart__block = styled.div`
	max-width: 700px;
	width: 100%;
	margin-top: -20px;
`;

export const total = styled.div``;

export const btn = styled.button`
	position: absolute;
	top: 50px;
	right: 0;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	max-width: 1200px;
	padding: 0 - 15px;
	margin: 0 auto;
	border-radius: 5px;
	border: 1px solid ${Colors.WHITE};
	background: ${Colors.LOGO};
	color: ${Colors.WHITE};
	padding: 20px 30px;
	font-family: ${fonts.secondaryBtn.fontFamily};
	font-size: ${fonts.secondaryBtn.fontSize};
	font-style: ${fonts.secondaryBtn.fontStyle};
	font-weight: ${fonts.secondaryBtn.fontWeight};
	line-height: ${fonts.secondaryBtn.lineHeight};
	letter-spacing: ${fonts.secondaryBtn.letterSpacing};
`;
