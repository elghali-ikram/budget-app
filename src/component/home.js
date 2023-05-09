import Navbar from './Navbar';
import React, { useRef, useState, useEffect } from 'react';
import Expensestransaction from './Expensestransaction';
import Incometransaction from "./Incometransaction";

export default function Home() {
  const [showstat, setShowstat] = useState(false)
  const myValue = sessionStorage.getItem('email');
  useEffect(() => {
    if (myValue) {
      setShowstat(true);
    } else {
      setShowstat(false);
    }
  }, [myValue]);
  const montant = useRef();
  const motif = useRef();
  const categorie = useRef();
  const type = useRef();
  const currentDate= new Date();
  const formatDate = (date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };
  const storedData = localStorage.getItem(myValue);
  let userData = JSON.parse(storedData);
  let expenses = userData.expenses || [];
  let income = userData.Income || [];
  const handleSubmit = () => {
    const newEntry = {
      "date": formatDate(currentDate),
      "motif": motif.current.value,
      "montant": montant.current.value,
      "categorie": categorie.current.value
    }
    let i = Object.keys(expenses).length - 1;
    let j = Object.keys(income).length - 1
    if (type.current.value === "dépense") {
      i++;
      expenses[i] = newEntry;
    }
    else {
      j++;
      income[j] = newEntry;
    }
    localStorage.setItem(myValue, JSON.stringify(userData));
  };
  const totalIncome = Object.keys(income).reduce((acc, key) => acc + parseInt(income[key].montant), 0);
  const totalexpenses = Object.keys(expenses).reduce((acc, key) => acc + parseInt(expenses[key].montant), 0);
  const budget = totalIncome - totalexpenses;
  return (
    <div>
      <Navbar />
      {showstat ?
        <div className='d-flex flex-column'>
          <div className="card flex-fill  m-5 ">
            <div className="card-body text-center">
              <h3 className="card-title">Your current budget</h3>
              <h5 className="card-title">{budget}</h5>
            </div>
          </div>
          <div className='d-flex flex-column flex-md-row'>
            <div className="card  m-5 w-75 ">
              <div className="card-body text-center">
                <h3 className="card-title">Enter your Information</h3>
                <form className='d-flex flex-column gap-2' onSubmit={handleSubmit} >
                  <div className='d-flex gap-2'>
                    <label className='me-4'> Montant:</label>
                    <input type="number" className="form-control" ref={montant} required />
                  </div>
                  <div className='d-flex gap-2'>
                    <label className='me-5'>Motif:</label>
                    <input className="form-control" ref={motif} type="text" required />
                  </div>
                  <div className='d-flex gap-2'>
                    <label className='me-3'>Catégorie: </label>
                    <select className="form-select" ref={categorie} required>
                      <option value="logement">Logement</option>
                      <option value="alimentation">Alimentation</option>
                      <option value="transport">Transport</option>
                      <option value="loisirs">Loisirs</option>
                      <option value="personnel">Personnel</option>
                      <option value="autres">Autres</option>
                    </select>
                  </div>
                  <div className='d-flex gap-2'>
                    <label className='me-5'  >Type:</label>
                    <select className="form-select" ref={type} required>
                      <option value="dépense">Dépense</option>
                      <option value="revenu">Revenu</option>
                    </select>
                  </div>
                  <button type="submit" className='btn btnsubmit w-50 align-self-center'>Ajouter</button>
                </form>
              </div>
            </div>
            <div className="m-5 w-50">
              <div className="text-center d-flex flex-column flex-md-row gap-5 p-3">
                <div className='flex-fill'>
                  <h1>Expenses</h1>
                  <p>total expenses:{totalexpenses}</p>
                  {Expensestransaction(expenses)}
                </div>
                <div className='flex-fill'>
                  <h1>Income</h1>
                  <p>total Income:{totalIncome}</p>
                  {Incometransaction(income)}
                </div>
              </div>
            </div>
          </div>
        </div>
        : <div>
          <div className="card  m-5 ">
            <div className="card-body text-center">
              <h3 className="card-title">ERROR</h3>
              <h5 className="card-title">create account</h5>
            </div>
          </div>
        </div>}
    </div>
  )
}
