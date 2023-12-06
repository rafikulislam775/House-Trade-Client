import { Outlet } from "react-router-dom";
import SidebarA from "./SidebarA";

const AdminDashLayout = () => {
  return (
    <div className="flex ">
      <div className="w-1/4">
        <SidebarA></SidebarA>
      </div>
      <div className="w-3/4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminDashLayout;
