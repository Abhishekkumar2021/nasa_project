import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "./ThemeContext";
import Toggler from "./Toggler";
import { Link } from "react-router-dom";
import {
	BsCalculatorFill,
	BsFillCalendarDateFill,
	BsCurrencyDollar,
	BsSpeedometer,
	BsPower,
	BsTriangle,
} from "react-icons/bs";
import { GiGlassShot, GiRollingEnergy, GiHealthNormal } from "react-icons/gi";
import useToggle from "./useToggle";
import { MdOutlineScience } from "react-icons/md";
import { CgCompressRight } from "react-icons/cg";

import {
	AiOutlineFieldBinary,
	AiOutlineAreaChart,
	AiOutlineFieldTime,
	AiOutlineMenu,
	AiFillHome,
} from "react-icons/ai";
import {
	FaPencilRuler,
	FaBalanceScaleRight,
	FaTemperatureLow,
	FaDatabase,
	FaNeos,
} from "react-icons/fa";

const StyledNavbar = styled.nav`
	width: 100%;
	padding: 10px;
	display: flex;
	justify-content: space-between;
	h1 {
		font-weight: 400;
		padding: 7px 20px;
	}
	.title {
		box-shadow: 0px 0px 5px 1px rgb(0, 0, 0, 0.1);
		border-radius: 5px;
		background: ${(props) => (props.light ? "white" : "#37383a")};
	}
	#hamburger {
		font-size: 36px;
		background: ${(props) => (props.light ? "white" : "#37383a")};
		padding: 5px;
		border-radius: 5px;
		box-shadow: 0px 0px 5px 1px rgb(0, 0, 0, 0.1);
		transition: 0.3s ease all;

		&:hover {
			animation: rotate 0.6s ease;
		}
	}
	.sidebar {
		position: absolute;
		z-index: 100;
		left: 10px;
		top: 54px;
		background: ${(props) => (props.light ? "white" : "#37383a")};
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0px 0px 10px 2px rgb(0, 0, 0, 0.1);
		transform: ${(props) =>
			props.dis ? "translateX(0)" : "translateX(-110%)"};
		transition: 0.3s ease all;
		max-height: 90vh;
		overflow: auto;
		ul {
			li {
				list-style-type: none;
				padding: 5px 2px;
				transition: 0.3s ease all;
				&:hover {
					transform: translateX(20px);
				}
				a {
					text-decoration: none;
					color: ${({ light }) => (light ? "rgba(0, 0, 0, 0.781)" : "white")};
					.icon {
						margin-right: 7px;
					}
				}
			}
		}
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
	}
`;
export default function Navbar() {
	const [light] = useContext(ThemeContext);
	const [display, setDisplay] = useToggle(false);
	return (
		<StyledNavbar light={light} dis={display}>
			<div className='sidebar' onClick={setDisplay}>
				<ul className='calculator'>
				<li>
						<Link to=''>
							<AiFillHome className='icon' />
							Home
						</Link>
				</li>
					<h1>Calculators</h1>
					<li>
						<Link to='/standard'>
							<BsCalculatorFill className='icon' />
							Standard
						</Link>
					</li>
					<li>
						<Link to='/scientific'>
							<MdOutlineScience className='icon' />
							Scientific
						</Link>
					</li>
					<li>
						<Link to='/programmer'>
							{" "}
							<AiOutlineFieldBinary className='icon' />
							Programmer
						</Link>
					</li>
					<li>
						<Link to='/date'>
							{" "}
							<BsFillCalendarDateFill className='icon' />
							Date Calculation
						</Link>
					</li>
					<li>
						<Link to='/bmi'>
							<GiHealthNormal className='icon' />
							BMI
						</Link>
					</li>
					<li>
						<Link to='/areacal'>
							{" "}
							<AiOutlineAreaChart className='icon' />
							Area 
						</Link>
					</li>
					<li>
						<Link to='/roman'>
							{" "}
							<FaNeos className='icon' />
							Roman 
						</Link>
					</li>
					
				</ul>
				<ul className='convertor'>
					<h1>Converters</h1>
					<li>
						<Link to='/currency'>
							{" "}
							<BsCurrencyDollar className='icon' />
							Currency
						</Link>
					</li>
					<li>
						<Link to='/volume'>
							{" "}
							<GiGlassShot className='icon' />
							Volume
						</Link>
					</li>
					<li>
						<Link to='/length'>
							{" "}
							<FaPencilRuler className='icon' />
							Length
						</Link>
					</li>
					<li>
						<Link to='/weight'>
							{" "}
							<FaBalanceScaleRight className='icon' />
							Weight & Mass
						</Link>
					</li>
					<li>
						<Link to='/temperature'>
							{" "}
							<FaTemperatureLow className='icon' />
							Temperature
						</Link>
					</li>
					<li>
						<Link to='/energy'>
							{" "}
							<GiRollingEnergy className='icon' />
							Energy
						</Link>
					</li>
					<li>
						<Link to='/area'>
							{" "}
							<AiOutlineAreaChart className='icon' />
							Area
						</Link>
					</li>
					<li>
						<Link to='/speed'>
							{" "}
							<BsSpeedometer className='icon' />
							Speed
						</Link>
					</li>
					<li>
						<Link to='/time'>
							{" "}
							<AiOutlineFieldTime className='icon' />
							Time
						</Link>
					</li>
					<li>
						<Link to='/power'>
							<BsPower className='icon' />
							Power
						</Link>
					</li>
					<li>
						<Link to='/data'>
							<FaDatabase className='icon' />
							Data
						</Link>
					</li>
					<li>
						<Link to='/pressure'>
							<CgCompressRight className='icon' />
							Pressure
						</Link>
					</li>
					<li>
						<Link to='/angle'>
							<BsTriangle className='icon' />
							Angle
						</Link>
					</li>
				</ul>
			</div>
			<AiOutlineMenu id='hamburger' onClick={setDisplay} />
			<h1 className='title'>The Calculator</h1>
			<Toggler />
		</StyledNavbar>
	);
}
