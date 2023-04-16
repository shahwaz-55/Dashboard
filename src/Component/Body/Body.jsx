 import React from 'react'


 import {AiFillHome} from 'react-icons/ai'
 import {CiPizza} from "react-icons/ci"
import {CiBurger} from "react-icons/ci"
import {GiNoodles} from "react-icons/gi"
import {AiOutlinePlus} from "react-icons/ai"
import {AiFillStar} from "react-icons/ai"
import {MdMonetizationOn} from "react-icons/md"
import {GiPathDistance} from "react-icons/gi"
import {BsArrowLeft} from "react-icons/bs"
import {BsSearch} from "react-icons/bs"

 import food1 from '../../assets/food1.jpeg'
 import food2 from '../../assets/food2.jpeg'
 import food3 from '../../assets/food3.jpeg'
 import food4 from '../../assets/food4.jpeg'
//  import {AiOutlineAppstoredAdd} from 'react-icons/ai'

const Body = () => {
  return (
    <div className='bg-bodyBg basic-80 p-8'>
  



<div className='flex items-center  '>
        <div className='flex items-center  justify-between'>
          <input type="search" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-8 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search your fauovrite food" required />
      
      
        </div>

     
            
</div>





{/* title */}



<div className='flex items-center justify-between mt-8'>
  <div className='title'>
    <h1 className='text-[50px] text-titleColor tracking-[1px]'> Find The Best Place</h1>
      249 restaurant
      <span className='text-[16px] opacity-70'>Choose yours</span>
  </div>
  <div className='flex  justify-left'>
    <div className='special px-4 text-center border-r-2'>
      <h3 className='text-[20px] font-bold text-titleColor'>95</h3>
      </div>
    <small className='text-[16px] opacity-70'>Special</small>
  
  
  <div className='deliveries px-4 text-center border-r-2'>
      <h3 className='text-[20px] font-bold text-titleColor'>95</h3>
      </div>
    <small className='text-[16px] opacity-70'>Deliveries</small>
  </div>
  </div>

  {/* categoriesDiv */}
  <div className='flex mt-8 items-center gap-16'>
    <div className='singleCategory grid items-center justify-between text-center'>
      <div className='imgDiv h-[40px] [w-40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1'>
        <CiPizza  className=' flex justify-center m-auto w-[40px]'/>

      </div>
        <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>Pizza</span>
    </div>
     <div className='singleCategory grid items-center justify-between text-center'>
      <div className='imgDiv h-[40px] [w-40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1'>
      <CiBurger  className=' flex justify-center m-auto w-[40px]'/>

      </div>
        <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>Burger</span>
    </div>
    <div className='singleCategory grid items-center justify-between text-center'>
      <div className='imgDiv h-[40px] [w-40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1'>
      <GiNoodles className=' flex justify-center m-auto w-[40px]'/>
      </div>
        <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>Noodles</span>
    </div>
    <div className='singleCategory grid items-center justify-between text-center'>
      <div className='imgDiv h-[40px] [w-40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1'>
      <GiNoodles className=' flex justify-center m-auto w-[40px]'/>
      </div>
        <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>Pasta</span>
    </div>
    <div className='singleCategory grid items-center justify-between text-center'>
      <div className='imgDiv h-[40px] [w-40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1'>
      <GiNoodles  className=' flex justify-center m-auto w-[40px]'/>

      </div>
        <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>Smosa</span>
    </div>
    <div className='singleCategory grid items-center justify-between text-center'>
      <div className='imgDiv h-[40px] [w-40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1'>
      <GiNoodles className=' flex justify-center m-auto w-[40px]'/>
      </div>
        <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>Chicken</span>
    </div>
    <div className='singleCategory grid items-center justify-between text-center'>
      <div className='imgDiv h-[40px] [w-40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1'>
      <GiNoodles  className=' flex justify-center m-auto w-[40px]'/>
      </div>
        <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>Mutton</span>
    </div>
    <div className='singleCategory grid items-center justify-between text-center'>
      <div className='imgDiv h-[45px] w-[45px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1'>
      <GiNoodles className=' flex justify-center m-auto w-[40px]'/>

      </div>
        <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>Biryani</span>
    </div>
    <div className='singleCategory grid items-center justify-between text-center'>
      <div className='imgDiv h-[45px] w-[45px]  bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1'>
      <GiNoodles  className=' flex justify-center m-auto w-[40px]'/>
      </div>
        <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>Jlabi</span>
    </div>
    <div className='singleCategory grid items-center justify-between text-center'>
      <div className='imgDiv h-[45px] w-[45px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1'>
      <GiNoodles className=' flex justify-center m-auto w-[40px]'/>

      </div>
        <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>Dosa</span>
    </div>

    <div className='singleCategory grid items-center justify-between text-center'>
      <div className='imgDiv h-[45px] w-[45px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1'>
        
        <AiOutlinePlus className='text-center flex justify-center m-auto text-[25px] hover:scale[1.5] transition-all cursor-pointer' />

           </div>
        <span className='uppercase text-[12px] font-medium opacity-50 pt-2 text-center'>more</span>
    </div>

  </div>




{/* Restorent-section */}

<div className='restorent mt-8'>
  <div className='flex items-center justify-between'>
    <div className='title'>
      <h1 className='text-[35px] text-titleColor font-bold'>New Restorent</h1>
      <span className='text-[16px] opacity-70'><strong>9 restorents,</strong>have been opned up in the town</span>
    </div>

    <button className=' curser-pointer text-titleColor font-semiBold py-2 px-4 rounded-[5px] hover:text-bodyBg transition-all'>
      View All <BsArrowLeft className='text-[20px]'/>
    </button>
          </div>
       

      <div className='restaurantContainer py-8 flex justify-between items-center' >

       <div className='singleRestaurant w-[220px] bg-colorOne p-3 rounded-[10px] my-4'>
        <div className='imgDiv h-[130px] w-full overflow-hidden rounded-md'>
        <img src={food1} alt='w-full h-full object-cover'/>
        </div> 
        <h1 className='restNamr block text-center font-bold opacity-50 pt-4'> molef ulif</h1>  
        <small className='block text-center text-[#606060] font-medium'>asian Restorent</small>

        <div className='info mt-5 flex justify-center items-center'>
          <div className='singleInfo grid px-3'>
            <AiFillStar className='felx mt-auto justify-center items-center' />
            <h4 className='font-semibold text-[#4f4d58]'>3.7</h4>
          </div>

          <div className='singleInfo border-x-2 grid px-3'>
            <MdMonetizationOn className='felx mt-auto justify-center items-center' />
            <h4 className='font-semibold text-[#4f4d58]'>3.7</h4>
          </div>

          <div className='singleInfo grid px-3'>
            <GiPathDistance className='felx mt-auto justify-center items-center' />
            <h4 className='font-semibold text-[#4f4d58]'>3.7</h4>
          </div>
        </div>
        </div>

        <div className='singleRestaurant w-[220px] bg-[#f1fcf0] p-3 rounded-[10px]'>
        <div className='imgDiv h-[130px] w-full overflow-hidden rounded-md'>
        <img src={food2} alt='w-full h-full object-cover'/>
        </div> 
        <h1 className='restNamr block text-center font-bold opacity-50 pt-4'>Lettus Eat</h1>  
        <small className='block text-center text-[#606060] font-medium'>indian Restorent</small>

        <div className='info mt-5 flex justify-center items-center'>
          <div className='singleInfo grid px-3'>
            <AiFillStar className='felx mt-auto justify-center items-center' />
            <h4 className='font-semibold text-[#4f4d58]'>3.7</h4>
          </div>

          <div className='singleInfo border-x-2 grid px-3'>
            <MdMonetizationOn className='felx mt-auto justify-center items-center' />
            <h4 className='font-semibold text-[#4f4d58]'>3.7</h4>
          </div>

          <div className='singleInfo grid px-3'>
            <GiPathDistance className='felx mt-auto justify-center items-center' />
            <h4 className='font-semibold text-[#4f4d58]'>3.7</h4>
          </div>
        </div>
        </div>

        <div className='singleRestaurant w-[220px] bg-[#f6eff4] p-3 rounded-[10px]'>
        <div className='imgDiv h-[130px] w-full overflow-hidden rounded-md'>
        <img src={food3} alt='w-full h-full object-cover'/>
        </div> 
        <h1 className='restNamr block text-center font-bold opacity-50 pt-4'>Thai the knot</h1>  
        <small className='block text-center text-[#606060] font-medium'>Thai Restorent</small>

        <div className='info mt-5 flex justify-center items-center'>
          <div className='singleInfo grid px-3'>
            <AiFillStar className='felx mt-auto justify-center items-center' />
            <h4 className='font-semibold text-[#4f4d58]'>5.1</h4>
          </div>

          <div className='singleInfo border-x-2 grid px-3'>
            <MdMonetizationOn className='felx mt-auto justify-center items-center' />
            <h4 className='font-semibold text-[#4f4d58]'>3</h4>
          </div>

          <div className='singleInfo grid px-3'>
            <GiPathDistance className='felx mt-auto justify-center items-center' />
            <h4 className='font-semibold text-[#4f4d58]'>4</h4>
          </div>
        </div>
        </div>

        <div className='singleRestaurant w-[220px] bg-[#f1fcf0] p-3 rounded-[10px]'>
        <div className='imgDiv h-[130px] w-full overflow-hidden rounded-md'>
        <img src={food4} alt='w-full h-full object-cover'/>
        </div> 
        <h1 className='restNamr block text-center font-bold opacity-50 pt-4'>Lord Of The Fried </h1>  
        <small className='block text-center text-[#606060] font-medium'>Indian Restaurant</small>

        <div className='info mt-5 flex justify-center items-center'>
          <div className='singleInfo grid px-3'>
            <AiFillStar className='felx mt-auto justify-center items-center' />
            <h4 className='font-semibold text-[#4f4d58]'>3</h4>
          </div>

          <div className='singleInfo border-x-2 grid px-3'>
            <MdMonetizationOn className='felx mt-auto justify-center items-center' />
            <h4 className='font-semibold text-[#4f4d58]'>7</h4>
          </div>

          <div className='singleInfo grid px-3'>
            <GiPathDistance className='felx mt-auto justify-center items-center' />
            <h4 className='font-semibold text-[#4f4d58]'>1.7</h4>
          </div>
        </div>
        </div>

        <div className='singleRestaurant w-[220px] bg-colorOne p-3 rounded-[10px]'>
        <div className='imgDiv h-[130px] w-full overflow-hidden rounded-md'>
        <img src={food4} alt='w-full h-full object-cover'/>
        </div> 
        <h1 className='restNamr block text-center font-bold opacity-50 pt-4'>Wok This Way. </h1>  
        <small className='block text-center text-[#606060] font-medium'>Itaian Restaurant</small>

        <div className='info mt-5 flex justify-center items-center'>
          <div className='singleInfo grid px-3'>
            <AiFillStar className='felx mt-auto justify-center items-center' />
            <h4 className='font-semibold text-[#4f4d58]'>3</h4>
          </div>

          <div className='singleInfo border-x-2 grid px-3'>
            <MdMonetizationOn className='felx mt-auto justify-center items-center' />
            <h4 className='font-semibold text-[#4f4d58]'>7</h4>
          </div>

          <div className='singleInfo grid px-3'>
            <GiPathDistance className='felx mt-auto justify-center items-center' />
            <h4 className='font-semibold text-[#4f4d58]'>1.7</h4>
          </div>
        </div>
        </div>

       
        </div>


  </div>
</div>









    
  )
}

export default Body
