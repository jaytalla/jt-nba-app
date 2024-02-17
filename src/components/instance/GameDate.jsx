import React from 'react'

const GameDate = ({dayDate, fullDate, time}) => {
  return (
    <div>
        <div className='flex justify-start items-center mb-5'>
            <h2 className='mr-5 text-amber-50'>{dayDate}</h2> 
            <div className='flex text-white flex-col justify-center items-start'>
                <p className='mb-0'>{fullDate}</p>
                <p className='mb-0'>{time}</p>
            </div>
        </div>
    </div>
  )
}

export default GameDate