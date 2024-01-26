import React from "react";
import Header from "../components/Header";
import TopCards from "../components/TopCards";
import BarChart from "../components/BarChart";
import RecentOrder from "../components/RecentOrder";

const HomePage = () => {
  return (
    <div className="bg-gray-300 min-h-screen ">
      <Header />
      <TopCards />
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4  " >
        <BarChart />
        <RecentOrder />
      </div>
    </div>
  );
};

export default HomePage;
