import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="layout">
      {/* <header>E&S 06.22.25</header> */}
      {/* <nav className="layout--nav">
        <NavLink to="/timeline">Timeline</NavLink>
        <NavLink to="/story">Story</NavLink>
        <NavLink to="/memories">Memories</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
      </nav> */}
      <Outlet />
    </main>
  );
};

export default Layout;
