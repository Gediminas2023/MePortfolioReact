import "./toggle.css"
import Sun from "../../img/sun.png"
import Moon from "../../img/moon.png"
import { useContext } from "react"
import { ThemeContext } from "../../context"

const Toggle = () => {
    const theme = useContext(ThemeContext);
    const dark = theme.state.darkMode;

    const handleClick = () => {
        theme.dispach({ type: "TOGGLE" });
    }
  return(
    <div className="toggle">
      <img src={Sun} alt="Sun" className="toggle-icon" />
      <img src={Moon} alt="Moon" className="toggle-icon" />
        <div 
            className="toggle-button"
            onClick={handleClick}
            style={{ left: dark ? 0 : 25 }}
        >

        </div>
    </div>
  )
}

export default Toggle