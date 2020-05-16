import React, { Component } from 'react';

import { getMetaDataAction } from "../../../../actions/metaDataAction";
import compose from "recompose/compose";
import {connect} from "react-redux";
const mapDispatchToProps = dispatch => ({
    getMetaDataAction: payload => dispatch(getMetaDataAction(payload)),
});
const mapStateToProps = (state) => ({...state.metaData});
class GalleryItem extends Component{
    componentDidMount() {
        this.props.getMetaDataAction();
    }
    render(){
        const { loading, error, metaData } = this.props;
        if (loading || !metaData || error) {
            return null;
        }
        return(
            <figure className={`gallery__item gallery__item--${this.props.id}`}>
                <img src={this.props.img} alt={`${metaData.galleryItemMetaData.altBase} ${this.props.id}`} className="gallery__img"/>
            </figure>
        );
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(GalleryItem);