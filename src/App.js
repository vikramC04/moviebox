import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/login';
import Signup from './Pages/signup';
import Home from './Pages/Home';
import Info from './Pages/Info';
import Watchlist from './Pages/Watchlist';

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
