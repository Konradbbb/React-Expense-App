import React from "react";
import './ExpenseForm.css'

const ExpenseForm = () => {

    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expenses__controls">
                    <label>Title</label>
                    <input type='text' />
                </div>
                <div className="new-expenses__controls">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" />
                </div>
                <div className="new-expenses__controls">
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" />
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;