import React from 'react'

const FooterContact = () => {
    return (
        <div className="FC_container-footer">
            <div className="FC_container-flex">
                <div className="FC_container-icon-contact">
                    <i className="far fa-envelope"></i>
                    <p>ja.diazmedina@ugto.mx</p>
                </div>
                <div className="FC_container-icon-contact">
                    <i className="fab fa-whatsapp"></i>
                    <p>+52 352 105 6773</p>
                </div>
                <div className="FC_container-icon-contact">
                    <i className="fas fa-code"></i>
                    <a href="https://github.com/medina192" rel="noopener noreferrer" target="_blank">Github</a>
                </div>
            </div>
            <div className="FC_container-rights">
                <p>Desarrollado por Alejandro Díaz</p>
            </div>
        </div>
    )
}

export default FooterContact
