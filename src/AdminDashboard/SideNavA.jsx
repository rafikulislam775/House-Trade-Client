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
              Admin Profile
            </NavLink>
          </li>
          <li className="hover:bg-orange-600 rounded-lg">
            <NavLink
              to="/adminDashboard/manageProperties"
              className={({ isActive }) =>
                isActive ? "bg-orange-500  text-white" : ""
              }
            >
              Manage Properties
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
              to="/adminDashboard/manageUsers"
              className={({ isActive }) =>
                isActive ? "bg-orange-500  text-white" : ""
              }
            >
              Manage Users
            </NavLink>
          </li>
          <li className="hover:bg-orange-600 rounded-lg">
            <NavLink
              to="/adminDashboard/manageReviews"
              className={({ isActive }) =>
                isActive ? "bg-orange-500  text-white" : ""
              }
            >
              Manage reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavA;
