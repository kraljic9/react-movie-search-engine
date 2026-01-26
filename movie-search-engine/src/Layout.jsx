import { Outlet } from "react-router-dom";
import NavBar from "./componants/Navbar";
import { useState } from "react";

function Layout() {
  const [search, setSearch] = useState("");

  return (
    <>
      <NavBar search={search} setSearch={setSearch} />

      <Outlet context={{ search }} />
    </>
  );
}

export default Layout;
