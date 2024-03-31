import styled from "styled-components";

export const Input = styled.input`
	appearance: none;
	position: relative;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 2px solid #d0d0d0;
	transition: all 0.3s ease-in-out;
	margin-right: 10px;
	&:focus {
		border: 2px solid #164793;
	}
	&:checked::before {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: #164793;
	}
`;
