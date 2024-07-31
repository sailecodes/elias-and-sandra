import { useState } from "react";
import { Outlet } from "react-router-dom";
import Hero from "./Hero";

const Layout = () => {
  const [heroText, setHeroText] = useState("");
  const [heroBg, setHeroBg] = useState(null);

  return (
    <main>
      <Hero bg={heroBg} text={heroText} />
      <Outlet context={{ setHeroText, setHeroBg }} />
    </main>
  );
};

export default Layout;
