import React, { Component } from 'react';
import { getMetaDataAction } from "../../../../../actions/metaDataAction";
import compose from "recompose/compose";
import {connect} from "react-redux";
const mapDispatchToProps = dispatch => ({
    getMetaDataAction: payload => dispatch(getMetaDataAction(payload)),
});
const mapStateToProps = (state) => ({...state.metaData});
class Realtor extends Component{
    componentDidMount() {
        this.props.getMetaDataAction();
    }
    render(){
        const { loading, error, metaData } = this.props;
        if (loading || !metaData || error) {
            return null;
        }
        return(
            <div >
                <img src={this.props.img} alt={this.props.alt} className="realtors__img"/>
                <div className="realtors__details">
                    <h4 className="heading-4 heading-4--light">{this.props.fullname}</h4>
                    <p className="realtors__sold">{this.props.sold} {metaData.realtorMetaData.housesSoldText}</p>
                </div>
            </div>
        );
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Realtor);