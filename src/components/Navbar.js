import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import logo from "../images/logo-500.jpg"

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          > <img id="logosite" src={logo} alt="Pixel Digital Logo." />
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}>Réalisations</button>
            <button onClick={() => scrollTo("#about")}>A propos</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
