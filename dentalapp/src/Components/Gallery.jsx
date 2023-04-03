import React from 'react';
import img1 from "../Assets/toothMachine/4.png"
import img2 from "../Assets/toothMachine/5.png"
import img3 from "../Assets/toothMachine/6.png"
import img4 from "../Assets/toothMachine/7.png"
import img5 from "../Assets/toothMachine/8.png"

const Gallery = () => {
    return (
        <div className='max-w-[1440px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
            {/* Left Side */}
            <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
                <img
                    className='row-span-3 object-cover w-full h-full p-2'
                    src={img1} alt='/'
                />
                <img
                    className='row-span-2 object-cover w-full h-full p-2'
                    src={img2} alt='/'
                />
                <img
                    className='row-span-2 object-cover w-full h-full p-2'
                    src={img3} alt='/'
                />
                <img
                    className='row-span-3 object-cover w-full h-full p-2'
                    src={img4} alt='/'
                />
                <img
                    className='row-span-2 object-cover w-full h-full p-2'
                    src={img5} alt='/'
                />
            </div>
            {/* Right Side */}
            <div className='flex flex-col h-full justify-center'>
                <h3 className='text-5xl md:text-6xl font-bold'>СТОМАТОЛОГІЯ В УЖГОРОДІ!</h3>
                <p className='text-2xl py-6'>
                    Вітаю на сторінці нашої стоматологічної клініки!
                </p>
                <p className='pb-6'>
                    «Авторська стоматологія» в Ужгороді –клініка, яка пропонує широкий спектр стоматологічних послуг –
                    від консультації та професійного догляду за ротовою порожниною до лікування різних по складності
                    хвороб зубів та багатьох видів протезування – знімного та незнімного. Тут працюють професійні
                    лікарі-стоматологи: терапевт-мікроскопіст, ортопед, гігієніст та хірург; а також четверо
                    кваліфікованих та досвідчених зубних техніків. Так, у клініці під одним дахом знаходиться і
                    зуботехнічна лабораторія, що дає можливість лікареві та зубному техніку, у тісній їх співпраці,
                    знаходити найбільш правильні та прогресивні рішення непростих клінічних ситуацій. Ми індивідуально
                    підходимо до кожного пацієнта та разом плануємо час та хід лікування зубів та інших проблем ротової
                    порожнини.
                </p>
            </div>
        </div>
    );
};

export default Gallery;

