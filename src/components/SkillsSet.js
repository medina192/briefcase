import { React, useState } from 'react'

const SkillsSet = () => {


    
    const [ShowBubble, SetShowBubble] = useState({
        angular: false,
        react: false,
        typescript: false,
        js: false,
        sass: false,
        css3: false,
        html5: false
    });
    const {angular, react, typescript, js, sass, css3, html5} = ShowBubble;


    const imageLogos = [
        {img: 'angular.png', text: 'Angular 10'},
        {img: 'reactblack.png', text: 'React Js'},
        {img: 'typescript.png', text: 'Typescript'},
        {img: 'js.png', text: 'Javascript'},
        {img: 'sass2.jpg', text: 'Sass'},
        {img: 'css3.png', text: 'Css3'},
        {img: 'html5.png', text: 'Html5'}];

    /*    
    const sizeImages = {
        width: '9.5rem',
        height: '9.5rem'
    }    
    */
    const mouseEnter = (id_bubble) => {
        
        switch (id_bubble) {
            case 0:
                SetShowBubble({...ShowBubble, angular: true});
            break;
            case 1:
                SetShowBubble({...ShowBubble, react: true});
            break;
            case 2:
                SetShowBubble({...ShowBubble, typescript: true});
            break;
            case 3:
                SetShowBubble({...ShowBubble, js: true});
            break;
            case 4:
                SetShowBubble({...ShowBubble, sass: true});
            break;
            case 5:
                SetShowBubble({...ShowBubble, css3: true});
            break;
            case 6:
                SetShowBubble({...ShowBubble, html5: true});
            break;
            default:
                SetShowBubble({
                    angular: false,
                    react: false,
                    typescript: false,
                    js: false,
                    sass: false,
                    css3: false,
                    html5: false
                })
                break;
        }
    }


    return (
        <div className="SS_container-Skills">
            <div className="SS_container-title">
                <h2>Habilidades Técnicas</h2>
                <hr/>
            </div>
            <div className="SS_container-flex">
                <div className="SS_container-flex-first-row">
                    <div className="SS_container-img" onMouseEnter={() => mouseEnter(0)} onMouseLeave={() => mouseEnter(7)}>  
                        <div className={`speech-bubble ${angular ? "" : "hideBurbble"}`}>
                            <p>{imageLogos[0].text}</p>
                        </div>                  
                        <img  id="0" className="SS_img-identifier"  src={`./static_fields/${imageLogos[0].img}`}
                             alt="angular logo"/>
                    </div>
                    <div className="SS_container-img" onMouseEnter={() => mouseEnter(1)} onMouseLeave={() => mouseEnter(7)}>     
                        <div className={`speech-bubble ${react ? "" : "hideBurbble"}`}>
                            <p>{imageLogos[1].text}</p>
                        </div>                 
                        <img id="1"  className="SS_img-identifier" src={`./static_fields/${imageLogos[1].img}`}
                             alt="ReactJs logo"/>
                    </div>
                    <div className="SS_container-img" onMouseEnter={() => mouseEnter(2)} onMouseLeave={() => mouseEnter(7)}>       
                        <div className={`speech-bubble ${typescript ? "" : "hideBurbble"}`}>
                            <p>{imageLogos[2].text}</p>
                        </div>                
                        <img id="2"  className="SS_img-identifier" src={`./static_fields/${imageLogos[2].img}`}
                             alt="Typescript logo"/>
                    </div>
                    <div className="SS_container-img" onMouseEnter={() => mouseEnter(3)} onMouseLeave={() => mouseEnter(7)}>   
                        <div className={`speech-bubble ${js ? "" : "hideBurbble"}`}>
                            <p>{imageLogos[3].text}</p>
                        </div>                    
                        <img id="3" src={`./static_fields/${imageLogos[3].img}`}
                             className="SS_img-identifier" alt="Javascript logo"/>
                    </div>                                        
                </div>
                <div className="SS_container-flex-second-row">
                    <div className="SS_container-img" onMouseEnter={() => mouseEnter(4)} onMouseLeave={() => mouseEnter(7)}>        
                        <div className={`speech-bubble ${sass ? "" : "hideBurbble"}`}>
                            <p>{imageLogos[4].text}</p>
                        </div>               
                        <img id="4" src={`./static_fields/${imageLogos[4].img}`}
                             className="SS_img-identifier" alt="Sass logo"/>
                    </div>
                    <div className="SS_container-img" onMouseEnter={() => mouseEnter(5)} onMouseLeave={() => mouseEnter(7)}>     
                        <div className={`speech-bubble ${css3 ? "" : "hideBurbble"}`}>
                            <p>{imageLogos[5].text}</p>
                        </div>                  
                        <img id="5" src={`./static_fields/${imageLogos[5].img}`}
                             className="SS_img-identifier" alt="Css3 logo"/>
                    </div>
                    <div className="SS_container-img" onMouseEnter={() => mouseEnter(6)} onMouseLeave={() => mouseEnter(7)}>     
                        <div className={`speech-bubble ${html5 ? "" : "hideBurbble"}`}>
                            <p>{imageLogos[6].text}</p>
                        </div>                  
                        <img id="6" src={`./static_fields/${imageLogos[6].img}`}
                             className="SS_img-identifier" alt="Html5 logo"/>
                    </div>                                
                </div>
                {
                    /*
                    imageLogos.map((imageLogo)=>
                        
                        <img src={`./static_fields/${imageLogo.img}`}
                        style={sizeImages} alt="angular logo"/>
                    )*/
                }
            </div>
        </div>
    )
}

export default SkillsSet
