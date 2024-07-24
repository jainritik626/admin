
import React from 'react';
import BrandedChart from './BrandedPieChartCard';
import MissionCard from './MissionPieChart';
import OpportunitiesCard from './opportunityCard';

const TopCards = () => {
  return (
    <div className="flex w-full gap-4 py-4">
      <div className="flex-1 h-86">
        <OpportunitiesCard />
      </div>
      <div className="flex-1 h-86">
        <BrandedChart />
      </div>
      <div className="flex-1 h-86">
        <MissionCard />
      </div>
    </div>
  );
};

export default TopCards;
