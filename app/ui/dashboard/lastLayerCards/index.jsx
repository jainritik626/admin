import MissionAreaChart from "./missionAreaChart";
import OpportunitiesBarChart from "./opportunityBarChart";

const LastlayerCards = () => {
  return (
    <div className="flex w-full gap-4 mt-8">
      <div className="flex-1">
        <OpportunitiesBarChart />
      </div>
      <div className="flex-1">
        <MissionAreaChart />
      </div>
    </div>
  );
};

export default LastlayerCards;
