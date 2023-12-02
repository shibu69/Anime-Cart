import './App.css';
import Footer from './Components/Footer/Footer';
import Index from './Components/Index/index';
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import MenItem from './Components/Shop/Men/MenItem';
import WomenItem from './Components/Shop/Women/WomenItem';
import Accessories from './Components/Shop/Accessories/Accessories';
import Contact from "./Components/Index/Contact/Contact"
import LOgin from './Components/JoinUs/Login/LOgin';
import SignUp from './Components/JoinUs/Signup/SignUp';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path='/men-item' element={<MenItem/>}/>
        <Route path='/women-item' element={<WomenItem/>}/>
        <Route path='/accessories' element={<Accessories/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<LOgin/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
