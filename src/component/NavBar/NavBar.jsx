import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/logo.svg";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/listed-book"}>Listed Books</NavLink>
      </li>
      <li>
        <NavLink to={"/pages-read"}>Pages to Read</NavLink>
      </li>
    </>
  );

  return (
    <div id="navbar" className="navbar bg-base-100 py-[40px]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-work text-lg text-color-3 gap-3"
          >
            {links}
            <div className="flex">
              <a className="btn capitalize bg-color-1 text-white px-[15px] mr-4 ">
                Sign in
              </a>
              <a className="btn capitalize bg-color-6 text-white px-[15px]">
                sign up
              </a>
            </div>
          </ul>
        </div>
        <Link to={"/"} className=" text-xl">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  font-work text-lg text-color-3 gap-3">
          {links}
        </ul>
      </div>
      <div className="navbar-end ">
        <a className="btn capitalize bg-color-1 text-white px-[28px] mr-4 hidden md:inline-flex">
          Sign in
        </a>
        <a className="btn capitalize bg-color-6 text-white px-[28px] hidden md:inline-flex">
          sign up
        </a>
      </div>
    </div>
  );
};

export default NavBar;
