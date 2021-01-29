import React from 'react'

const NavBar = () => {
    return (
        <div className="NB_container-navbar">
            <div className="NB_container-left">
                <a href="/">Inicio</a>
                <a href="https://www.pluralsight.com/guides/how-to-render-%22a%22-with-optional-href-in-react">Github</a>
            </div>
            <div className="NB_container-right">
                <a href="#">Portafolio</a>
                <a href="#">Habilidades</a>
                <a href="#">Contacto</a>
            </div>
        </div>
    )
}

export default NavBar
