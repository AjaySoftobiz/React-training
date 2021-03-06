import React from "react";
import "./Expenses.css";
import ExpenseItem from './ExpenseItem'
import Card from './Card'

const Expenses = ({expenses}) => {
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
