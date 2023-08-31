import { useContext } from "react";
import Home from "../src/components/home/Home";
import About from "../src/components/about/About"
import Contact from "../src/components/contact/Contact"
import Toggle from "../src/components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const  darkMode = theme.state.darkMode;

  return (
  <div style={{ 
    backgroundColor: darkMode ? "#222" : "#fff",
    color: darkMode && "#fff"
   }}>
    <Home />
    <About />
    <Contact />
    <Toggle />
  </div>
  );
};

export default App;