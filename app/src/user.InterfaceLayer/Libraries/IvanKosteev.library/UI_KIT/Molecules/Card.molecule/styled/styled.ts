import styled from "styled-components";

export const container = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const block = styled.div`
	width: 370px;
	margin: 40px 15px;
	height: 443px;
`;

export const title = styled.div`
	margin-top: 10px;
	height: 52px;
	color: var(--black, #0c1b32);
	font-family: Unbounded;
	font-size: 20px;
	font-style: normal;
	font-weight: 500;
`;

export const price = styled.div`
	margin: 10px 0;
	color: var(--black-2, #2f353d);
	font-family: Unbounded;
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
`;
export const image = styled.div`
	border-radius: 10px;
	height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
	& img {
		height: 100%;
		width: 100%;
	}
`;


export const btn = styled.div`
	width: 100%;
`;