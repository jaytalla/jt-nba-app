import React from 'react'
import GameDate from '../instance/GameDate'

const Home = () => {
  return (
    <section className='grid grid-cols-2 w-full h-screen bg-slate-900'>
        {/* first half */}
        <div className='h-screen 2xl:w-[50%] bg-slate-300 bg-[url("assets/bgs/kyrie.jpg")] bg-cover bg-no-repeat bg-blend-multiply bg-center'></div>

        {/* second half */}
        <div className='grid grid-rows-2 h-screen bg-slate-900'>
            {/* TOP PART  */}
            <div className='flex flex-col justify-center text-white items-start px-10'>
                <h2 className=''>Experience the Thrill of Basketball</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className='px-5 py-2 bg-blue-400'>Explore Now</button>
            </div>
            {/* BOT PART  */}
            <div className='flex flex-col justify-start p-10 bg-blue-950'>
              <h2 className='text-teal-200 mb-10'>Upcoming Games</h2>
              <GameDate dayDate={"20"} fullDate={"Feb 20, 2024"} time={"2:00 pm to 3:00 pm"}/>
              <GameDate dayDate={"27"} fullDate={"Feb 27, 2024"} time={"1:00 pm to 2:00 pm"}/>
              <GameDate dayDate={"02"} fullDate={"Mar 2, 2024"} time={"4:00 pm to 5:00 pm"}/>
              <GameDate dayDate={"10"} fullDate={"Mar 20, 2024"} time={"5:00 pm to 6:00 pm"}/>
            </div>
        </div>
    </section>
  )
}

export default Home