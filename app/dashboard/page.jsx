// 'use client'
import TopCards from "../ui/dashboard/topCards/topCards";
import {
  FaClipboardList,
  FaMoneyBillWave,
  FaClipboardCheck,
  FaRegCalendarAlt,
} from "react-icons/fa";
import MiddleLayerCard from "../ui/dashboard/middleLayerCard/cards";
import LastlayerCards from "../ui/dashboard/lastLayerCards";

const mockData = [
  {
    icon: <FaClipboardList />,
    title: "Total Value of Missions",
    value: "23,5000",
  },
  { icon: <FaMoneyBillWave />, title: "No. of Transactions", value: "134" },
  { icon: <FaClipboardCheck />, title: "Total Amount Claimed", value: "134" },
  { icon: <FaRegCalendarAlt />, title: "No. of Job leads", value: "23,5000" },
  { icon: <FaClipboardList />, title: "Missions Applications", value: "12" },
  { icon: <FaClipboardCheck />, title: "Missions Submissions", value: "12" },
  { icon: <FaClipboardList />, title: "Giveaway Applications", value: "12" },
  { icon: <FaClipboardCheck />, title: "Giveaway Submissions", value: "12" },
];

const Dashboard = () => {
  return (
    <div>
      <TopCards />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockData.map((item, index) => (
          <MiddleLayerCard
            key={index}
            icon={item.icon}
            title={item.title}
            value={item.value}
          />
        ))}
      </div>
      <LastlayerCards />
    </div>
  );
};

export default Dashboard;
