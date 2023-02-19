import React from 'react'
import { DateTime } from "luxon";
import { nper, pmt } from 'financial';


function Calculate(props) {
  const { loanAmount, interestRate, maturationDate } = props.loanInfo
  const maxSpare = props.maxSpare
  let loanAmountNumber = parseInt(loanAmount)
  let start = DateTime.now();
  let end = DateTime.fromISO(maturationDate);
  let diff = end.diff(start, ['months']).toObject();
  let months = Math.floor(diff.months);
  let monthlyInterest = ((interestRate/100)/12)
  let minPayment = pmt( monthlyInterest, months, loanAmountNumber)
  let minTime = Math.round(nper(monthlyInterest, -maxSpare, loanAmountNumber), 5)
  let USD = Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});


  return (
    <div className='col-span-3'>
      <button 
          type="submit"
          className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 text-center my-3 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 w-full">
          Calculate
          </button>
          <p>Current Date: {start.toISODate()}</p>
          <p>End Date: {end.toISODate()}</p>
          <br></br>
          <p>Months Left: {months}</p>
          <p>Minimum Monthly Payment: {USD.format(-minPayment)}</p>
          <p>Maximum Monthly Payment: {USD.format(maxSpare)}</p>
          <p>Months Left: {minTime}</p>
    </div>
    
  )
}

export default Calculate
