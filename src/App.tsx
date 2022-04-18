import React from "react";
import EmployeesList from "./components/Employees/EmployeesList"
import {Routes, Route, useNavigate} from 'react-router-dom'

function App() {
  const navigate = useNavigate();
  return <div>
    <Routes>
          <Route path="/" element={<EmployeesList/>}/>
          <Route path="/home" element={<EmployeesList/>}/>
    </Routes>
    
  </div>;
}

export default App;
