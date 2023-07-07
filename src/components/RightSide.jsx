import React from 'react'
import {BsThreeDots} from 'react-icons/bs'
import profile from '../assets/profile-image.png'
import MainCard from './MainCard'
import Cards from './Cards.jsx'

const RightSide = () => {
  return (
    <div className='w-full min-w-400 py-5 px-10 rounded-3xl relative pb-34 bg-color-rightSide right-4'
    >
      <div className="heading">
        <div className='font-bold'>Welcome back isabella!</div>
        <div className='flex '>
        <div className='mt-1 '>check out today's weather information</div>


        <div className='ml-96 mt-2'><BsThreeDots/></div>
        <div ><img className='h-9 w-8 rounded-xl ml-6' src={profile}  alt="" /></div>

        </div>

          <MainCard/>
          <Cards/>

      </div>
    </div>
  )
}

export default RightSide