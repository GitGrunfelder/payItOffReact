import React from 'react'

function Intro() {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-3'>
      <h1 className='text-4xl md:text-7xl mb-2 md:mb-3 font-bold text-purple-800 box-shadow-md'>Pay It Off</h1>
      <p className='text-purple md:text-xl mb-3 font-medium'>
        Find out how long it will take to pay off your loan.
      </p>
      <p className='text-purple-800 md:text-xl my-8 font-normal max-w-prose leading-relaxed px-5'>
        Ever wondered what would happen if you took every extra dollar you earned and put it towards paying off your loan? Wonder no more!
         This app calculates how much excess money you could have each month after accounting for bills, 
        and shows how long it would take to pay off a given loan using the max amount versus the minimum payments.
      </p>
      
      <p className='bg-purple-700 md:text-xl my-3 font-medium text-white p-6 rounded-md drop-shadow-sm'>
        1. Enter your loan information.<br />
        2. Enter your monthly net income.<br />
        3. Enter each of your mandatory monthly expenses.<br />
        4. Click calculate to see your results!
      </p>
    </div>
  )
}

export default Intro
 