import "./home.css"
import portfolio from "../../img/portfolio.png"
import scroll from '../../img/scroll-down-icon.png'
import { useRef } from "react"

function Home() {
  const ref = useRef(null);
  
  const hendleClick = () => {
    ref.current?.scrollIntoView({behavior: "smooth"});

  }

  return (
    <div className='header'>
      <div className="header-left">
        <div className="header-left-wrapper">
            <h2 className="header-intro">Hello, My name is</h2>
            <h1 className="header-name">Gediminas</h1>
            <div className="header-title">
                <div className="header-title-wrapper">
                    <div className="header-title-item">
                        Web Developer
                    </div>
                    <div className="header-title-item">
                        UI/UX Designer
                    </div>
                    <div className="header-title-item">
                        Photographer
                    </div>
                </div>
            </div>
            <div className="header-destription">
            Frontend Developer. I like to craft solid and scalable frontend
             products with great user experiences. In building JavaScript applications,
              I'm equipped with just the right tools, and can absolutely function 
              independently of them to deliver fast, solutions — performance and scalabilty are priorities on my radar.
            </div>
        </div>
            <img ref={ref} onClick={hendleClick} className='scroll' src={scroll} alt="" />
      </div>
      <div className="header-right">
        <div className="header-bg"></div>
        <img src={portfolio} alt="portfolio" className="header-img" />
      </div>
    </div>
  )
}

export default Home
