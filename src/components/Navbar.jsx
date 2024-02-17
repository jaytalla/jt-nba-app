import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed   items-center w-full h-[70px] '>
        <center>
            {/* MAX WIDTH  */}
            <div className='flex px-10 pt-5 justify-between items-center max-w-[1250px]'>
                {/* LOGO HERE  */}
                <div className='flex justify-center items-center w-[50px] h-[50px] bg-white'>
                    <p className='absolute p-1 rounded-xl text-white bg-red-500 text-2xl'>NBA APP</p>
                </div>

                {/* NAVIGATION  */}
                <div>
                    <ul className='flex text-white'>
                        <li className='pl-7'>ABOUT US</li>
                        <li className='pl-7'>PLAYERS</li>
                        <li className='pl-7'>PRODUCTS</li>
                        <li className='pl-7'>CONTACT US</li>
                    </ul>
                </div>
            </div>
        </center>
    </div>
  )
}

export default Navbar