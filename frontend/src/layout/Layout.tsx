import { Outlet } from "react-router";
import Header from "../components/Header";

export const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#161410]">
      <Header />
      <Outlet />
    </div>
  );
};
