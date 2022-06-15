import axios from "axios";
import React from "react";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import ThemeContext from "./ThemeContext";

const StyledPBR = styled.div`
  width: 100%;
  flex-grow:1;
`;

function PBR() {
  const [light] = useContext(ThemeContext);
  useEffect(()=>{
    const fetchData = async () => {
      const res = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=kIg4QfhUzRqaLUClJ3Xx67yZxdYhRWdFcbeyt615`
      );
      console.log(res.data)
    };
    fetchData();
  },[])
  return <StyledPBR light={light}>

  </StyledPBR>;
}

export default PBR;
