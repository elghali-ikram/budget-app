import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from '../media/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  const navigate = useNavigate();
  function handleLogout() {
    sessionStorage.clear();
    // Navigate to sign-in page
    navigate('/');
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light p-3  bg-light">
        <a className="navbar-brand" href="#">           
         <Link className="nav-link" to="/home">
         <img src={logo} alt="signup" width="10%" />
        </Link></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

  );
}

export default Navbar;

