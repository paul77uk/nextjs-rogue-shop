import React from "react";
import logo from "@/public/images/rogue-logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="navbar bg-black text-base-100 px-5">
      <div className="navbar-start">
        <Image src={logo} alt="logo" width={140} className="md:w-52" />
      </div>
      <div className="navbar-end gap-5">
        <i className="fa-solid fa-user fa-lg"></i>
        <div className="flex items-center gap-1.5">
          <i className="fa-solid fa-cart-shopping"></i>
          <h5 className="text-sm pb-1">0</h5>
        </div>
      </div>
    </div>
  );
};

export default Header;
