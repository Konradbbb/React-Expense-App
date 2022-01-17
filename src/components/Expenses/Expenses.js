import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from 'react/cjs/react.development';
 

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');
 
  const filterHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // const filterArray = (year) => {
  //   year = props.items.date;
  //   year.filter(
  //     (x) => (x == filteredYear));
  // };

    return (
      <div>
      <Card className="expenses">

      <ExpensesFilter selected={filteredYear} onChangeFilter={filterHandler}/>
      
      {/* Array which renders all elements with expense."props" with "items" array from App.js component */}
      {filteredExpenses.map((expense) => (
        <ExpenseItem
        key={expense.id} // special prop that helps react to keep track on our list to proper render
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date}/>
      ))}


  
      </Card>
    </div>
    )

}

export default Expenses;