import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Box } from "@mui/system";

const Layout = () => {
  return (
    <Box>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};
export default Layout;
