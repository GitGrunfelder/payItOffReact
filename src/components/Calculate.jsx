import React from 'react'
import { DateTime } from "luxon";
import { nper, pmt } from 'financial';


function Calculate(props) {
  const { loanAmount, interestRate, maturationDate } = props.loanInfo
  const maxSpare = props.maxSpare

  let USD = Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
  let loanAmountNumber = parseInt(loanAmount)
  let start = DateTime.now();
  let end = DateTime.fromISO(maturationDate);
  let diff = end.diff(start, ['months']).toObject();
  let months = Math.floor(diff.months);
  let monthlyInterest = ((interestRate/100)/12)
  let minPayment = -pmt( monthlyInterest, months, loanAmountNumber)
  let minTime = nper(monthlyInterest, -maxSpare, loanAmountNumber)
  let minGrandTotal = minTime * maxSpare
  let maxGrandTotal = minPayment * months
  let savings = maxGrandTotal - minGrandTotal


  return (
    <div className='calculate-container grid grid-cols-2 w-400 gap-6 mt-5'>
      <div className='min-pay-max-cost col-span-1 bg-red-200 p-4 rounded'>
          <p>Minimum Monthly Payment: {USD.format(minPayment)}</p>
          <p>Months Left: <span className="font-bold">{months}</span></p>
          <p>Grand Total: {USD.format(maxGrandTotal)}</p>
      </div>
      
      <div className='max-pay-min-cost col-span-1 bg-green-200 p-4 rounded'>
          <p>Maximum Monthly Payment: {USD.format(maxSpare)}</p>
          <p>Months Left: <span className="font-bold">{Math.floor(minTime)}</span></p>
          <p>Grand Total: {USD.format(minGrandTotal)}</p>
          <p>Possible Savings: {USD.format(savings)}</p>
        </div>
    </div>
    
  )
}

export default Calculate
