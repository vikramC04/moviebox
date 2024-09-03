import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './components/Form'
import Header from './components/Header';
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import Home from './Home';

function App() {
  return (
    <div>
      <Routes>
        <Route index element = {<Home />} />
        <Route path="/home" element= {<Home />} />
        <Route path="/login" element ={<Login />} />
        <Route path="/signup" element ={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
