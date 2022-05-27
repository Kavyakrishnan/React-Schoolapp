import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addstudent from './Component/Addstudent';
import Searchstudent from './Component/Searchstudent';
import Header from './Component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addfaculty from './Component/Addfaculty';
import Searchfaculty from './Component/Searchfaculty';
import Viewstudent from './Component/Viewstudent';
import Viewfaculty from './Component/Viewfaculty';


function App() {
  return (
    <div>
     <BrowserRouter>
     
     <Routes>
       <Route  path="/" exact element={<Addstudent/>}/>
       <Route  path="/search" exact element={<Searchstudent/>}/>
       <Route  path="/addf" exact element={<Addfaculty/>}/> 
        <Route  path="/searchf" exact element={<Searchfaculty/>}/>
        <Route path="/views" exact element={<Viewstudent/>}/>
        <Route path="/viewsf" exact element={<Viewfaculty/>}/>
     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
