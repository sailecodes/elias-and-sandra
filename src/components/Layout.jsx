import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <header>E&S 06.22.25</header>
      <Outlet />
    </div>
  );
};

export default Layout;
