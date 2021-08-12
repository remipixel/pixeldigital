import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import logo from "../images/logo-y.svg"

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="wrapper">
            <a href="/" className="logo-link"><img src={logo} alt="Logo de Pixel Digital" className="logo" /></a>
            <ul class="main-menu">
              <li><a onClick={() => scrollTo("#work")} href="/" class="link">Works</a></li>
              <li><a onClick={() => scrollTo("#about")} href="/" class="link">L'agence</a></li>
              <li><a onClick={() => scrollTo("#contact")} href="/" class="dropdown">Connect</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
