import React, { Component } from 'react';
import Header from "./Header/Header";
import Realtors from "./Realtors/Realtors";
import Features from "./Features/features";
class HomePage extends Component{
    render(){
        return(
            <div className="container">
                <div className="sidebar">
                    <button className="nav-btn"></button>
                </div>
                <Header/>
                <Realtors />
                <Features />
            </div>
        );
    }
}
export default HomePage;