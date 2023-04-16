import React from 'react'
import SideMenu from './SideMenu/SideMenu'
import Body from './Body/body'


const Container = () => {
  return (
    <div className='flex h-[100vh]   w-[85vw]  rounded-x1 overflow-hidden '>
      <SideMenu />
     <Body/>
    </div>
  )
}

export default Container
