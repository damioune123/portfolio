import React, { Component } from 'react';
import GalleryItem from "./GalleryItem/GalleryItem";

import Item1Img from "../../../img/gal-1.jpeg";
import Item2Img from "../../../img/gal-2.jpeg";
import Item3Img from "../../../img/gal-3.jpeg";
import Item4Img from "../../../img/gal-4.jpeg";
import Item5Img from "../../../img/gal-5.jpeg";
import Item6Img from "../../../img/gal-6.jpeg";
import Item7Img from "../../../img/gal-7.jpeg";
import Item8Img from "../../../img/gal-8.jpeg";
import Item9Img from "../../../img/gal-9.jpeg";
import Item10Img from "../../../img/gal-10.jpeg";
import Item11Img from "../../../img/gal-11.jpeg";
import Item12Img from "../../../img/gal-12.jpeg";
import Item13Img from "../../../img/gal-13.jpeg";
import Item14Img from "../../../img/gal-4.jpeg";

const galleryItems = [
    { img: Item1Img },
    { img: Item2Img },
    { img: Item3Img },
    { img: Item4Img },
    { img: Item5Img },
    { img: Item6Img },
    { img: Item7Img },
    { img: Item8Img },
    { img: Item9Img },
    { img: Item10Img },
    { img: Item11Img },
    { img: Item12Img },
    { img: Item13Img },
    { img: Item14Img },
];
class Gallery extends Component{
    render(){
        const renderListOfGalleryItems = () => {
            return galleryItems.map ((galleryItem, index) =>
                <GalleryItem
                      key = {index+1}
                      id={index+1}
                      img={galleryItem.img}
                />);
        };
        return(
            <section className="gallery">
                {renderListOfGalleryItems()}
            </section>
        );
    }
}
export default Gallery;