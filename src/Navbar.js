import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "./ThemeContext";
import Toggler from "./Toggler";
import useToggle from "./useToggle";
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
	background: ${(props) => (props.light ? "white" : "#37383a")};
	padding:20px;
	box-shadow: 0px 3px 6px rgb(0, 0, 0, 0.1);
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
				color: ${({ light }) => (light ? "rgba(0, 0, 0, 0.781)" : "white")};
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
				<h1>The Space</h1>
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
