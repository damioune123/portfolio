import React, { Component } from 'react';
import LogoImg from '../../../../img/logo.png';

import SeenOnLogo1 from '../../../../img/logo-bbc.png';
import SeenOnLogo2 from '../../../../img/logo-forbes.png';
import SeenOnLogo3 from '../../../../img/logo-techcrunch.png';
import SeenOnLogo4 from '../../../../img/logo-bi.png';

const meta = {
    logoImg: LogoImg,
    logoAlt: "Nexter logo",
    heading3: "Your own home:",
    heading1: "The ultimate personal freedom",
    btnText: "View our properties",
    seenOnText: "Seen on"
};
const seenOnLogos = [
    {
        img: SeenOnLogo1,
        alt: "Seen on logo 1"
    },
    {
        img: SeenOnLogo2,
        alt: "Seen on logo 2"
    },
    {
        img: SeenOnLogo3,
        alt: "Seen on logo 3"
    },
    {
        img: SeenOnLogo4,
        alt: "Seen on logo 4"
    }
];
class Header extends Component{
    render(){
        const renderListOfSeenOnLogos= () => {
            return seenOnLogos.map ((seenOnLogo) =>
                <img
                    src={seenOnLogo.img}
                    alt={seenOnLogo.alt}
                />);
        };
        return(
            <header className="header">
                <img src={meta.logoImg} alt={meta.logoAlt} className="header__logo"/>
                <h3 className="heading-3">{meta.heading3}</h3>
                <h1 className="heading-1">{meta.heading1}</h1>
                <button className="btn header__btn">{meta.heading1}</button>
                <div className="header__seenon-text">{meta.seenOnText}</div>
                <div className="header__seenon-logos">
                    {renderListOfSeenOnLogos()}
                </div>
            </header>
        );
    }
}
export default Header;