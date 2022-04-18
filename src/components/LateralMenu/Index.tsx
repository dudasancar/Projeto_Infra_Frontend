import React from 'react'
import { ContainerMenu, UserDiv } from './style'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from '../../assets/logo.png'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DevicesIcon from '@mui/icons-material/Devices';
import ModalUser from './ModalUser'
import ModalStaff from './ModalStaff';
const LateralMenu = () => {
  return (
    <ContainerMenu>
      <img src={`${logo}`} />
      <nav>
        <p> <PeopleAltIcon/> Pessoal</p> 
        <p> <DevicesIcon/> Equipamentos</p>
      </nav>
      <UserDiv>Mateus Lammel <KeyboardArrowDownIcon/></UserDiv> 
      <ModalStaff/>
      <ModalUser/>
    </ContainerMenu>
  )
}

export default LateralMenu