import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "./ThemeContext";
import Theme from "./Theme";

const StyledToggler = styled.div`
	position: relative;
	width: 60px;
	height: 25px;
	display:flex;
	align-items:center;
	border-radius: 25px;
	box-shadow:0 0 0 1px  ${({ light }) => (light ? Theme.light.colorSecondary : Theme.dark.colorSecondary)};

	background: ${({ light }) => (light ? Theme.light.backgroundPrimary : Theme.dark.backgroundPrimary)};
	.ball {
		box-shadow:0 0 0 1px  ${({ light }) => (light ? Theme.light.colorSecondary : Theme.dark.colorSecondary)};

		width: 18px;
		height: 18px;
		background: ${({ light }) => (light ? Theme.light.colorSecondary : Theme.dark.colorSecondary)};
		position: absolute;
		border-radius: 18px;
		${(props) => (props.light ? "left:4px" : "left:38px")};
		transition: 0.3s ease all;
		&:hover {
			transform: scale(1.6);
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
