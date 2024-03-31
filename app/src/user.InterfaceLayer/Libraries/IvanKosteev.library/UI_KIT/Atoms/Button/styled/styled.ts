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
