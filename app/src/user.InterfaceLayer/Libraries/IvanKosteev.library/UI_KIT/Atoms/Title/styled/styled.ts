import styled from "styled-components";
import Colors from "user.InterfaceLayer/Libraries/IvanKosteev.library/constants/colors";
import { fonts } from "user.InterfaceLayer/Libraries/IvanKosteev.library/constants/fonts";

export const div = styled.div`
	margin-bottom: 40px;
	color: var(--black, ${Colors.BG__FOOTER});
	font-family: ${fonts.title.fontFamily};
	font-size: ${fonts.title.fontSize};
	font-style: ${fonts.title.fontStyle};
	font-weight: ${fonts.title.fontWeight};
	line-height: ${fonts.title.lineHeight};
`;
