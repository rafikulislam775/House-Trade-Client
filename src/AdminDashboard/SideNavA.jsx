import { NavLink } from "react-router-dom";

const SideNavA = () => {
  return (
    <div>
      <div className="">
        <ul className="menu p-4 w-80 min-h-full   text-white">
          {/* Sidebar content here */}

          <li className="hover:bg-orange-600 rounded-lg">
            <NavLink
              to="/adminDashboard/adminProfile"
              className={({ isActive }) =>
                isActive ? "bg-orange-500  text-white" : ""
              }
            >
              My Profile
            </NavLink>
          </li>
          <li className="hover:bg-orange-600 rounded-lg">
            <NavLink
              to="/adminDashboard/wishlist"
              className={({ isActive }) =>
                isActive ? "bg-orange-500  text-white" : ""
              }
            >
              wishlist
            </NavLink>
          </li>
          <li className="hover:bg-orange-600 rounded-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-orange-500  text-white" : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li className="hover:bg-orange-600 rounded-lg">
            <NavLink
              to="/adminDashboard/propertyBought"
              className={({ isActive }) =>
                isActive ? "bg-orange-500  text-white" : ""
              }
            >
              Property bought
            </NavLink>
          </li>
          <li className="hover:bg-orange-600 rounded-lg">
            <NavLink
              to="/adminDashboard/myReviews"
              className={({ isActive }) =>
                isActive ? "bg-orange-500  text-white" : ""
              }
            >
              My Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavA;
