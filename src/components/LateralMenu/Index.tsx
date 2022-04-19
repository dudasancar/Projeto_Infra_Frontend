import React from "react";
import { Container, ContainerMenu, DropDownDiv } from "./style";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import logo from "../../assets/logo.png";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DevicesIcon from "@mui/icons-material/Devices";
import { Menu, MenuItem } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const LateralMenu = () => {
  const handleClose = () => {
    setAnchorUser(null);
    setAnchorStaff(null);
  };

  const [anchorUser, setAnchorUser] = React.useState(null);
  const openUser = Boolean(anchorUser);

  const [anchorStaff, setAnchorStaff] = React.useState(null);
  const openStaff = Boolean(anchorStaff);

  return (
    <Container>
      <ContainerMenu>
        <img src={`${logo}`} />
        <nav>
          <DropDownDiv>
            <p
              id="staff-info"
              aria-controls={openStaff ? "staff-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openStaff ? "true" : undefined}
              onClick={(event: any) => setAnchorStaff(event.currentTarget)}
            >
              <PeopleAltIcon /> Pessoal
              {openStaff ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </p>
            <Menu
              id="staff-menu"
              anchorEl={anchorStaff}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={openStaff}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "staff-info",
              }}
            >
              <MenuItem onClick={handleClose}>Funcionários</MenuItem>
              <MenuItem onClick={handleClose}>Colaboradores</MenuItem>
            </Menu>
          </DropDownDiv>
          <p>
            {" "}
            <DevicesIcon /> Equipamentos
          </p>
        </nav>
        <DropDownDiv>
          <p
            id="user-info"
            aria-controls={openUser ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openUser ? "true" : undefined}
            onClick={(event: any) => setAnchorUser(event.currentTarget)}
          >
            <PersonIcon />
            Usuário
            {openUser ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </p>
          <Menu
            id="basic-menu"
            anchorEl={anchorUser}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={openUser}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "user-info",
            }}
          >
            <MenuItem onClick={handleClose}>Perfil</MenuItem>
            <MenuItem onClick={handleClose}>Sair</MenuItem>
          </Menu>
        </DropDownDiv>
      </ContainerMenu>
    </Container>
  );
};

export default LateralMenu;
