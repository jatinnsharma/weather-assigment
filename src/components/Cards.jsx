import React from 'react'
import {FaArrowDown,FaArrowUp,FaRegAngry,FaRegSmileWink } from 'react-icons/fa'
import {WiHumidity} from 'react-icons/wi'
import {GiWhirlwind} from 'react-icons/gi'

const Cards = () =>{
  return (
    <div className='mt-10 '>
        <div className='font-bold'>More details of today's weather</div>
        <div className='grid grid-cols-3'>
   {/* card1-Min*/}
   <div className='bg-white h-24 w-48 mt-8 rounded-3xl justify-center items-center text-center drop-shadow-md '>
            <div className='flex justify-center items-center pt-4'>
                <div><FaArrowDown/></div>
                <div className='font-bold ml-1'>Min</div>
            </div>
            <div className='text-2xl mt-2 '>23 &deg;C</div>
        </div>

        {/* card2 -Pressure*/}
        <div className='bg-white h-24 w-48 mt-8 rounded-3xl justify-center items-center text-center drop-shadow-md'>
            <div className='flex justify-center items-center pt-4'>
                <div className='mr-1'><FaRegAngry/></div>
                <div className='font-bold'>Pressure</div>
            </div>
            <div className='text-2xl mt-2 '>1023 hPa</div>
        </div>

        {/* card3-feels-like*/}
        <div className='bg-white h-24 w-48 mt-8 rounded-3xl justify-center items-center text-center drop-shadow-md'>
            <div className='flex justify-center items-center pt-4'>
                <div className='text-lg'><FaRegSmileWink/></div>
                <div className='font-bold ml-1'>Feels Like</div>
            </div>
            <div className='text-2xl mt-2 '>28 &deg;C</div>
        </div>

        {/* card 4 - Max*/}
        <div className='bg-white h-24 w-48 mt-8 rounded-3xl justify-center items-center text-center drop-shadow-md'>
            <div className='flex justify-center items-center pt-4'>
                <div className='mr-1'><FaArrowUp/></div>
                <div className='font-bold'>Max</div>
            </div>
            <div className='text-2xl mt-2 '>23 &deg;C</div>
        </div>


        {/* card 5 - Humidity */}
        <div className='bg-white h-24 w-48 mt-8 rounded-3xl justify-center items-center text-center drop-shadow-md'>
            <div className='flex justify-center items-center pt-4'>
                <div className='text-2xl mr-1'><WiHumidity/></div>
                <div className='font-bold'>Humidity</div>
            </div>
            <div className='text-2xl mt-2 '>52 %</div>
        </div>


        {/* card 6 - wind Speed */}
        <div className='bg-white h-24 w-48 mt-8 rounded-3xl justify-center items-center text-center drop-shadow-md'>
            <div className='flex justify-center items-center pt-4'>
                <div className='mr-1'><GiWhirlwind/></div>
                <div className='font-bold'>Wind Speed</div>
            </div>
            <div className='text-2xl mt-2 '>3 m/s</div>
        </div>
        </div>
     

    </div>
  )
}


export default Cards