import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import Test from "./components/Test";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Hero />
      <Test />
      <Hero />
      <Contact />
    </>
  );
}

export default App;
