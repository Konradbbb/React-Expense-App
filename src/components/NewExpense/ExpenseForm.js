import React, {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    // multi state approach
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnterdeAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //one state approach (all states in one const (title, amount and date - provided by user))
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) => {

        // event.target.value --> obiekt target z atrybutem value zwracany przez "event" w przeglądarce, F12 -> console

        // multi state approach:
        setEnteredTitle(event.target.value);

        //one state approach:
        // setUserInput((previousState) => { 
        //     // previousState represents latest snapshot of our state, it is more safe syntax, and its guarantee that we are working on the right data
        //     return { ...previousState, enteredTitle: event.target.value };
        // })
    };

    const amountChangeHandler = (event) => {
        setEnterdeAmount(event.target.value);
        // setUserInput((previousState) => {
        //     return { ...previousState, enteredAmount: event.target.value};
        // })
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput((previousState) => {
        //     return { ...previousState, enteredDate: event.target.value};
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnterdeAmount('');
        setEnteredDate('');
    };

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;