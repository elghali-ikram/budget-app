import { Link } from 'react-router-dom';
import logo from '../media/logo.svg';
import { useNavigate } from 'react-router-dom';


function Navbar() {
    const navigate = useNavigate();

    function handleLogout() {
      // const email = sessionStorage.getItem('email'); // Replace with the email of the user you want to edit
      // const userData = JSON.parse(localStorage.getItem(email));
      // userData.accountInfo.signin = false; 
      // localStorage.setItem(email, JSON.stringify(userData));
      sessionStorage.clear();
      // Navigate to sign-in page
      navigate('/');
    }
  
  return (
    <div>
    <nav className="navbar p-4 bgnav navbar-expand-lg navbar-light bg-light">

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/statistique">
              Statistique
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/" onClick={handleLogout}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>


    </div>
 
  );
}

export default Navbar;

