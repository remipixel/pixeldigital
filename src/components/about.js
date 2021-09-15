import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="wrapper">
        <div className="about-section">
          <div className="content">
            
              <h1>A propos</h1>
            
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
          </div>
          <div className="image-wrapper">
            <img id="pp" src={data.aboutImage} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
