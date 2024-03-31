import styled from "styled-components";
import { fonts } from "user.InterfaceLayer/Libraries/IvanKosteev.library/constants/fonts";
import Colors from "user.InterfaceLayer/constants/colors";

export const Button = styled.button`
	border-radius: 5px;
	border: 1px solid ${Colors.WHITE};
	background: ${Colors.TRANSPARENT};
	color: ${Colors.WHITE};
	padding: 20px 30px;
	font-family: ${fonts.secondaryBtn.fontFamily};
	font-size: ${fonts.secondaryBtn.fontSize};
	font-style: ${fonts.secondaryBtn.fontStyle};
	font-weight: ${fonts.secondaryBtn.fontWeight};
	line-height: ${fonts.secondaryBtn.lineHeight};
	letter-spacing: ${fonts.secondaryBtn.letterSpacing};
`;
