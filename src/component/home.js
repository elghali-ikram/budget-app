import React from 'react';
import Navbar from './Navbar';
export default function Home() {
  const myValue = sessionStorage.getItem('email');
  return (
    <div>
      <Navbar />
      <div className='d-flex'>
        <div className="card  m-5 w-50">
          <div className="card-body text-center">
            <h3 className="card-title">card</h3>
            <form className='d-flex flex-column gap-2 ' >
              <div className='d-flex gap-2'>
                <label className='me-4'> Montant:              </label>
                <input type="number" className="form-control" />
              </div>
              <div className='d-flex gap-2'>
                <label className='me-5'>
                  Motif:              </label>
                <input className="form-control " type="text" />
              </div>
              <div className='d-flex gap-2'>
                <label className='me-3'>Catégorie: </label>
                <select className="form-control " >
                  <option value="logement">Logement</option>
                  <option value="alimentation">Alimentation</option>
                  <option value="transport">Transport</option>
                  <option value="loisirs">Loisirs</option>
                  <option value="personnel">Personnel</option>
                  <option value="autres">Autres</option>
                </select>
              </div>
              <div className='d-flex gap-2'>
                <label className='me-5'>Type:              </label>
                <select className="form-control" >
                  <option value="dépense">Dépense</option>
                  <option value="revenu">Revenu</option>
                </select>
              </div>
              <button type="submit" className='btn btnsubmit w-50 align-self-center'>Ajouter</button>
            </form>
          </div>
        </div>
        <div className="card m-5 w-50">
          <div className="card-body text-center">
            <h3 className="card-title">card</h3>
            <form className='d-flex flex-column gap-2 ' >
              <div className='d-flex gap-2'>
                <label className='me-4'> Montant:              </label>
                <input type="number" className="form-control" />
              </div>
              <div className='d-flex gap-2'>
                <label className='me-5'>
                  Motif: </label>
                <input className="form-control " type="text" />
              </div>
              <div className='d-flex gap-2'>
                <label className='me-3'>Catégorie: </label>
                <select className="form-control " >
                  <option value="logement">Logement</option>
                  <option value="alimentation">Alimentation</option>
                  <option value="transport">Transport</option>
                  <option value="loisirs">Loisirs</option>
                  <option value="personnel">Personnel</option>
                  <option value="autres">Autres</option>
                </select>
              </div>
              <div className='d-flex gap-2'>
                <label className='me-5'>Type:              </label>
                <select className="form-control" >
                  <option value="dépense">Dépense</option>
                  <option value="revenu">Revenu</option>
                </select>
              </div>
              <button type="submit" className='btn'>Ajouter</button>
            </form>
          </div>
        </div>
      </div>
    </div>


  )
}
