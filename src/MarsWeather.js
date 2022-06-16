import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from './ThemeContext'
const StyledDiv =styled.div`
flex-grow:1;
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
background: ${(props) => (props.light ? "white" : "#37383a")};

iframe{
    width:100%;
    flex-grow: 1;
}
`
function MarsWeather() {
    const [light] = useContext(ThemeContext);
  return (
    <StyledDiv light={light}>
        <iframe src='https://mars.nasa.gov/layout/embed/image/mslweather/' scrolling='no' frameborder='0' title='weather frame'></iframe>
    </StyledDiv>
  )
}

export default MarsWeather