import { React } from 'react';


const Briefcase= () => {

   

    return (
        <div className="BC_container-briefcase">
            <div className="BC_briefcase-title">
                <h2>Portafolio de proyectos</h2>
                <hr/>
            </div>
            <div className="BC_container-flex">
                <div className="BC_card">
                    <img src="./static_fields/api_covid.png" className="BC_card-main-image" alt="web-page"/>
                    <div className="BC_container-text">
                        <h4>Covid Api</h4>
                        <p>
                            Esta aplicación web muestra los datos extraídos de una Api externa
                            en tiempo real de una extensa lista de diferentes paises.
                        </p>
                    </div>
                    <h5> Tecnologías usadas en este proyecto</h5>
                    <div className="BC_container-icons">
                        <img src="./static_fields/angular.png" className="BC_card-icon-image" alt="logo"/>
                        <img src="./static_fields/typescript.png" className="BC_card-icon-image" alt="logo"/>
                        <img src="./static_fields/css3.png" className="BC_card-icon-image" alt="logo"/>
                        <img src="./static_fields/html5.png" className="BC_card-icon-image" alt="logo"/>
                    </div>
                    <div className="BC_container-cell">
                        <i class="fas fa-mobile-alt"></i>
                        <p>Página Responsiva</p>
                    </div>
                    <div className="BC_container-links">
                        <a target="_blank" rel="noopener noreferrer" href="https://affectionate-minsky-2f1596.netlify.app/">Link al sitio web</a>
                        <a className="BC_last-link" target="_blank" rel="noopener noreferrer" href="https://github.com/medina192/api-covid-app">Repositorio del código en github</a>
                    </div>
                </div>
                <div className="BC_card">
                    <img src="./static_fields/mujer.png" className="BC_card-main-image" alt="web-page"/>
                    <div className="BC_container-text">
                        <h4>Blog: Violencia contra las mujeres</h4>
                        <p> 
                            Este blog fue mi proyecto de la materia Responsabilidad Social,
                            en el hablo sobre las diferentes violencias que sufre una mujer en 
                            México.
                        </p>
                    </div>
                    <h5> Tecnologías usadas en este proyecto</h5>
                    <div className="BC_container-icons">
                        <img src="./static_fields/reactblack.png" className="BC_card-icon-image" alt="logo"/>
                        <img src="./static_fields/js.png" className="BC_card-icon-image" alt="logo"/>
                        <img src="./static_fields/sass2.jpg" className="BC_card-icon-image" alt="logo"/>
                        <img src="./static_fields/html5.png" className="BC_card-icon-image" alt="logo"/>
                    </div>
                    <div className="BC_container-cell">
                        <i class="fas fa-mobile-alt"></i>
                        <p>Página Responsiva</p>
                    </div>
                    <div className="BC_container-links">
                        <a target="_blank" rel="noopener noreferrer" href="https://respon-social.herokuapp.com/">Link al sitio web</a>
                        <a className="BC_last-link" target="_blank" rel="noopener noreferrer" href="https://github.com/medina192/Proyecto-responsabilidad-social">Repositorio del código en github</a>
                    </div>
                </div>
                <div className="BC_card">
                    <img src="./static_fields/cv.png" className="BC_card-main-image" alt="web-page"/>
                    <div className="BC_container-text">
                        <h4>Portafolio de programador Js</h4>
                        <p>
                            Esta es la página en la que nos encontramos actualmente,
                            tiene el objetivo de demostrar a los reclutadores mis conocimientos
                            en las diferentes tecnologías que domino.
                        </p>
                    </div>
                    <h5> Tecnologías usadas en este proyecto</h5>
                    <div className="BC_container-icons">
                        <img src="./static_fields/reactblack.png" className="BC_card-icon-image" alt="logo"/>
                        <img src="./static_fields/js.png" className="BC_card-icon-image" alt="logo" />
                        <img src="./static_fields/sass2.jpg" className="BC_card-icon-image" alt="logo" />
                        <img src="./static_fields/html5.png" className="BC_card-icon-image" alt="logo" />
                    </div>
                    <div className="BC_container-cell">
                        <i class="fas fa-mobile-alt"></i>
                        <p>Página Responsiva</p>
                    </div>
                    <div className="BC_container-links">
                        <a target="_blank"  rel="noopener noreferrer" href="https://alejandro-diaz-developer.herokuapp.com/">Link al sitio web</a>
                        <a className="BC_last-link" target="_blank" rel="noopener noreferrer" href="https://github.com/medina192/briefcase">Repositorio del código en github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Briefcase


