import React, { Component } from 'react';

const meta = {
    altBase: "Gallery image"
};

class GalleryItem extends Component{
    render(){
        return(
            <figure className={`gallery__item gallery__item--${this.props.id}`}>
                <img src={this.props.img} alt={`${meta.altBase} ${this.props.id}`} className="gallery__img"/>
            </figure>
        );
    }
}
export default GalleryItem;