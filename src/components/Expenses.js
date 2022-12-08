import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"

function Expenses(props) {
  console.log(props.expenses.length)
  return (
    <div>
      {props.expenses.map((expense) => (
        <ExpenseItem 
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      ))}
    </div>
  )
}

export default Expenses