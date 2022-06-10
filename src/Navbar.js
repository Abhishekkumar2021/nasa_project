import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "./ThemeContext";
import Toggler from "./Toggler";
import useToggle from "./useToggle";
import Theme from './Theme'
import {
	AiOutlineMenu,
	AiOutlineClose,
	AiFillHome,
	AiFillPicture
} from "react-icons/ai";
import { Link } from "react-router-dom";

const StyledNavbar = styled.nav`
	width: 100%;
	display:flex;
	flex-direction: column;
	box-shadow: ${({ light }) => (light ? Theme.light.shadow : Theme.dark.shadow)};
	background: ${({ light }) => (light ? Theme.light.backgroundSecondary : Theme.dark.backgroundSecondary)};
	padding:10px;
	.top{
		display: flex;
		justify-content: space-between;
		#hamburger{
			font-size:28px;
			&:hover{
		transition:0.3s ease all;
				transform:scale(1.2);
			}
			&:active{
				transform:scale(0.9);

			}
		}
	}
	.down{
		display:flex;
		flex-direction: column;
		align-items: center;
		gap:5px;
		transition:0.3s ease all;
		transform-origin: top right ;
		height: ${({dis})=>(!dis?"0px":"90px")};
		transform:${({dis})=>(!dis?"scale(0)":"scale(1)")};
		li{
			border-radius: 5px;
			padding:5px;
			list-style: none;
			display:flex;
			align-items: center;
			

			a{
				text-decoration:none;
				color: ${({ light }) => (light ? Theme.light.colorSecondary : Theme.dark.colorSecondary)};
			}
		transition:0.3s ease all;
			&:hover{
				transform:translateX(-15%);
			}
			.icon{
				margin-right:5px;
				font-size: 28px;
			}
		}
	}
	
`;
export default function Navbar() {
	const [light] = useContext(ThemeContext);
	const [display, toggleDisplay] = useToggle(false);
	return (
		<StyledNavbar light={light} dis={display}>
			<div className="top">
				<Toggler />
				{display?<AiOutlineClose id='hamburger' onClick={toggleDisplay} />:<AiOutlineMenu id='hamburger' onClick={toggleDisplay} />}
			</div>
			<div className="down">
			<ul  onClick={toggleDisplay}>
				<li>
					<AiFillHome className="icon" />
					<Link to=''>	
						Home
					</Link>
				</li>
				<li>
					<AiFillPicture className="icon" />
					<Link to='/apod'>	
						Astronomical Picture Of Day
					</Link>
				</li>
			</ul>
			
			</div>
			
		</StyledNavbar>
	);
}
