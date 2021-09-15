import React from "react"
import arrow from "../../images/arrow.svg"

const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  return (
    <div className="card">
      <div className="thumb">
        <img src={imgUrl} alt="" className="pic" />
      </div>
      <div class="card-content">
        <div class="title">
          <h3>{heading}</h3>
          <div class="arr">
            <a href={projectLink ? projectLink : "#"} target="_blank" rel="noreferrer" ><img src={arrow} alt="Arrow" /></a>
          </div>
        </div>
        <span class="project-info">{paragraph}</span>
      </div>



    </div>
  )
}

export default Card
