import logo from './logo.svg';
import './App.css';
import Navbar from './components/molecules/router';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/atoms/home';
import About from './components/atoms/about';


function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
