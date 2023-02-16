import React, { useEffect } from 'react'

function InfoBox(props) 
 {
  const {loanAmount, maturationDate, interest, interestRate} = props.loanInfo;
  const income = props.loanInfo.income;
  const expenses = props.expenses;
  const total = props.total;
  const [spare, setSpare] = props.spare

  useEffect(() => {
    setSpare(income - total);
   }, [total]);


  return (
    <div className='fixed top-3 right-3 bg-purple-600 p-4 rounded-md text-white text-left'>
      <h2 className='currentStats font-bold border-b text-left mb-2'>Current Stats</h2>
      <p>Loan Amount: {loanAmount}</p>
      <p>Maturation Date: {maturationDate}</p>
      <p>Include Interest: {interest}</p>
      {interest == "Yes" && <p>Interest Rate: {interestRate}</p>}
      <p>Monthly Income: {income}</p>

      <h2 className='expense-list-title font-bold border-b mt-4 mb-2'>Expenses</h2>
      <div className='expense-list-container border-b pb-2'>
        {expenses.map(expense => {
          return (
            <div key={expense.id} className='expense-list-item'>
              <p>{expense.description}: {expense.amount}</p>
            </div>
          )
        })}
      </div>
      <p className='font-bold mt-4'>Total Expenses: {total}</p>
      {(income > 0 && expenses.length > 0)&& <p className='font-bold mt-4'>Max Spare Income: {spare}</p>}
    </div>
  )
}

export default InfoBox