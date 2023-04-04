import React from 'react';
import { FaFacebookF, FaInstagram, FaViber, FaWhatsapp} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full bg-gray-900 text-gray-300 py-2 px-2'>

            <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
                <div className={"flex flex-col py-4"}>
                    <p className='left-0'>вул. Василя Балога, 2з., Uzhhorod, Ukraine</p>
                    <p className='left-0'>+38095 639 1179</p>
                </div>
                <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                    <a href="https://facebook.com/"> <FaFacebookF/></a>
                    <a href="https://instagram.com/"> <FaInstagram/></a>
                    <a href="viber://chat?number=+380956391179"> <FaViber/> </a>
                    <a href="whatsapp://send?phone=+380956391179"> <FaWhatsapp/></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;

