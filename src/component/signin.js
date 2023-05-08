import React, { useRef, useState } from 'react'
import icon from '../media/icon.svg';
import { useNavigate } from 'react-router-dom';
export default function Signin() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [showemail, setShowemail] = useState(false)
  const [show, setShow] = useState(false)
  const navigate = useNavigate();
  let userdata = {}
  const handleClick = () => {
    if (name.current.value && email.current.value && password.current.value) {
      let arr = JSON.parse(localStorage.getItem(email.current.value));
      if (arr) {

        if (arr.accountInfo.password === password.current.value) {
          sessionStorage.setItem('email', email.current.value);
          navigate('/home', { replace: true });
        }
        else {
          setShowemail(true)
        }
      }
      else {
        let accountInfo = { 'name': name.current.value, 'email': email.current.value, 'password': password.current.value, 'signin': 'true' };
        let expenses = {};
        let Income = {};
        userdata = { accountInfo: accountInfo, expenses: expenses, Income: Income };
        localStorage.setItem(email.current.value, JSON.stringify(userdata));
        sessionStorage.setItem('email', email.current.value);
        navigate('/home', { replace: true });
      }
    }
    else {
      setShow(true)
    }
  }
  return (
    <div>
      <div className="d-flex  justify-content-center">
        <div className="bg d-flex mt-3 rounded w-75">
          <div className="p-5 w-75 d-flex flex-column justify-content-center gap-4" id="signupform">
            {show ? <div>remplir les champs</div> : <div></div>}
            {showemail ? <div>verifier votre password</div> : <div></div>}
            <h1 className=" w-bold">Take Control of <span className="accent">Your Money</span></h1>
<p>Personal budgeting is the secret to financial freedom. Start your journey today</p>
            <div className="formvalid">
              <input type="text" name="name" ref={name} className="form-control" placeholder="Enter your name" />
            </div>
            <div className="formvalid ">
              <input type="email" name="email" ref={email} className="form-control" placeholder="Enter your email" />
            </div>
            <div className="formvalid">
              <input type="password" name="password" ref={password} className="form-control" placeholder="Enter your password" />
            </div>
            <button className="btn btnsubmit  w-50" onClick={handleClick} name="signupbtn" value="signupbtn" id="signupbtn">Enter</button>
          </div>
          <img src={icon} alt="signup" width="50%" />
        </div>
      </div>
    </div>

  )
}
