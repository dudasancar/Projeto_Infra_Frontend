import React from 'react'
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';


const NoAccessHelper = () => {
  return (
    <div style={{margin: "0 auto", width: "80rem"}}>
        <p>Voce nao tem Acesso!<br/>
        Deseja voltar para o Login?
        </p>
        <Link to="/"><Button
        style={{ width: 150, height: 50 }}
        variant="contained">
          LOGIN
        </Button></Link>
    </div>
  )
}

export default NoAccessHelper