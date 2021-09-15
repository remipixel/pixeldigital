import React from "react"
import data from "../yourdata"

const Promotion = () => {
  return (
    <div className="wrapper">
      <div className="wrapper">
        <div className="wrapper">
          
            <h1>{data.promotionHeading}</h1>
          
          <p>{data.promotionPara}</p>
        </div>
      </div>
    </div>
  )
}

export default Promotion