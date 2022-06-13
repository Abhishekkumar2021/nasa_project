import React from 'react';
import styled from 'styled-components';
import useToggle from'./useToggle'
import ThemeContext from "./ThemeContext";
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import APOD from './APOD';
import APODAny from './APODAny';


const StyledApp = styled.div`
position:relative;
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	background: ${({ light }) => (light ? "#F4F4FFF0" : "#242629")};
	color: ${({ light }) => (light ? "rgba(0, 0, 0, 0.781)" : "rgb(256,256,256,0.8)")};
`;
function App() {
	document.title="The Space"
  const [light, toggleLight] = useToggle(true);
  return (
		<ThemeContext.Provider value={[light, toggleLight]}>
			<StyledApp light={light}>
				<Navbar />
                <Routes>
					<Route exact path='/apod' element={<APOD />} />
					<Route exact path='/apodany' element={<APODAny />} />
					<Route path='/' element={<Home />} />
				</Routes>
			</StyledApp>
		</ThemeContext.Provider>
  );
}

export default App;
