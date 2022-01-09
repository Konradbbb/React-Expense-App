import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);
  // const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle('Updated');
  };

  // const changePriceClickHandler = () => {
  //   setAmount(0);
  // }



  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price '>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      {/* <button onClick={changePriceClickHandler}>Change price</button> */}
    </Card>
  ); 
}

export default ExpenseItem;
