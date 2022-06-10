import React from 'react'
import styled from 'styled-components';
const StyledHome = styled.div`
  flex-grow:1;
  display:flex;
  padding:20px;

`;
function Home() {
  return (
    <StyledHome>
      <h1>An app that will gives you different things related to space and earth.</h1>
    </StyledHome>
  )
}

export default Home