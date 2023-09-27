//import { useState } from 'react'

import "./App.css";
import ImageSlider from "./components/Home/ImageSlider";
import Nav from "./components/Home/Nav";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <ImageSlider/>
    </>
  );
}

export default App;
