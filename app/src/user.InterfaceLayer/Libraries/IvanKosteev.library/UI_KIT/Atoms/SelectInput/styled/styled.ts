import styled from "styled-components";
import Colors from "user.InterfaceLayer/Libraries/IvanKosteev.library/constants/colors";
import { fonts } from "user.InterfaceLayer/Libraries/IvanKosteev.library/constants/fonts";

export const Input = styled.input`
	padding: 20px 25px;
	margin-bottom: 15px;
	align-items: flex-start;
	gap: 10px;
	border-radius: 5px;
	border: 2px solid var(--black-70, ${Colors.INPUT});
`;
export const Reddit = styled.button`
	display: inline-flex;
	padding: 15px 20px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 5px;
	color: ${Colors.INPUT};
	text-align: center;
	font-family: ${fonts.secondaryBtn.fontFamily};
	font-size: ${fonts.secondaryBtn.fontSize};
	font-style: ${fonts.secondaryBtn.fontStyle};
	font-weight: ${fonts.secondaryBtn.fontWeight};
	line-height: ${fonts.secondaryBtn.lineHeight};
	letter-spacing: ${fonts.secondaryBtn.letterSpacing};
`;

export const block = styled.div`
	& a {
		display: inline-block;
		padding: 15px 25px;
		margin: 0 5px 10px 0;
		align-items: flex-start;
		gap: 10px;
		border-radius: 100px;
		background: var(--light-blue, #d9e3f8);
		color: var(--black, #0c1b32);
		font-family: Unbounded;
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
	}
`;
