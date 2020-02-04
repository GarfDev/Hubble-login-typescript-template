import styled from "styled-components";

const Input = styled.input`
	font-size: .8em;
	margin-bottom: 0.8em;
	padding: 1em;
	color: grey;
	border: 2px solid lightgrey;
	border-radius: 6px;
	width: 10vw;
	transition-duration: .3s;
	&:hover {
		border-color: black;
		transition-duration: .3s;
	}
	&:focus {
		border-color: black;
		transition-duration: .3s;
	}
`;

export default Input