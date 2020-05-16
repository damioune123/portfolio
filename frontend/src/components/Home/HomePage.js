import React, { Component } from 'react';
import Header from "./Header/Header";
import Realtors from "./Realtors/Realtors";
class HomePage extends Component{
    render(){
        return(
            <div className="container">
                <div className="sidebar">
                    <button className="nav-btn"></button>
                </div>
                <Header/>
                <Realtors />
            </div>
        );
    }
}
export default HomePage;