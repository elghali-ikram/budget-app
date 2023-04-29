import React from 'react'

export default function Incometransaction(incomelist) {
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
      {Object.keys(incomelist).map((key, index) => (
      <tr key={index} style={{ backgroundColor: 'green' }}>
        <th scope="row">+</th>
        <td>{incomelist[key].motif}</td>
        <td>{incomelist[key].montant}</td>
        <td>{incomelist[key].categorie}</td>
      </tr>
    ))}
      </tbody>
    </table>
    </div>
  )
}
