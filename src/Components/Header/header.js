import React from "react";
import "./header.css";
import GliaLogo from "../GliaLogo/gliaLogo";
import GliaNavbar from "../GliaNavbar/gliaNavbar";
import GliaHeaderRight from "../GliaHeaderRight/gliaHeaderRight";
const Header = () => {
  return (
    <header className="header">
      <GliaLogo />
      <GliaNavbar />
      <GliaHeaderRight />
    </header>
  );
};

export default Header;
