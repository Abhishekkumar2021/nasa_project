import React from 'react';
import styled from 'styled-components';
import useToggle from'./useToggle'
import ThemeContext from "./ThemeContext";
import Theme from './Theme'
import Navbar from './Navbar';


const StyledApp = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	background: ${({ light }) => (light ? Theme.light.background : Theme.dark.background)};
	color: ${({ light }) => (light ? Theme.light.color : Theme.dark.color)};

  h1{
    box-shadow: ${Theme.light.shadow}
  }
`;
function App() {
  console.log(Theme)
  const [light, toggleLight] = useToggle(true);
  return (
		<ThemeContext.Provider value={[light, toggleLight]}>
			<StyledApp light={light}>
				<Navbar />
        <h1>I am text</h1>
			</StyledApp>
		</ThemeContext.Provider>
  );
}

export default App;
