import React from 'react'
import {GiHamburger} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BiRestaurant} from 'react-icons/bi'
import {BsBookmarkCheckFill} from 'react-icons/bs'
import {AiFillHeart} from "react-icons/ai"
// import {AiFillHeart} from 'react-icons/ai'
import map from '../../assets/map.jpg'

const SideMenu = () => {
  return (
    <div className='bg-sideMenuBg relative h-[100] basic-20 p-8'>
      {/* logo */}
      <div className='logo mt-4 gap text-[white] flex items-center justify-center m-auto'>
            <GiHamburger className='text-[20px] ' />
            <h1 className='text-[20px] align-center justify-center font-black'>Foodie</h1>
      </div>
    
    {/* user div */}
    <div className='flex items-center justfy-center text-[white] flex-col mt-[3rem] admin'>
    <img  src='' alt='Admin Image' className=' h-[80px] w-[80px] border-red-200 border-[40px] object-cover rounded-full'/>
    <span className='opacity-70 mt-2 text-gray-400'>Welcome</span>
    <h3 className='font-bold text-textColor '> Dashboard</h3>
    </div>

    {/* simple menu */}
    <div className='m-auto grid justify-center mt-4'>
      <li className='flex pt-3 pb-3 gap-2 hover:opacity-100 items-center'>
        <AiFillHome  className='text-[white]'/>
        <span className='text-textColor'>Home</span>
      </li>
      <li className='flex pt-3 pb-3 gap-2 hover:opacity-100 items-center'>
        <BiRestaurant  className='text-[white]'/>
        <span className='text-textColor'>Catogories</span>
      </li>
      <li className='flex pt-3 pb-3 gap-2 hover:opacity-100 items-center'>
        <BsBookmarkCheckFill  className='text-[white]'/>
        <span className='text-textColor'>Reservation</span>
      </li>
      <li className='flex pt-3 pb-3 gap-2 hover:opacity-100 items-center'>
        <AiFillHeart className='text-[white]'/>
        <span className='text-textColor'>Favourites</span>
      </li>
    </div>

    {/* Map */}

    <div className='mt-5 h-[14rem] w-full rounded-xl overflow-hidden'>
      <img src={map} alt='Map Image' className='object-cover h-[100%] w-[100%]' />
    </div>

    </div>
  )
}

export default SideMenu
