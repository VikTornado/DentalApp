import React, {useState} from 'react';
import {FaFacebookF, FaInstagram, FaTelegram, FaViber, FaWhatsapp} from "react-icons/fa";
import {FiMenu, FiX} from "react-icons/fi";

const Navbar = () => {
    const [nav, setNav] = useState(true)
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className={"w-full z-10 text-white bg-gray-700/80 absolute"}>
            <div
                className={"max-w-[1640px] min-h-[50px] flex m-auto justify-between items-center"}>
                <div className={""}>
                    <ul className={"hidden sm:flex px-4"}>
                        <li>
                            <a href="#home">Головна</a>
                        </li>
                        <li>
                            <a href="#services">Послуги</a>
                        </li>
                        <li>
                            <a href="#specialties">Спеціалісти</a>
                        </li>
                        <li>
                            <a href="#gallery">Фотогалерея</a>
                        </li>
                        <li>
                            <a href="#aboutus">Про&nbsp;нас</a>
                        </li>
                        <li>
                            <a href="#contacts">Контакти</a>
                        </li>
                    </ul>
                </div>
                <div className={" flex justify-between px-4"}>
                    <FaFacebookF className={"mx-4"}/>
                    <FaInstagram className={"mx-4"}/>
                    <FaViber className={"mx-4"}/>
                    <FaTelegram className={"mx-4"}/>
                    <FaWhatsapp className={"mx-4"}/>
                </div>
                <div onClick={handleNav} className={"sm:hidden z-10 text-white"}>
                    {nav ? <FiMenu size={30} className={"mr-4 cursor-pointer"}/> :
                        <FiX size={30} className={"mr-4 cursor-pointer text-white text-xl"}/>
                    }
                </div>
                <div onClick={handleNav}
                     className={!nav ? "overflow-hidden sm:hidden ease-in duration-300 absolute text-gray-300 " +
                         "left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col" :
                         "absolute h-screen top-0 left-[-100%] easy-in duration-500"}>
                    <ul className={"h-full w-full text-center pt-12"}>
                        <li className={"text-2xl py-8"}>
                            <a href="#home">Головна</a>
                        </li>
                        <li className={"text-2xl py-8"}>
                            <a href="#services">Послуги</a>
                        </li>
                        <li className={"text-2xl py-8"}>
                            <a href="#specialties">Спеціалісти</a>
                        </li>
                        <li className={"text-2xl py-8"}>
                            <a href="#gallery">Фотогалерея</a>
                        </li>
                        <li className={"text-2xl py-8"}>
                            <a href="#aboutus">Про нас</a>
                        </li>
                        <li className={"text-2xl py-8"}>
                            <a href="#contacts">Контакти</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;