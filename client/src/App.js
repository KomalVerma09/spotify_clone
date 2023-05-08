import logo from './logo.svg';
import './App.css';
import Sidebar from './Component/Sidebar'
import Hero from './Component/Hero';
import RighSection from './Component/RighSection';
import {
  BrowserRouter , Routes, Route
}from 'react-router-dom';
import TopMix from './Component/TopMix';
function App() {
  return (
 <BrowserRouter>
  <Routes>
    <Route path='/' element={<Hero/>}/>
    <Route path='/RightSection' element={<RighSection/>}/>
    <Route path='/Sidebar' element={<Sidebar/>}/>
    <Route path='/TopMix' element={<TopMix/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
{/* <Sidebar/>
  <Hero path='/' element={<Hero/>}/>
  <RighSection/> */}