import React from 'react';
import {FaTooth} from "react-icons/fa";
import {AiFillPhone, AiOutlineClockCircle} from "react-icons/ai";

const TopBar = () => {
    return (
        <div className={"w-full h-full "}>
            <div className={"max-w-[1640px] flex m-auto items-center justify-between py-2"}>
                <div className={"flex items-center"}>
                    <FaTooth size={30} className={"mr-2"}/>
                    <h1 className={"uppercase text-xl font-bold text-gray-700"}>Dental</h1>
                </div>
                <div className={"sm:flex"}>
                    <div className={"md:text-[1px] flex items-center px-4"}>
                        <AiOutlineClockCircle className={" text-blue-700"}/>
                        <p className={"text-sm text-gray-700"}>9AM - 6PM</p>
                    </div>
                    <div className={"flex md:text-[1px] flex items-center px-4"}>
                        <AiFillPhone className={"text-blue-700"}/>
                        <p className={"text-sm text-gray-700"}>1-222-333-444</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;