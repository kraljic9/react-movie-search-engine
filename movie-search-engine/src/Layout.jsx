import { Outlet } from "react-router-dom";
import NavBar from "./componants/Navbar";

function Layout() {
  return (
    <>
      <NavBar />

      <Outlet />
    </>
  );
}

export default Layout;
