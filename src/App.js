import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import Home from './Home';
import Info from './components/Info';
import Watchlist from './components/Watchlist';

function App() {
  return (
    <div>
      <Routes>
        <Route index element = {<Home />} />
        <Route path="/home" element= {<Home />} />
        <Route path="/login?" element ={<Login />} />
        <Route path="/signup" element ={<Signup />} />
        <Route path="/info" element ={<Info />} />
        <Route path="/watchlist" element ={<Watchlist />} />
      </Routes>
    </div>
  );
}

export default App;
