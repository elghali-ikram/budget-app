import './App.css';
import Signin from './component/Signin';
import Home from './component/Home';
import Statistique from './component/Statiques'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/statistique" element={<Statistique />} />
      </Routes>
    </Router>
  );
}
export default App;
