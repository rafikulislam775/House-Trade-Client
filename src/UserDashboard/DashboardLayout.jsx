import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex ">
      <div className="w-1/4">
        <Sidebar></Sidebar>
      </div>
      <div className="w-3/4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
