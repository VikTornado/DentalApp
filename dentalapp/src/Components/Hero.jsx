import React from 'react';
import HeroWP from "../Assets/wp23/2.png"

const Hero = () => {
    return (
        <div id={"home"} className={"w-full h-[90vh]"}>
            <img src={HeroWP} className={"w-full h-full object-cover"}/>
            <div className={"max-w-[1440px] m-auto"}>
                <div
                    className={"absolute top-[35%] w-full md:-[50%] max-w-[600px] h-full flex flex-col px-4 mx-4 text-black"}>
                    <h1 className={"font-bold text-4xl pt-4"}>МИ ПРАЦЮЄМО, ЩОБ ВИ ПОСМІХАЛИСЯ!</h1>
                    <h2 className={"py-4 italic"}>Ми чекаємо на вас!</h2>
                    <p className={"w-full pr-4"}>«Клініка Завидняк» в Ужгороді пропонує широкий спектр
                        стоматологічних послуг – від консультації та професійного догляду за ротовою порожниною до
                        лікування різних по складності хвороб зубів та багатьох видів протезування – знімного та
                        незнімного. Ми індивідуально підходимо до кожного пацієнта та разом плануємо
                        час та хід лікування зубів та інших проблем ротової порожнини.</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;