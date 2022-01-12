import React from 'react'
import { Carousel  } from "react-bootstrap"
import "./Carrusel.css"


export const Carrusel = () => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item interval={3000}>
                <img
                className="d-block w-100 imgHeight"
                src="https://tap-multimedia-1113.nyc3.digitaloceanspaces.com/slider/3782/large/Heartstopper_para_colorear_Cuspide_01.png"
                alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100 imgHeight"
                src="https://tap-multimedia-1113.nyc3.digitaloceanspaces.com/slider/3789/large/202201_Gata_Blanca_Cuspide_01.png"
                alt="Second slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100 imgHeight"
                src="https://tap-multimedia-1113.nyc3.digitaloceanspaces.com/slider/3778/large/AZ_Cuspide_BannerReyes2.jpeg"
                alt="Third slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100 imgHeight"
                src="https://tap-multimedia-1113.nyc3.digitaloceanspaces.com/slider/3780/large/Hopendath_III_1200x300.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100 imgHeight"
                src="https://tap-multimedia-1113.nyc3.digitaloceanspaces.com/slider/3759/large/PRONSKY_NOAMARAS_BANNER_CUSPIDE.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100 imgHeight"
                src="https://tap-multimedia-1113.nyc3.digitaloceanspaces.com/slider/3734/large/caraval_saga.png"
                alt="Third slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </>
    )
}
