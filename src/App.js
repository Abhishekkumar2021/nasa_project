import React from 'react';
import styled from 'styled-components';
import useToggle from'./useToggle'
import ThemeContext from "./ThemeContext";
import Theme from './Theme'
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';


const StyledApp = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	background: ${({ light }) => (light ? Theme.light.background : Theme.dark.backgroundPrimary)};
	color: ${({ light }) => (light ? Theme.light.colorPrimary : Theme.dark.colorPrimary)};
`;
function App() {
  const [light, toggleLight] = useToggle(true);
  return (
		<ThemeContext.Provider value={[light, toggleLight]}>
			<StyledApp light={light}>
				<Navbar />
                <Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</StyledApp>
		</ThemeContext.Provider>
  );
}

export default App;
