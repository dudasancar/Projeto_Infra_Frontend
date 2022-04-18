import React from 'react'
import { ContainerMenu, UserDiv } from './style'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from '../../assets/logo.png'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DevicesIcon from '@mui/icons-material/Devices';
import ModalUser from './ModalUser'
const LateralMenu = () => {
  return (
    <ContainerMenu>
      <img src={`${logo}`} />
      <nav>
        <p> <PeopleAltIcon/> Funcionários</p> 
        <p> <DevicesIcon/> Equipamentos</p>
      </nav>
      <UserDiv>Mateus Lammel <KeyboardArrowDownIcon/></UserDiv> 
      <ModalUser/>
    </ContainerMenu>
  )
}

export default LateralMenu