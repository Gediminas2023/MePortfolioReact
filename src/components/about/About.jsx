import "./about.css"
import Me from "../../img/Me.jpg"
import CodeAcademy from "../../img/ca.png"

const about = () => {
  return (
    <div className="about">
        <div className="about-left">
            <div className="about-card bg"></div>
            <div className="about-card">
                <img src={Me} alt="" className="about-img" />
            </div>
        </div>
        <div className="about-right">
            <h1 className="about-title">About Me</h1>
            <p className="about-subtitle">
            I am a student in CodeAcademy in Java program.
            </p>
            <p className="about-destription">
            Before now I was "Sol Baltic" team leader where I worked with team of 16 persons.
            Back in 2019, I decided to try my hand at creating web with JavaScript and 
            tumbled head first into coding. 
            My main focus of these days is React.js framework learn. 
            When I’m not at the computer, I usually go to gym, hanging out with my wife and daugther 
            or photo shooting.
            </p>
            <div className="about-award">
                <img src={CodeAcademy} alt="CodeAcademy" className="about-award-img" />
                <div className="about-award-text">
                    <h4 className="about-award-title">Front-End skills</h4>
                    <div className="about-award-destriplion">
                        <div className="list-wrapper">
                            <div className="blue-line"></div>
                                <div className="list-item-wrapper">
                                    <div className="list-bullet">1</div>
                                    <div className="list-item">
                                        <div className="list-title">
                                            HTML/CSS3/SCSS
                                        </div>
                                    </div>
                                </div>
                                <div className="list-item-wrapper">
                                    <div className="list-bullet">2</div>
                                    <div className="list-item">
                                        <div className="list-title">JavaScript</div>
                                    </div>
                                </div>
                                <div className="list-item-wrapper">
                                    <div className="list-bullet">3</div>
                                    <div className="list-item">
                                        <div className="list-title">Node.js</div>   
                                    </div>
                                    <div className="white-line"></div>
                                </div>
                                <div className="list-item-wrapper">
                                    <div className="list-bullet">4</div>
                                    <div className="list-item">
                                        <div className="list-title">React.js</div>   
                                    </div>
                                    <div className="white-line"></div>
                                </div>
                                <div className="list-item-wrapper">
                                    <div className="list-bullet">5</div>
                                    <div className="list-item">
                                        <div className="list-title">Vue.js</div>   
                                    </div>
                                    <div className="white-line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default about
