import styled from "styled-components";

export const a = styled.div`
	& a {
		text-decoration: none;
		margin: 0 25px;
		color: var(--blue-100, #052b72);
		font-family: Open Sans;
		font-size: 12px;
		font-style: normal;
		font-weight: 700;
		line-height: 130%; /* 15.6px */
		text-transform: uppercase;

		&:hover {
			color: var(--blue-100, #052b72);
			cursor: pointer;
		}
	}
`;
