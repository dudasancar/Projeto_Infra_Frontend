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
  const { user } = useUser();
  const { message } = useMessage();

  function PrivateRouteVerification({ children }) {
    return user.token ? (
      <MenuNavigation> {children} </MenuNavigation>
    ) : (
      <NoAccessHelper />
    );
  }

  return (
    <BrowserRouter>
      {message.display && <ModalMessage />}
      <GlobalStyle />
      <PublicRoutes />
      <PrivateRouteVerification>
        <PrivateRoutes />
      </PrivateRouteVerification>
    </BrowserRouter>
  );
};

export default MainRoutes;
