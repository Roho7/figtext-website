import { useRef, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

interface nav {
  name: string;
  link: string;
}

const navLinks: nav[] = [
  {
    name: "services",
    link: "services",
  },
  {
    name: "pricing",
    link: "pricing",
  },
  {
    name: "about us",
    link: "about-us",
  },
  {
    name: "contact us",
    link: "contact-us",
  },
];

function Navbar() {
  return (
    <div className="p-4 flex font-sans text-white items-center justify-between">
      <img src={logo} alt="" className=" object-cover w-20 h-full" />
      <div className="flex gap-10">
        {navLinks.map((item) => {
          return (
            <Link to={item.link}>
              <span className="hover:text-alga-500">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
