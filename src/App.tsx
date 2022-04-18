import React from "react";
import { Route, Routes } from "react-router-dom";
import EquipmentsList from "./components/Equipments/EquipamentsList";

function App() {
  return <div>
    <Route>
      <Routes path="/home" element={ <EquipmentsList/>}/>
    </Route>
   
  </div>;
}

export default App;
