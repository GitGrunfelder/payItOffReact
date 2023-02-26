import React, { useState, useEffect } from "react";
import Expenses from "./Expenses";
import InfoBox from "./InfoBox";
import Calculate from "./Calculate";


function Info() {
  
  const [loanInfo, setLoanInfo] = useState({
    loanAmount: '',
    maturationDate:'',
    interestRate: '',
    income: '',
    showResults: false
  })
  
  const [expenses, setExpenses] = useState([])

  const [total, setTotal] = useState(0)

  const [spare, setSpare] = useState(0)

  let USD = Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
  



  function updateLoan(event) {
    setLoanInfo({
    ...loanInfo,
      [event.target.name]: event.target.value
    })
  }

  function addExpense(newExpense) {
    setExpenses([...expenses, newExpense])
  }

  useEffect(() => {
   setTotal(expenses.reduce((prevVal, nextItem) => {
     return prevVal + Number(nextItem.amount);
     }, 0))
  }, [expenses]);


  function handleSubmit(event) {
    event.preventDefault()
    setLoanInfo({
      ...loanInfo, 
      showResults: !loanInfo.showResults
    })
  }

  return (
    
    <div className="flex items-center justify-center flex-col text-center pt-10 pb-6 mb-8">
        
          <form className="form grid grid-cols-1 md:grid-cols-3 gap-5" onSubmit={handleSubmit}>
            <div className="loanInfo">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 text-left"
                htmlFor="loanAmount"
              >
                Loan Amount:
              </label>
              <input
                type="number"
                step='any'
                min='0'
                name="loanAmount"
                id="loanAmount"
                placeholder="e.g. 12000"
                className="p-2 rounded-sm w-full border border-gray-300"
                value={loanInfo.loanAmount}
                onChange={updateLoan}
              />
              <label
                className="block text-gray-700 text-sm font-bold my-2 text-left"
                htmlFor="loanTerm"
              >
                Loan Deadline:

              </label>
              <input
                type="date"
                name="maturationDate"
                id="maturationDate"
                className="p-2 rounded-sm w-full border border-gray-300"
                value={loanInfo.maturationDate}
                onChange={updateLoan}
              />
              
                <div className="interest">
                  <label
                    className="block text-gray-700 text-sm font-bold my-2 text-left"
                    htmlFor="interestRate"
                  >
                    Annual Interest Rate:
                  </label>
                  <input
                    type="number"
                    step='any'
                    min='0'
                    name="interestRate"
                    id="interestRate"
                    placeholder="'6.13'"
                    className="p-2 rounded-sm w-full border border-gray-300"
                    value={loanInfo.interestRate}
                    onChange={updateLoan}
                  />
                </div>
            </div>
            
            <div className="income">
            <label
                className="block text-gray-700 text-sm font-bold mb-2 text-left"
                htmlFor="income"
                >
                Monthly Net Income:
                </label>
                <input
                type="text"
                name="income"
                id="income"
                placeholder="(After Taxes)"
                className="p-2 rounded-sm w-full border border-gray-300"
                value={loanInfo.income}
                onChange={updateLoan}
                />
            </div>

            <div className="expenses-field">
            <Expenses onClick={addExpense}/>
            </div>


            
            <div className='expense-list-container border-b pb-2 lg:hidden text-left'>
              <h2 className='expense-list-title font-bold border-b mb-2 pb-2'>Expenses</h2>
              {expenses.map(expense => {
                return (
                  <div key={expense.id} className='expense-list-item'>
                    <p>{expense.description}: {USD.format(expense.amount)}</p>
                  </div>
                )
              })}
            </div>

            <button 
              type="submit"
              className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 text-center md:my-3 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 w-full md:col-span-3">
              Calculate
            </button>
            
          
          </form>
          {loanInfo.showResults && <Calculate loanInfo={loanInfo} maxSpare={spare}/>}
      <InfoBox 
        loanInfo={loanInfo}
        expenses={expenses}
        total={total}
        spare={[spare, setSpare]}
      />
      
      
    </div>
  );
}

export default Info;
