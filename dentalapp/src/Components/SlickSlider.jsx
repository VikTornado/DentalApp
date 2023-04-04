import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import img1 from "../Assets/wp2/1.png"
import img2 from "../Assets/wp2/2.png"
import img3 from "../Assets/wp2/3.png"
import img4 from "../Assets/wp2/4.png"
import img5 from "../Assets/wp2/5.png"
import img6 from "../Assets/wp2/6.png"
import img7 from "../Assets/wp2/7.png"
import img8 from "../Assets/wp2/8.png"
import img9 from "../Assets/wp2/9.png"
import img10 from "../Assets/wp2/10.png"
import img11 from "../Assets/wp2/11.png"
import img12 from "../Assets/wp2/12.png"


const SlickSlider = (props) => {
    const state = [
        {
            "id": "985933",
            "title": "MyProject",
            "image": img1,
            "releaseDate": "11.08.2022",
            "__typename": "Movie"
        },
        {
            "id": "985939",
            "title": "Fall",
            "image": img2,
            "releaseDate": "11.08.2022",
            "__typename": "Movie"
        },
        {
            "id": "532639",
            "title": "Pinocchio",
            "image": img3,
            "releaseDate": "07.09.2022",
            "__typename": "Movie"
        },
        {
            "id": "760741",
            "title": "Beast",
            "image": img4,
            "releaseDate": "11.08.2022",
            "__typename": "Movie"
        },
        {
            "id": "760161",
            "title": "Orphan: First Kill",
            "image": img5,
            "releaseDate": "27.07.2022",
            "__typename": "Movie"
        },
        {
            "id": "629176",
            "title": "Samaritan",
            "image": img6,
            "releaseDate": "25.08.2022",
            "__typename": "Movie"
        },
        {
            "id": "579974",
            "title": "RRR",
            "image": img7,
            "releaseDate": "24.03.2022",
            "__typename": "Movie"
        },
        {
            "id": "810693",
            "title": "Jujutsu Kaisen 0",
            "image": img8,
            "releaseDate": "24.12.2021",
            "__typename": "Movie"
        },
        {
            "id": "810693",
            "title": "Jujutsu Kaisen 0",
            "image": img9,
            "releaseDate": "24.12.2021",
            "__typename": "Movie"
        }, {
            "id": "810693",
            "title": "Jujutsu Kaisen 0",
            "image": img10,
            "releaseDate": "24.12.2021",
            "__typename": "Movie"
        }, {
            "id": "810693",
            "title": "Jujutsu Kaisen 0",
            "image": img11,
            "releaseDate": "24.12.2021",
            "__typename": "Movie"
        }, {
            "id": "810693",
            "title": "Jujutsu Kaisen 0",
            "image": img12,
            "releaseDate": "24.12.2021",
            "__typename": "Movie"
        },
    ]


    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 2527,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 1500,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 2050,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 1500,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1560,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 1500,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1026,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 1500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <div id={"gallery"} className={'w-full h-full p-4 pb-16 '}>
            <h2 className={'text-5xl font-bold text-center pb-14'}>Наша робота</h2>
            <div className={'max-w-[80%] m-auto'}>
                <Slider {...settings}>
                    {state.map((item, id) => {
                        return (
                            <div className={''}>
                                <div className={'pb-6'}>
                                    <img className={'max-w-[450px] max-h-[550px] flex object-cover m-auto py-6 shadow-md'}
                                         key={item.id}
                                         src={item.image}
                                         alt={item.title}/>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default SlickSlider;