import React from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import cloud from '../assets/cloud-img.png';
const MainCard = () => {
  return (
    <div className="bg-white h-52 rounded-3xl w-11/12 mt-4 drop-shadow-md">

        <div className="flex text-xs p-4">
          <div className="font-semibold mt-1">Upcomming hours</div>

          <div className="flex bg-gray-100 rounded-3xl w-32 h-7 justify-center items-center text-gray-600 ml-80">
            <div className="">Rain precipitation</div>
            <MdKeyboardArrowDown />
          </div>

          <div className="flex bg-gray-100 rounded-3xl w-20  justify-center items-center font-semibold ml-4">
            Next days
            <MdKeyboardArrowRight />
          </div>
        </div>
          <div>
            <div className="text-xl font-bold pl-4">New York, USA</div>
            <div className="flex justify-between">
              <div><img className="h-20 w-24 ml-8" src={cloud} alt="cloud" /></div>
              <div className="text-5xl font-bold pr-10 pt-4 text-gray-700">25 &deg;C</div>
            </div>
            <div className="pl-4 font-bold text-sm mt-1">Few Clouds</div>
          </div>

    </div>
  );
};

export default MainCard;
