import React, { Component } from 'react';
import SpriteSvg from "../../../../img/sprite.svg";

const heartFullIcon = SpriteSvg+"#icon-heart-full";
const mapPinIcon = SpriteSvg+"#icon-map-pin";
const profileMaleIcon = SpriteSvg+"#icon-profile-male";
const expandIcon = SpriteSvg+"#icon-expand";
const keyIcon = SpriteSvg+"#icon-key";

const meta = {
    btnText: "Contact realtor"
};

class Home extends Component{
    render(){
        return(
            <div className="home">
                <img src={this.props.img} alt={this.props.img} className="home__img"/>
                <svg className="home__like">
                    <use xlinkHref={heartFullIcon}></use>
                </svg>
                <h5 className="home__name">{this.props.title}</h5>
                <div className="home__location">
                    <svg>
                        <use xlinkHref={mapPinIcon}></use>
                    </svg>
                    <p>{this.props.location}</p>
                </div>
                <div className="home__rooms">
                    <svg>
                        <use xlinkHref={profileMaleIcon}></use>
                    </svg>
                    <p>{this.props.amountRooms} rooms</p>
                </div>
                <div className="home__area">
                    <svg>
                        <use xlinkHref={expandIcon}></use>
                    </svg>
                    <p>{this.props.surface} m<sup>2</sup></p>
                </div>
                <div className="home__price">
                    <svg>
                        <use xlinkHref={keyIcon}></use>
                    </svg>
                    <p>${this.props.price}</p>
                </div>
                <button className="btn home__btn">{meta.btnText}</button>
            </div>
        );
    }
}
export default Home;