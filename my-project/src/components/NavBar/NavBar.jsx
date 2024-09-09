import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import { FaDumbbell } from "react-icons/fa";
import { NavBarMenu } from "./data";
import { ResponsiveMenu } from "./ResponsiveMenu";

export const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-8">
          {/* logo */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <FaDumbbell />
            <p>React</p>
            <p className="text-secondary">Gym</p>
          </div>
          {/* menu */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavBarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block py-1 px-3 hover:text-primary font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* icon */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <PiShoppingCartThin />
            </button>
            <button className="text-primary border-2 border-primary rounded-md py-2 px-6 font-semibold hover:bg-primary hover:text-white duration-200 hidden lg:block">
              Login
            </button>
          </div>
          {/* mobile */}
          <div className="lg:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>
      {/* mobilesidebar  */}
      <ResponsiveMenu open={open} />
    </>
  );
};
