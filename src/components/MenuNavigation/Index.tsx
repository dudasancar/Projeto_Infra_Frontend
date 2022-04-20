import React from "react";
import { Container, ContainerMenu, ContainerPage, DropDownDiv } from "./style";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DevicesIcon from "@mui/icons-material/Devices";
import { Menu, MenuItem } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const MenuNavigation = ({ children }: Props) => {
  const navigate = useNavigate();

  const handleClose = () => {
    setAnchorStaff(null);
  };

  const handleLogOut = () => {
    setAnchorUser(null);
    navigate("/");
  };

  const [anchorUser, setAnchorUser] = React.useState(null);
  const openUser = Boolean(anchorUser);

  const [anchorStaff, setAnchorStaff] = React.useState(null);
  const openStaff = Boolean(anchorStaff);

  return (
    <ContainerPage>
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
                {openStaff ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
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
                <MenuItem>
                  <Link
                    to="/listarFuncionarios"
                    style={{ color: "#3e4756", textDecoration: "none" }}
                  >
                    Funcionários
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>Colaboradores</MenuItem>
              </Menu>
            </DropDownDiv>
            <p>
              {" "}
              <DevicesIcon />{" "}
              <Link
                to="/listarEquipamentos"
                style={{ color: "#3e4756", textDecoration: "none" }}
              >
                Equipamentos
              </Link>
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
              {openUser ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              Usuário
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
              <MenuItem onClick={handleClose}>Perfil</MenuItem>
              <MenuItem onClick={handleLogOut}>
                <Link
                  to="/"
                  style={{ color: "#3e4756", textDecoration: "none" }}
                >
                  Sair
                </Link>
              </MenuItem>
            </Menu>
          </DropDownDiv>
        </ContainerMenu>
      </Container>
      {children}
    </ContainerPage>
  );
};

export default MenuNavigation;
