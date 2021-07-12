import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return <CanvasContainer>Hello Three.js</CanvasContainer>;
}

export default App;
