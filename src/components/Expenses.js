import Card from "./Card"
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"

function Expenses(props) {
  return (
    <Card>
      {props.expenses.map((expense) => (
        <ExpenseItem 
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      ))}
    </Card>
  )
}

export default Expenses