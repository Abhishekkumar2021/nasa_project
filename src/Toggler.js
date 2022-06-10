import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "./ThemeContext";

const StyledToggler = styled.div`
	position: relative;
	width: 50px;
	height: 20px;
	border-radius: 25px;
	background: ${({ light }) => (!light ? "#D4ECDD" : "#242629")};
	.ball {
		width: 20px;
		height: 20px;
		background: white;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
		position: absolute;
		border-radius: 25px;
		${(props) => (props.light ? "left:0px" : "left:30px")};
		transition: 0.3s ease all;
		transform: scale(1.2);
		background: ${({ light }) => (light ? "#D4ECDD" : "#242629")};
		border: 0.01px solid ${({ light }) => (!light ? "#D4ECDD" : "#242629")};
		&:hover {
			transform: scale(1.4);
		}
	}
`;
export default function Toggler() {
	const [light, toggleLight] = useContext(ThemeContext);
	return (
		<StyledToggler light={light}>
			<div className='ball' onClick={toggleLight}></div>
		</StyledToggler>
	);
}
