import React from "react";
import Slider from "react-slick";
import ProductCard from './ProductCard'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    productCard: {
        margin: "20px 0",
    },
    carouselDiv: {
        backgroundColor: "#406ab5cf"
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
        <Slider className={classes.card} {...settings}>
            {props.products.map(product => {
                return (
                    <div className={classes.productCard} key={product.id}>
                        <div className="mx-auto">
                            <ProductCard className={classes.productCard} product={product}></ProductCard>
                        </div>

                    </div>

                )
            })}

        </Slider>
    );
}


