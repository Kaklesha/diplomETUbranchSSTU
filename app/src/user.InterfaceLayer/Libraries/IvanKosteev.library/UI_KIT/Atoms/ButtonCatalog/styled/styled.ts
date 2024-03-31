import styled from "styled-components";
import Colors from "user.InterfaceLayer/Libraries/IvanKosteev.library/constants/colors";
import { fonts } from "user.InterfaceLayer/Libraries/IvanKosteev.library/constants/fonts";

export const Button = styled.button`
	display: inline-block;
	padding: 15px 25px;
	margin: 0 5px;
	align-items: flex-start;
	gap: 10px;
	border-radius: 100px;
	background: var(--light-blue, ${Colors.CATALOG__BG});
	color: var(--black, ${Colors.BG__FOOTER});
	font-family: ${fonts.primaryBtn.fontFamily};
	font-size: ${fonts.primaryBtn.fontSize};
	font-style: ${fonts.primaryBtn.fontStyle};
	font-weight: ${fonts.primaryBtn.fontWeight};
	line-height: ${fonts.primaryBtn.lineHeight};
	letter-spacing: ${fonts.primaryBtn.letterSpacing};
	border: 2px solid transparent;
	transition: all 0.3s;
	&:hover {
		border: 2px solid var(--blue, ${Colors.BLUE__PRIMARY});
		background: var(--light-blue, ${Colors.CATALOG__BG});
		color: var(--black, ${Colors.BG__FOOTER});
	}
`;
