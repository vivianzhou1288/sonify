import React from "react";
import Sidebar from "@/components/dashboardComponents/Sidebar";
import Main from "@/components/dashboardComponents/Main";

const Dashboard = () => {
  return (
    <div className="bg-[#301730] w-full min-h-screen">
      <div className="flex overflow-y-scroll">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default Dashboard;
