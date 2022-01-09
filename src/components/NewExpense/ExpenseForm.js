import React, {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = () => {

    // multi state approach
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnterdeAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    //one state approach (all states in one const (title, amount and date - provided by user))
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangeHandler = (event) => {

        // event.target.value --> obiekt target z atrybutem value zwracany przez "event" w przeglądarce, F12 -> console

        // multi state approach:
        // setEnteredTitle(event.target.value);

        //one state approach:
        setUserInput({
            ...userInput, // take other states from userInput cont above (enteredAmount, enteredDate) - we have to pass them or we will lose it instead 
            enteredTitle: event.target.value,
        });
    };

    const amountChangeHandler = (event) => {
        // setEnterdeAmount(event.target.value);
        setUserInput({
            ...userInput,
            enteredAmount: event.targer.value,
        }); 
    };

    const dateChangeHandler = (event) => {
        // setEnteredDate(event.target.value);
        setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        });
    };

    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;