import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Register from './Components/Register';
import MayBeShowNavbar from './Components/MayBeShowNavbar';

function App() {
  return (
    <>
    <MayBeShowNavbar>
    <Navbar/>
    </MayBeShowNavbar>
    <Routes>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/" element={<Home/>}/>
    </Routes>
    
    </>
   
  );
}

export default App;
