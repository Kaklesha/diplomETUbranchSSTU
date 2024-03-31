import styled from "styled-components";
import Colors from "user.InterfaceLayer/Libraries/IvanKosteev.library/constants/colors";
import { fonts } from "user.InterfaceLayer/Libraries/IvanKosteev.library/constants/fonts";

export const title = styled.h3`
	color:${Colors.TEXT__PRIMARY}
	font-family: ${fonts.title.fontFamily};
	font-size: 24px;
	font-style: ${fonts.title.fontStyle};
	font-weight: ${fonts.title.fontWeight};
	line-height: ${fonts.title.lineHeight};
	margin-bottom:30px;
`;
