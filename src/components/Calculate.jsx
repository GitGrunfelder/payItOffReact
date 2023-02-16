import React from 'react'
import { DateTime } from "luxon";

function Calculate(props) {
  const { loanAmount, interestRate, maturationDate } = props.loanInfo
  const maxSpare = props.maxSpare
  

  return (
    <div className='col-span-3'>
      <button 
          type="submit"
          className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 text-center my-3 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 w-full">
          Calculate
          </button>

    </div>
    
  )
}

export default Calculate
