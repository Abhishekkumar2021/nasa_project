import React, { useContext } from 'react'
import styled from 'styled-components';
import ThemeContext from './ThemeContext';
const StyledHome = styled.div`
  flex-grow:1;
  display:flex;
  padding:20px;
  background:${({light})=>light? `url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80')`:`url('https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1109&q=80')`}

`;
function Home() {
  const [light] = useContext(ThemeContext)
  return (
    <StyledHome light={light}>
      <h1>An app that will gives you different things related to space and earth.</h1>
    </StyledHome>
  )
}

export default Home