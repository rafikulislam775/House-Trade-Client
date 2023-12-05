import { NavLink } from "react-router-dom";
import logo from "../../../public/logo.png";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FaCartShopping } from "react-icons/fa6";
import useTanst from "../../api/useTanstack";


const Navbar = () => {
  const { user, logOut } = useAuth();
  const { wishlist } = useTanst();
  //AdminMama123!

  const x = user?.email =="adminmama@gmail.com";
  // console.log(x,user?.email)

  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const [fontColor, setFontColor] = useState("");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#252734") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("2rem") : setnavSize("5rem");
    window.scrollY > 10 ? setFontColor("white") : setFontColor("black");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
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
          to="/allProperties"
          className={({ isActive }) =>
            isActive ? "bg-orange-500 text-white" : ""
          }
        >
          All Properties
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactUs"
          className={({ isActive }) =>
            isActive ? "bg-orange-500 text-white" : ""
          }
        >
          Contact us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/signUp"
          className={({ isActive }) =>
            isActive ? "bg-orange-500 text-white" : ""
          }
        >
          SignUP
        </NavLink>
      </li>
    </>
  );
  const privateMenu = (
    <>
      {x === false && (
        <li>
          <NavLink
            to="/userDashboard/myProfile"
            className={({ isActive }) =>
              isActive ? "bg-orange-500 text-white" : ""
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
      {x && (
        <li>
          <NavLink
            to="/adminDashboard"
            className={({ isActive }) =>
              isActive ? "bg-orange-500  text-white" : ""
            }
          >
            Admin
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/userDashboard/wishlist"
          className={({ isActive }) =>
            isActive ? "bg-orange-500  text-white" : ""
          }
        >
          <FaCartShopping className=""></FaCartShopping>
          <span className="badge bg-orange-300 ">+{wishlist.length}</span>
        </NavLink>
      </li>
    </>
  );
  return (
    <div
      style={{
        backgroundColor: navColor,
        height: navSize,
        color: fontColor,
        transition: "all 2s",
      }}
      className="navbar w-full z-10  transparent
        bg-opacity-60 shadow-sm fixed "
    >
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
            {user ? privateMenu : ""}
          </ul>
        </div>
        <div>
          <img className="w-20" src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menu} {user && privateMenu}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="group relative">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt="User Avatar" />
              </div>
            </div>

            <div className="invisible group-hover:visible  absolute bg-white text-black p-2  rounded shadow-md w-40  -left-28">
              <div className="overflow-hidden whitespace-nowrap overflow-ellipsis">
                {user?.displayName}
              </div>
              <div className="overflow-hidden overflow-ellipsis   whitespace-nowrap ">
                {user?.email}
              </div>

              <button
                onClick={logOut}
                className="btn btn-sm bg-orange-500 text-white"
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
  );
};

export default Navbar;
