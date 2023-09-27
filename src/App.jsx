//import { useState } from 'react'

import "./App.css";
import Footer from "./components/Home/Footer";
import ImageSlider from "./components/Home/ImageSlider";
import Information from "./components/Home/Information";
import Nav from "./components/Home/Nav";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <ImageSlider/>
      <Information/>
      <Footer/>
    </>
  );
}

export default App;
