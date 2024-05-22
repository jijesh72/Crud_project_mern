import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Adduser from './Components/Adduser'
import Update from './Components/Update'
import 'bootstrap/dist/css/bootstrap.css';
import ViewUser from './Components/ViewUser';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Home /> }/>
      <Route path="/adduser" element={<Adduser/>}/>
      <Route path="/view/:id" element={<ViewUser/>}/>
      <Route path="/edit/:id" element={<Update/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
