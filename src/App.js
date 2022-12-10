import React from "react";
import Sidebar from "components/Sidebar";

import styled from "styled-components";

export default function App() {
  
  return (
    <Div>
      <Sidebar />
      
    </Div>
  );
}

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 12fr 4fr;
  min-height: 100vh;
  height: max-content;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    height: max-content;
  }
`;
