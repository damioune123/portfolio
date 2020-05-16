import React, { Component } from 'react';
import Feature from "./Feature/Feature";

import { getMetaDataAction } from "../../../actions/metaDataAction";
import compose from "recompose/compose";
import {connect} from "react-redux";
import Loader from "../../Loader/Loader";
const mapDispatchToProps = dispatch => ({
    getMetaDataAction: payload => dispatch(getMetaDataAction(payload)),
});
const mapStateToProps = (state) => ({...state.metaData});
class Features extends Component{
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
        const renderListOfFeatures = () => {
            return metaData.featuresMetaData.features.map (feature =>
                <Feature
                    key={feature.title}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                />);
        };
        return(
            <section className="features">
                {renderListOfFeatures()}
            </section>
        );
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Features);