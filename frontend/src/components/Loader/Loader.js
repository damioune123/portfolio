import React, { Component } from 'react';
import ReactLoaderSpinner from 'react-loader-spinner'
class Loader extends Component{
    render(){
        return(
            <div className="loader">
                <ReactLoaderSpinner
                    className="loader__spinner"
                    type={this.props.type || "Bars"}
                    color={this.props.color || "#00BFFF"}
                    height={this.props.height || 100}
                    width={this.props.width || 100}
                    {...this.props}
                />
            </div>
        );
    }
}
export default Loader;