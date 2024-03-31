import styled from "styled-components";
import Colors from "user.InterfaceLayer/Libraries/IvanKosteev.library/constants/colors";
import { fonts } from "user.InterfaceLayer/Libraries/IvanKosteev.library/constants/fonts";

export const container = styled.div`
	justify-content: space-between;
	align-items: flex-start;
	display: flex;
	transition: all 0.3s ease-in-out;
`;
export const title = styled.h3`
	color:${Colors.TEXT__PRIMARY}
	font-family: ${fonts.title.fontFamily};
	font-size: 24px;
	font-style: ${fonts.title.fontStyle};
	font-weight: ${fonts.title.fontWeight};
	line-height: ${fonts.title.lineHeight};
	margin-bottom:30px;
`;

export const select = styled.div`
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: flex-start;
	display: flex;
	transition: all 0.3s ease-in-out;
	max-width: 270px;
	& button {
		margin-bottom: 20px;
		width: 100%;
	}
`;

export const form = styled.div`
	padding: 30px 60px;
	border-radius: 5px;
	background: var(--white, ${Colors.WHITE});
	width: 750px;
	display: inline-block;
`;
