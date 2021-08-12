import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Header = () => {
  return (
    <>
      <div class="hero">
        <div class="wrapper">
          <div class="hero-content">

            <h1>
              <span class="line">
                <span class="liner-inner">UX-UI designer</span>
              </span>
              <span class="line">
                <span class="liner-inner">Dev front-end</span>
              </span>
            </h1>

            <Fade bottom>
              <h2>
                Bonjour ! Je m'appelle {data.name}{" "}
                <span role="img" aria-label="Emoji">
                  👋
                </span>
              </h2>
            </Fade>

            <Fade bottom>
              <a href={`mailto:${data.contactEmail ? data.contactEmail : "hello@chetanverma.com"}`} className="primary-btn">
                Travaillons ensemble !
              </a>
            </Fade>


          </div>
        </div>
      </div>


      {/* <div className="section" id="home">
        <div className="container">
          <div className="header-wrapper">
            <Fade bottom>
              <h2>
                Bonjour ! Je m'appelle {data.name}{" "}
                <span role="img" aria-label="Emoji">
                  👋
                </span>
              </h2>
            </Fade>
            <Fade bottom cascade>
              <div className="heading-wrapper">
                <h1>
                  {data.headerTagline[0]
                    ? data.headerTagline[0]
                    : "Building digital"}
                </h1>
                <h1>
                  {" "}
                  {data.headerTagline[1]
                    ? data.headerTagline[1]
                    : "products, brands"}
                </h1>
                <h1>
                  {" "}
                  {data.headerTagline[2]
                    ? data.headerTagline[2]
                    : "and experience"}
                </h1>
              </div>
            </Fade>
            <Fade bottom>
              <p>{data.headerParagraph}</p>
            </Fade>
            <Fade bottom>
              <a
                href={`mailto:${data.contactEmail ? data.contactEmail : "hello@chetanverma.com"
                  }`}
                className="primary-btn"
              >
                Travaillons ensemble !
              </a>
            </Fade>
          </div>
        </div>
      </div> */}

    </>
  )
}

export default Header
