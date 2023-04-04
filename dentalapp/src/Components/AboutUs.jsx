import React from 'react';
import img1 from "../Assets/Doctors/2.jpg"
import img2 from "../Assets/Doctors/1.jpg"
import img3 from "../Assets/Doctors/3.jpg"

const AboutUs = () => {
    const images = [
        {img: img1, title: "Тищенко Олег Томович"},
        {img: img2, title: "Завидняк Яна Борисивна"},
        {img: img3, title: "Зеленський Петро Олексійович"},
    ]
    return (
        <div id={"specialties"} className={'max-w-[1440px] m-auto grid grid-col-1 gap-6 mt-[-5%] md:grid-cols-3 px-8'}>
            {images.map((item, id) => {
                return (
                    <div
                        className={"relative w-[50%] m-auto flex items-center justify-center h-auto w-full drop-shadow-2xl border-2 shadow-gray-400" +
                            "rounded-xl group hover:bg-gradient-to-r from-gray-300 to-[#001b5e] md:w-[75%] flex"}>
                        <img className={'h-full w-full group-hover:opacity-10 bg-cover bg-center border-4'} key={id}
                             src={item.img} alt=""/>
                        <div className={'hidden group-hover:block absolute top-[50%] translate-y-[-50%] px-2'}>
                            <h3 className={'text-2xl font-bold text-white tracking-wider text-center'}>{item.title}</h3>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default AboutUs;