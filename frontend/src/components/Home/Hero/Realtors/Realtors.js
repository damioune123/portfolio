import React, { Component } from 'react';
import Realtor from "./Realtor/Realtor";

import Realtor1Img from "../../../../img/realtor-1.jpeg";
import Realtor2Img from "../../../../img/realtor-2.jpeg";
import Realtor3Img from "../../../../img/realtor-3.jpeg";

const realtors = [
    {
        img: Realtor1Img,
        alt: "Realtor 1",
        fullName: "Erik Feinman",
        sold: 125
    },
    {
        img: Realtor2Img,
        alt: "Realtor 2",
        fullName: "Kim Brown",
        sold: 284
    },
    {
        img: Realtor3Img,
        alt: "Realtor 3",
        fullName: "Toby Ramsey",
        sold: 254
    },

];
class Realtors extends Component{

    render(){
        const renderListOfRealtors = () => {
            realtors.sort((a, b)=>b.sold - a.sold);
            return realtors.map (realtor =>
                <Realtor
                    key={realtor.fullName}
                    fullname={realtor.fullName}
                    img={realtor.img}
                    alt={realtor.alt}
                    sold={realtor.sold}
                />);
        };
        return(
            <div className="realtors">
                <h3 className="heading-3">Top {realtors.length} Realtors</h3>
                {renderListOfRealtors()}
            </div>
        );
    }
}
export default Realtors;