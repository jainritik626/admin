import React from "react";
import {
  FaClipboardList,
  FaMoneyBillWave,
  FaClipboardCheck,
  FaRegCalendarAlt,
} from "react-icons/fa";

const MiddleLayerCard = ({ icon, title, value }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex items-center">
      <div className="text-3xl mr-4">{icon}</div>
      <div>
        <p className="text-2xl">{value}</p>
        <p className="text-lg ">{title}</p>
      </div>
    </div>
  );
};

export default MiddleLayerCard;
