import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import Calculator from './components/Calculator';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="nav-menu">
          <Link to="/calculator">Calculadora</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>
        <div className="content-wrapper">
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/calculator" element={<Calculator />} />
            
            {/* Protected routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
            </Route>
            
            {/* Redirect root to calculator */}
            <Route path="/" element={<Navigate to="/calculator" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
