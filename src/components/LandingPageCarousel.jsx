import React from "react";
import Slider from "react-slick";
import ProductCard from './ProductCard'
import { makeStyles } from '@material-ui/core/styles';
import './LandingPageCarousel.css' 

const useStyles = makeStyles(() => ({
    productCard: {
        margin: "auto",

    }
}));

export default function LandingPageCarousel(props) {
    const classes = useStyles()

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <Slider className={classes.productCard} {...settings}>
            {props.products.map(product => {
                return (
                    <div className={"carouselDiv"} key={product.id}>
                        <ProductCard product={product}></ProductCard>
                    </div>

                )
            })}

        </Slider>
    );
}


