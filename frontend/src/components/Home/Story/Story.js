import React, { Component } from 'react';
import StoryImg1 from "../../../img/story-1.jpeg";
import StoryImg2 from "../../../img/story-2.jpeg";

const meta = {
    title: "Happy Customers",
    subtitle: "The best decision of our live",
    quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus \
        ariatur voluptatibus. Quidem consequatur harum volupta!",
    btnText: "Find your own home",
    img1: StoryImg1,
    alt1: "Couple with new house",
    img2: StoryImg2,
    alt2: "New house"
};
class Story extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="story__pictures">
                    <img src={meta.img1} alt={meta.alt1} className="story__img--1"/>
                    <img src={meta.img2} alt={meta.alt2} className="story__img--2"/>
                </div>
                <div className="story__content">
                    <h3 className="heading-3 mb-sm">{meta.title}</h3>
                    <h2 className="heading-2 heading-2--dark mb-md">&ldquo;{meta.subtitle}&rdquo;</h2>
                    <p className="story__text">{meta.quote}</p>
                    <button className="btn">{meta.btnText}</button>
                </div>
            </React.Fragment>
        );
    }
}
export default Story;