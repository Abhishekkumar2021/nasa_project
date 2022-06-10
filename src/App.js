import React from 'react';
import styled from 'styled-components';
import useToggle from'./useToggle'
import ThemeContext from "./ThemeContext";
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import APOD from './APOD';


const StyledApp = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	background: ${({ light }) => (light ? "#D4ECDD" : "#242629")};
	color: ${({ light }) => (light ? "rgba(0, 0, 0, 0.781)" : "white")};
`;
function App() {
	document.title="The Space"
  const [light, toggleLight] = useToggle(true);
  return (
		<ThemeContext.Provider value={[light, toggleLight]}>
			<StyledApp light={light}>
				<Navbar />
                <Routes>
					<Route path='/apod' element={<APOD />} />
					<Route path='/' element={<Home />} />
				</Routes>
			</StyledApp>
		</ThemeContext.Provider>
  );
}

export default App;
