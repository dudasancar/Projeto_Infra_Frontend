import React from "react";
import { ContainerMenu, ContainerPage, DropDownDiv } from "./style";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DevicesIcon from "@mui/icons-material/Devices";
import { Menu, MenuItem } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useUser } from "../../context/UserContext/index"

interface Props {
  children: React.ReactNode;
}

const MenuNavigation = ({ children }: Props) => {
  const navigate = useNavigate();
  const { user } = useUser();

  const handleClose = () => {
    setAnchorUser(null);
  };

  const handleLogOut = () => {
    localStorage.clear();
    setAnchorUser(null);
    navigate("/");
    
  };

  const [anchorUser, setAnchorUser] = React.useState(null);
  const openUser = Boolean(anchorUser);

  const [anchorStaff, setAnchorStaff] = React.useState(null);
  const openStaff = Boolean(anchorStaff);

  return (
    <ContainerPage>
      <ContainerMenu>
        <nav>
          <img src={`${logo}`} />
          <div>
            <Link
              to="/listarFuncionarios"
              style={{ color: "#3e4756", textDecoration: "none" }}
            >
              <ManageAccountsIcon /> Funcionários
            </Link>
            <Link to="/" style={{ color: "#3e4756", textDecoration: "none" }}>
              <PeopleAltIcon /> Colaboradores
            </Link>

            <Link
              to="/listarEquipamentos"
              style={{ color: "#3e4756", textDecoration: "none" }}
            >
              <DevicesIcon /> Equipamentos
            </Link>
          </div>
        </nav>
        <DropDownDiv>
          <p
            id="user-info"
            aria-controls={openUser ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openUser ? "true" : undefined}
            onClick={(event: any) => setAnchorUser(event.currentTarget)}
          >
            {openUser ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            {user.name}
            <AccountCircleIcon id="personIcon" />
          </p>
          <Menu
            id="basic-menu"
            anchorEl={anchorUser}
            open={openUser}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "user-info",
            }}
          >
            <MenuItem onClick={handleClose}>Meus dados</MenuItem>
            <MenuItem onClick={handleLogOut}>
              <Link to="/" style={{ color: "#3e4756", textDecoration: "none" }}>
                Sair
              </Link>
            </MenuItem>
          </Menu>
        </DropDownDiv>
      </ContainerMenu>
      {children}
    </ContainerPage>
  );
};

export default MenuNavigation;
