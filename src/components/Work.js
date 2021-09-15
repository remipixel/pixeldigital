import React from "react"
import Card from "./atoms/Card" 

import data from "../yourdata"

const Work = () => {
  return (
    <>
      <section id="work">
        <div className="wrapper">
          <h2>
            <span class="line">
              <span class="line-inner">Quelques</span>
            </span>
            <span class="line">
              <span class="line-inner">travaux</span>
            </span>
          </h2>
          <div className="work-group">
            
              {data.projects.map(project => (
                <Card
                  key={project.id}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                ></Card>
              ))}
            
          </div>
        </div>

      </section>
    </>
  )
}

export default Work
