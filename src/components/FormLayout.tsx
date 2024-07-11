import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export const FormLayout = () => {
  return (
    <div className="w-full  h-screen flex flex-col">
      <Navbar />
      <div className="w-full flex items-center justify-center  pt-14">
        <Outlet />
      </div>
    </div>
  );
};
