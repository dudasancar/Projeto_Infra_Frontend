import React from 'react'
import { ContainerMenu } from './style'
import PersonIcon from '@mui/icons-material/Person';
import ComputerIcon from '@mui/icons-material/Computer';
import GroupIcon from '@mui/icons-material/Group';
import logo from '../../assets/logo.png'
const LateralMenu = () => {
  return (

    <ContainerMenu>
          <img src={`${logo}`} />
      <nav>

    <ComputerIcon/>

    <GroupIcon/>
    </nav>
        <PersonIcon/> 
    </ContainerMenu>
  )
}

export default LateralMenu