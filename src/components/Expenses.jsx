import React from "react";

function Expenses(props) {
  return (
    <div className="expenses">
      <form>
        <label
          className="block text-gray-700 text-sm font-bold my-2 text-left"
          htmlFor="expenseName"
        >
          Expense Name:
        </label>
        <input
          type="text"
          name="expenseName"
          id="expenseName"
          className="p-2 rounded-sm w-full border border-gray-300"
          // value={props.expenseName}
          // onChange={handleChange}
        />
        <label
          className="block text-gray-700 text-sm font-bold my-2 text-left"
          htmlFor="expenseCost"
        >
          Expense Cost:
        </label>
        <input
          type="text"
          name="expenseCost"
          id="expenseCost"
          className="p-2 rounded-sm w-full border border-gray-300"
          // value={props.expenseName}
          // onChange={handleChange}
        />
        <button
          type="button"
          className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 my-3 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default Expenses;
