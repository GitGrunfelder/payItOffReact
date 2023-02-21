import React, { useEffect } from 'react'

function InfoBox(props) 
 {
  var {loanAmount, maturationDate, interestRate} = props.loanInfo;
  const income = props.loanInfo.income;
  const expenses = props.expenses;
  const total = props.total;
  const [spare, setSpare] = props.spare

  let USD = Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});

  useEffect(() => {
    setSpare(income - total);
   }, [total, income]);


  return (
    <div className='hidden lg:block fixed top-3 right-3 bg-purple-600 p-4 rounded-md text-white text-left'>
      <h2 className='currentStats font-bold border-b text-left mb-2'>Current Stats</h2>
      <p>Loan Amount: {loanAmount > 0 && USD.format(loanAmount)}</p>
      <p>Maturation Date: {maturationDate}</p>
      <p>Interest Rate: {interestRate}%</p>
      <p>Monthly Income: {income > 0 && USD.format(income)}</p>

      <h2 className='expense-list-title font-bold border-b mt-4 mb-2'>Expenses</h2>
      <div className='expense-list-container border-b pb-2'>
        {expenses.map(expense => {
          return (
            <div key={expense.id} className='expense-list-item'>
              <p>{expense.description}: {USD.format(expense.amount)}</p>
            </div>
          )
        })}
      </div>
      <p className='font-bold mt-4'>Total Expenses: {total > 0 && USD.format(total)}</p>
      {(income > 0 && expenses.length > 0)&& <p className='font-bold mt-4'>Max Spare Income: {USD.format(spare)}</p>}
    </div>
  )
}

export default InfoBox