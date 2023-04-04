import React from 'react';
import {FaTooth} from "react-icons/fa";
import {AiFillPhone, AiOutlineClockCircle} from "react-icons/ai";

const TopBar = () => {
    return (
        <div className={"w-full h-full px-2"}>
            <div className={"max-w-[1440px] flex m-auto items-center justify-between py-2"}>
                <div className={"flex items-center"}>
                    <FaTooth size={30} className={"mx-4"}/>
                    <h1 className={" text-xl font-bold text-gray-700"}>Dr.Zavydniak</h1>
                </div>
                <div className={"sm:flex"}>
                    <div className={" flex items-center px-4 "}>
                        <AiOutlineClockCircle className={"text-blue-700 mx-2"}/>
                        <p className={"text-sm text-gray-700"}>8:00 - 19:00</p>
                    </div>
                    <div className={"flex flex items-center px-4"}>
                        <AiFillPhone className={"text-blue-700 mr-2"}/>
                        <p className={"text-sm text-gray-700"}>+38 095 639 1179</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;