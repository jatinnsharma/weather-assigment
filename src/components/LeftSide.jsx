import {BsToggle2Off,BsThreeDots,BsSend} from 'react-icons/bs'
import {PiDotOutline} from 'react-icons/pi'
import {FiSunrise,FiSun } from 'react-icons/fi'
import {MdArrowBackIosNew,MdArrowForwardIos} from 'react-icons/md'

import {AiFillPlusSquare} from 'react-icons/ai'

const LeftSide = () => {
  return (

      <div className="w-30 min-w-64 flex flex-col justify-between bg bg-blue-500 p-10 text-white h-680 ">
          
        <div className='flex flex-row justify-around text-white text-2xl'>
            <div><AiFillPlusSquare/></div>
            <div><BsThreeDots/></div>
            <div className=''><BsToggle2Off/></div>
        </div>

        <div className='flex flex-row mt-12'> 
            <div className='mt-2 text-sm' ><BsSend /></div>
            <div className='text-lg ml-1'>New York, USA </div>
            <div className='mt-1 ml-12'><FiSunrise/></div> 
            <div className='text-lg ml-3'>07:19</div>
        </div>

        <div className='flex flex-row text-sm mt-1'> 
            <div className='ml-5'>Today 28 sept</div>
            <div className=' ml-20'><FiSunrise/></div>
            <div className='ml-3'>19:32</div>
        </div>
            <div className='text-7xl relative top-14 left-44'><PiDotOutline/></div>
        <div className='flex flex-row '> 
            <div className='mt-9'><MdArrowBackIosNew/></div>
            <div className='text-8xl mx-16'>27</div>
            <div className='mt-9'><MdArrowForwardIos/></div>
        </div>
        <div className='flex flex-row ml-20 text-xl mb-72'> 
            <div className='mt-1 mr-2'><FiSun/></div>
            <div>Sunny</div>
        </div>
      </div>

  );
};

export default LeftSide;
