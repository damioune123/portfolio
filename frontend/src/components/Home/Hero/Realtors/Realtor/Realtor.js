import React, { Component } from 'react';
const meta = {
    housesSoldText: "houses sold"
};
class Realtor extends Component{
    render(){
        return(
            <div >
                <img src={this.props.img} alt={this.props.alt} className="realtors__img"/>
                <div className="realtors__details">
                    <h4 className="heading-4 heading-4--light">{this.props.fullname}</h4>
                    <p className="realtors__sold">{this.props.sold} {meta.housesSoldText}</p>
                </div>
            </div>
        );
    }
}
export default Realtor;