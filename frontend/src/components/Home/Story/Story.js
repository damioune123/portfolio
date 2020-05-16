import React, { Component } from 'react';
import { getMetaDataAction } from "../../../actions/metaDataAction";
import compose from "recompose/compose";
import {connect} from "react-redux";
import Loader from "../../Loader/Loader";
const mapDispatchToProps = dispatch => ({
    getMetaDataAction: payload => dispatch(getMetaDataAction(payload)),
});
const mapStateToProps = (state) => ({...state.metaData});
class Story extends Component{
    componentDidMount() {
        this.props.getMetaDataAction();
    }
    render(){
        const { loading, error, metaData } = this.props;
        if (loading || !metaData) {
            return <Loader/>;
        }
        if (error){
            return null;
        }
        return(
            <React.Fragment>
                <div className="story__pictures">
                    <img src={metaData.storyMetaData.img1} alt={metaData.storyMetaData.alt1} className="story__img--1"/>
                    <img src={metaData.storyMetaData.img2} alt={metaData.storyMetaData.alt2} className="story__img--2"/>
                </div>
                <div className="story__content">
                    <h3 className="heading-3 mb-sm">{metaData.storyMetaData.title}</h3>
                    <h2 className="heading-2 heading-2--dark mb-md">&ldquo;{metaData.storyMetaData.subtitle}&rdquo;</h2>
                    <p className="story__text">{metaData.storyMetaData.quote}</p>
                    <button className="btn">{metaData.storyMetaData.btnText}</button>
                </div>
            </React.Fragment>
        );
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Story);