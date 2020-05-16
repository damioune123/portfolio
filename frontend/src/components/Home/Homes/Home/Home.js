import React, { Component } from 'react';
import { getMetaDataAction } from "../../../../actions/metaDataAction";
import compose from "recompose/compose";
import {connect} from "react-redux";
const mapDispatchToProps = dispatch => ({
    getMetaDataAction: payload => dispatch(getMetaDataAction(payload)),
});
const mapStateToProps = (state) => ({...state.metaData});
class Home extends Component{
    componentDidMount() {
        this.props.getMetaDataAction();
    }
    render(){
        const { loading, error, metaData } = this.props;
        if (loading || !metaData || error) {
            return null;
        }
        return(
            <div className="home">
                <img src={this.props.img} alt={this.props.img} className="home__img"/>
                <svg className="home__like">
                    <use xlinkHref={metaData.homeMetaData.heartFullIcon}></use>
                </svg>
                <h5 className="home__name">{this.props.title}</h5>
                <div className="home__location">
                    <svg>
                        <use xlinkHref={metaData.homeMetaData.mapPinIcon}></use>
                    </svg>
                    <p>{this.props.location}</p>
                </div>
                <div className="home__rooms">
                    <svg>
                        <use xlinkHref={metaData.homeMetaData.profileMaleIcon}></use>
                    </svg>
                    <p>{this.props.amountRooms} rooms</p>
                </div>
                <div className="home__area">
                    <svg>
                        <use xlinkHref={metaData.homeMetaData.expandIcon}></use>
                    </svg>
                    <p>{this.props.surface} m<sup>2</sup></p>
                </div>
                <div className="home__price">
                    <svg>
                        <use xlinkHref={metaData.homeMetaData.keyIcon}></use>
                    </svg>
                    <p>${this.props.price}</p>
                </div>
                <button className="btn home__btn">{metaData.homeMetaData.btnText}</button>
            </div>
        );
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Home);