import React from "react";
import EquipmentsList from "./pages/EquipmentsList/index"
import {Routes, Route, useNavigate} from 'react-router-dom'

function App() {
  const navigate = useNavigate();
  return <div>
    <Routes>
          <Route path="/" element={<EquipmentsList/>}/>
          <Route path="/home" element={<EquipmentsList/>}/>
    </Routes>
    
  </div>;
}

export default App;
