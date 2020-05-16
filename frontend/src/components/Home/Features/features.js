import React, { Component } from 'react';
import SpriteSvg from "../../../img/sprite.svg";
import Feature from "./Feature/feature";

const features = [
    {
        icon: SpriteSvg+"#icon-global",
        title: "World's best luxury homes",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.\
            Tenetur distinctio necessitatibus pariatur voluptatibus.",
    },
    {
        icon: SpriteSvg+"#icon-trophy",
        title: "Only the best properties",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.\
            Tenetur distinctio necessitatibus pariatur voluptatibus.",
    },
    {
        icon: SpriteSvg+"#icon-map-pin",
        title: "All homes in in top locations",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.\
            Tenetur distinctio necessitatibus pariatur voluptatibus.",
    },
    {
        icon: SpriteSvg+"#icon-key",
        title: "New home in one week",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.\
            Tenetur distinctio necessitatibus pariatur voluptatibus.",
    },
    {
        icon: SpriteSvg+"#icon-presentation",
        title: "Top 1% realtors",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.\
            Tenetur distinctio necessitatibus pariatur voluptatibus.",
    },
    {
        icon: SpriteSvg+"#icon-lock",
        title: "Secure payments on nexter",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.\
            Tenetur distinctio necessitatibus pariatur voluptatibus.",
    },

];

class Features extends Component{
    render(){
        const renderListOfFeatures = () => {
            return features.map (feature =><Feature key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />);
        };
        return(
            <section className="features">
                {renderListOfFeatures()}
            </section>
        );
    }
}
export default Features;