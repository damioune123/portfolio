import React, { Component } from 'react';
import Loader from '../../Loader/Loader'
import Home from "./Home/Home";

import { getHomesAction } from "../../../actions/homeActions";
import compose from "recompose/compose";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => ({
    getHomesAction: payload => dispatch(getHomesAction(payload)),
});
const mapStateToProps = (state) => ({...state.homes});
class Homes extends Component{
    componentDidMount() {
        this.props.getHomesAction();
    }
    render(){
        const { loading, error, homes } = this.props;
        if (loading || !homes) {
            return <Loader/>;
        }
        if (error){
            return null;
        }
        const renderListOfHomes = () => {
            return homes.map (home =>
                <Home key={home.title}
                      title={home.title}
                      img={home.img}
                      alt={home.alt}
                      location={home.location}
                      amountRooms={home.amountRooms}
                      surface={home.surface}
                      price={home.price}
                />);
        };
        return(
            <section className="homes">
                {renderListOfHomes()}
            </section>
        );
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Homes);