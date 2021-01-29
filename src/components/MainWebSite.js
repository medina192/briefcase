import { React, Fragment } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Briefcase from './briefcase/BriefCase';
import SkillsSet from './SkillsSet';
import FooterContact from './FooterContact';


const MainWebSite = () => {
    
    return(
        <Fragment>
            <Header></Header>
            {/*<NavBar></NavBar>*/}
            <Briefcase></Briefcase>
            <SkillsSet></SkillsSet>
            <FooterContact></FooterContact>
        </Fragment>
    );
}

export default MainWebSite


