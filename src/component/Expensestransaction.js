import React from 'react'

export default function Expensestransaction(expensesList) {
  return (
    <div>
       <table className="table">
      <thead>
        <tr>
        <th scope="col">#</th>
          <th>Motif</th>
          <th>Montant</th>
          <th>Categorie</th>
        </tr>
      </thead>
      <tbody>
      {Object.keys(expensesList).map((key, index) => (
      <tr key={index} style={{ backgroundColor: 'red' }}>
        <th scope="row">-</th>
        <td>{expensesList[key].motif}</td>
        <td>{expensesList[key].montant}</td>
        <td>{expensesList[key].categorie}</td>
      </tr>
    ))}

      </tbody>
    </table>
    </div>
  )
}
