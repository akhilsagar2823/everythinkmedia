
import './App.css';
import { Home } from './Components/Home/Home';
// import { Header } from './Components/Header/Header';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { OurTeam } from './Components/OurTeam/OurTeam';
import { Products } from './Components/Products/Products';
import { Project } from './Components/Project/Project';
import { ContactUs } from './Components/ContactUs/ContactUs';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { handleShowHeader } from './Components/Redux/generalSlice';
import { Header } from './Components/Header/Header';

function App() {
  const showHeader = useSelector((state)=>state.general.showHeader);
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  useEffect(()=>{
    dispatch(handleShowHeader(location));
  },[location])
  return (
    
    <div>
      {showHeader?<Header/>:""}
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/ourteam' element={<OurTeam />} ></Route>
        <Route path='/products' element={<Products />} ></Route>
        <Route path='/project' element={<Project />} ></Route>
        <Route path='/contactus' element={<ContactUs />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
