import { NavLink } from "react-router-dom";
import logo from "../../../public/logo.png";

const Navbar = () => {
  const user = false;
  const menu = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-orange-500 text-white" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ allProperties"
          className={({ isActive }) =>
            isActive ? "bg-orange-500 text-white" : ""
          }
        >
          All Properties
        </NavLink>
      </li>
    </>
  );
  return (
    <div className=" shadow-sm">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <div>
            <img className="w-20" src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="group relative">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  {/* <img src={user?.photoURL} alt="User Avatar" /> */}
                </div>
              </div>

              <div className="invisible group-hover:visible  absolute bg-white text-black p-2  rounded shadow-md w-40  -left-28">
                <div className="overflow-hidden whitespace-nowrap overflow-ellipsis">
                  {/* {user?.displayName} */}
                </div>
                <div className="overflow-hidden overflow-ellipsis   whitespace-nowrap ">
                  {/* {user?.email} */}
                </div>

                <button
                  //   onClick={handleLogout}
                  className="btn btn-sm bg-red-950 text-white"
                >
                  LogOut
                </button>
              </div>
            </div>
          ) : (
            <button className="btn btn-sm">
              <NavLink to="/login">Login</NavLink>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
