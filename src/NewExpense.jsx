
import React from "react";

function NewExpense({ expense, onDelete }) {
  return (
    <tr>
      <td>{expense.name}</td>
      <td>{expense.description}</td>
      <td>{expense.category}</td>
      <td>${expense.amount.toFixed(2)}</td>
      <td>{new Date(expense.date).toLocaleDateString()}</td>
      <td>
        <button onClick={onDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default NewExpense;
