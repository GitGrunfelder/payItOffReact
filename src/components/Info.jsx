import React, { useState, useEffect } from "react";
import Expenses from "./Expenses";
import InfoBox from "./InfoBox";
import Calculate from "./Calculate";


function Info() {
  
  const [loanInfo, setLoanInfo] = useState({})
  
  const [expenses, setExpenses] = useState([])

  const [total, setTotal] = useState(0)

  const [spare, setSpare] = useState(0)





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
    console.log(loanInfo)
    console.log(spare)
    console.log('loanInfo')
  }

  return (
    <div className="flex items-center justify-center flex-col text-center pt-10 pb-6 mb-8">
          <form className="form grid grid-cols-3 gap-5" onSubmit={handleSubmit}>
            <div className="loanInfo">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 text-left"
                htmlFor="loanAmount"
              >
                Loan Amount:
              </label>
              <input
                type="number"
                name="loanAmount"
                id="loanAmount"
                className="p-2 rounded-sm w-full border border-gray-300"
                value={loanInfo.loanAmount}
                onChange={updateLoan}
              />
              <label
                className="block text-gray-700 text-sm font-bold my-2 text-left"
                htmlFor="loanTerm"
              >
                Maturation Date:

              </label>
              <input
                type="date"
                name="maturationDate"
                id="maturationDate"
                className="p-2 rounded-sm w-full border border-gray-300"
                value={loanInfo.maturationDate}
                onChange={updateLoan}
              />
              <label
                className="block text-gray-700 text-sm font-bold my-2 text-left"
                htmlFor="interest"
              >
                Would you like to account for interest?
              </label>
              <select
                className="rounded w-full p-2 border border-gray-300"
                name="interest"
                id="interest"
                value={loanInfo.interest}
                onChange={updateLoan}
                required
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
              {loanInfo.interest === "Yes" && (
                <div className="interest">
                  <label
                    className="block text-gray-700 text-sm font-bold my-2 text-left"
                    htmlFor="interestRate"
                  >
                    Interest Rate:
                  </label>
                  <input
                    type="number"
                    name="interestRate"
                    id="interestRate"
                    className="p-2 rounded-sm w-full border border-gray-300"
                    value={loanInfo.interestRate}
                    onChange={updateLoan}
                  />
                </div>
              )}
            </div>
            
            <div className="income">
            <label
                className="block text-gray-700 text-sm font-bold mb-2 text-left"
                htmlFor="income"
                >
                Net Income:
                </label>
                <input
                type="text"
                name="income"
                id="income"
                className="p-2 rounded-sm w-full border border-gray-300"
                value={loanInfo.income}
                onChange={updateLoan}
                />
            </div>

            <div className="expenses-field">
            <Expenses onClick={addExpense}/>
            </div>

            <Calculate loanInfo={loanInfo} maxSpare={spare}/>
          
          </form>
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
