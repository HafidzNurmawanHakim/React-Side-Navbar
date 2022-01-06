import { Route, Routes } from "react-router";
import styled from "styled-components";
import "./App.css";
import SideNavbar from "./Components/SideNavbar";
import Main from "./Pages/Main";

const Div = styled.div`
  width: 78vw;
  height: 100vh;
  float: right;
`;
function App() {
  return (
    <div className="App">
      <SideNavbar />
      <Div>
        <Main />
      </Div>
    </div>
  );
}

export default App;
