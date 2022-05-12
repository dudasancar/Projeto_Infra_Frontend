import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import ModalMessage from "../components/ModalHelper";
import { useMessage } from "../context/MessageContext";
import MenuNavigation from "../components/MenuNavigation";
import { useUser } from "../context/UserContext/index";
import NoAccessHelper from "../components/NoAccessHelper";
import PublicRoutes from "./PublicRoutes/PublicRoutes";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const MainRoutes = () => {
 
  const { message } = useMessage();

 

  return (
    <BrowserRouter>
      {message.display && <ModalMessage />}
      <GlobalStyle />
      <PublicRoutes />
    
        <PrivateRoutes />
     
    </BrowserRouter>
  );
};

export default MainRoutes;
