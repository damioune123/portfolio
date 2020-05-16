import React, { Component } from 'react';
import Hero from "./Hero/Hero";
import Features from "./Features/features";
import Story from "./Story/Story";
import Homes from "./Homes/Homes";
import Gallery from "./Gallery/Gallery";
class HomePage extends Component{
    render(){
        return(
            <React.Fragment>
                <Hero />
                <Features />
                <Story />
                <Homes />
                <Gallery />
            </React.Fragment>
        );
    }
}
export default HomePage;