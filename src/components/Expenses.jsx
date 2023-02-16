import React, { useState } from "react";

function Expenses(props) {
  const [item, setItem] = useState({
    id: new Date().getTime().toString(),
    description:'',
    amount:''
  });

  function handleUpdateExpense(e) {
    setItem({
    ...item,
      [e.target.name]: e.target.value
    });
  };

  function handleAddExpense(e) {
    e.preventDefault();
    props.onClick(item);
    setItem({
      id: new Date().getTime().toString(),
      description:'',
      amount:''
    });
  };
  return (
    <div className="expenses">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 text-left"
          htmlFor="expenseName"
        >
          Expense Name:
        </label>
        <input
          type="text"
          name="description"
          id="expenseName"
          className="p-2 rounded-sm w-full border border-gray-300"
          value={item.description}
          onChange={handleUpdateExpense}
        />
        <label
          className="block text-gray-700 text-sm font-bold my-2 text-left"
          htmlFor="expenseCost"
        >
          Expense Cost:
        </label>
        <input
          type="text"
          name="amount"
          id="expenseCost"
          className="p-2 rounded-sm w-full border border-gray-300"
          value={item.amount}
          onChange={handleUpdateExpense}
        />
        <button
          type="button"
          onClick={handleAddExpense}
          className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 my-3 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
          disabled={!item.description || !item.amount}
        >
          Add Expense
        </button>
    </div>
  );
}

export default Expenses;
