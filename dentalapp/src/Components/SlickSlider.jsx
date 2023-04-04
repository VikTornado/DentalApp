import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import img1 from "../Assets/wp2/1.jpg"
import img2 from "../Assets/wp2/2.jpg"
import img3 from "../Assets/wp2/3.jpg"
import img4 from "../Assets/wp2/4.jpg"
import img5 from "../Assets/wp2/5.jpg"
import img7 from "../Assets/wp2/7.jpg"
import img8 from "../Assets/wp2/8.jpg"
import img9 from "../Assets/wp2/9.jpg"
import img10 from "../Assets/wp2/10.jpg"
import img11 from "../Assets/wp2/11.jpg"
import img12 from "../Assets/wp2/12.jpg"
import {RxDotFilled} from "react-icons/rx";


const SlickSlider = () => {
    const slides = [
        {image: img1},
        {image: img2},
        {image: img3},
        {image: img4},
        {image: img5},
        {image: img7},
        {image: img8},
        {image: img9},
        {image: img10},
        {image: img11},
        {image: img12},
    ]


    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div id={"gallery"} className='max-w-[700px] h-[450px] w-full m-auto mb-4 pb-16 px-4 relative group'>
            <h2 className={"text-4xl text-center"}>Фотогалерея</h2>
            <div
                style={{backgroundImage: `url(${slides[currentIndex].image})`}}
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500 mt-4'
            ></div>
            {/* Left Arrow */}
            <div
                className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30}/>
            </div>
            {/* Right Arrow */}
            <div
                className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30}/>
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SlickSlider;