import React, {useState} from "react";

import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css"

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  return (
    <div>
      <Card>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} 
        />
        {props.expenses.map((expense) => (
          <ExpenseItem 
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses