
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Home/Home';
import Home1 from './Components/Home1/Home1';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Components/Shop/Shop';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Sofa from './Components/Sofa/Sofa';
import Furniture from './Components/Furniture/Furniture'
function App() {
  return (
    <div>
     
     <BrowserRouter>
     <Home />
         <Navbar/><br/>
          <Routes>
           <Route  path='/' element={<Home1 />} />
           <Route  path='/shop' element={<Shop />} /> 
           <Route  path='/sofa' element={<Sofa />} /> 
           <Route  path='/Furni' element={<Furniture />} /> 
          </Routes>

         </BrowserRouter>
    </div>
  );
}

export default App;
