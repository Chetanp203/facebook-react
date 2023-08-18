import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Register from './Components/Register';
import MayBeShowNavbar from './Components/MayBeShowNavbar';
import Profile from './Components/Profile';
import Create from './Components/Create';
import Friends from './Components/Friends';
import SearchPeople from './Components/SearchPeople';

function App() {
  return (
    <>
    <MayBeShowNavbar>
    <Navbar/>
    </MayBeShowNavbar>
    <Routes>
      <Route exact path='search-people' element={<SearchPeople/>}/>
      <Route exact path='/friends' element={<Friends/>}/>
      <Route exact path='/create' element={<Create/>}/>
      <Route exact path='/profile' element={<Profile/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/" element={<Home/>}/>
    </Routes>
    
    </>
   
  );
}

export default App;
