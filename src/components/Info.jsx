import React, { useState } from "react";
import Expenses from "./Expenses";

function Info() {
  
  const [state, setState] = useState(
    {
      loanAmount: '',
      loanTerm: '',
      interest:'',
      interestRate: '',
      income:'',
    }
  )

  const [expenses, setExpenses] = useState({
    expenses: {
    }
    
  })


  function handleChange(event) {
    setState({
    ...state,
      [event.target.name]: event.target.value
    })
  }

  function handleAdd(event) {
    setExpenses(prevExpenses => 
      ({
        expenses: {
        ...prevExpenses.expenses,
          [event.target.name]: event.target.value
        }
      })
    )
  }


  return (
    <div className="flex items-center justify-center flex-col text-center pt-10 pb-6 mb-8">
      
      <form action="" method="post" className="grid grid-cols-3 gap-5">
        <div className="loanInfo">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 text-left"
          for="loanAmount"
        >
          Loan Amount:
        </label>
        <input
          type="text"
          name="loanAmount"
          id="loanAmount"
          className="p-2 rounded-sm w-full border border-gray-300"
          value={state.loanAmount}
          onChange={handleChange}
        />
        <label
          className="block text-gray-700 text-sm font-bold my-2 text-left"
          for="loanTerm"
        >
          Loan Term:
        </label>
        <input
          type="text"
          name="loanTerm"
          id="loanTerm"
          className="p-2 rounded-sm w-full border border-gray-300"
          value={state.loanTerm}
          onChange={handleChange}
        />
        <label
          className="block text-gray-700 text-sm font-bold my-2 text-left"
          for="interest"
        >
          Would you like to account for interest?
        </label>
        <select
          className="rounded w-full p-2 border border-gray-300"
          name="interest"
          id="interest"
          value={state.interest}
          onChange={handleChange}
          required
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
        {state.interest === "yes" && (
          <div className="interest">
            <label
              className="block text-gray-700 text-sm font-bold my-2 text-left"
              for="interestRate"
            >
              Interest Rate:
            </label>
            <input
              type="text"
              name="interestRate"
              id="interestRate"
              className="p-2 rounded-sm w-full border border-gray-300"
              value={state.interestRate}
              onChange={handleChange}
            />
            
          </div>
        )}
        </div>

        <div className="income">
        <label
              className="block text-gray-700 text-sm font-bold mb-2 text-left"
              for="income"
            >
              Net Income:
            </label>
            <input
              type="text"
              name="income"
              id="income"
              className="p-2 rounded-sm w-full border border-gray-300"
              value={state.income}
              onChange={handleChange}
            />
        </div>
        <Expenses 
          // handleAdd={this.handleAdd.bind(this)}
          
        />

      </form> 
    </div>
  );
}

export default Info;
