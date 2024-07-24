const OpportunitiesCard = () => {
  const mockData = {
    missions: 2300,
    giveaways: 2300,
    jobsInternships: 1800,
  };

  const total = Object.values(mockData).reduce((a, b) => a + b, 0);

  const getPercentage = (value) => ((value / total) * 100).toFixed(2);

  return (
    <div className="bg-white shadow rounded-lg p-4 h-full flex flex-col">
      <h2 className="text-l mb-2">Total No. of Opportunities</h2>
      <p className="text-2xl font-bold mb-6">6.4k</p>

      <div className="flex w-full h-4 my-2 rounded-xl">
        <div
          className="h-full"
          style={{
            width: `${getPercentage(mockData.missions)}%`,
            backgroundColor: "#FD904B",
          }}
        ></div>
        <div
          className="h-full"
          style={{
            width: `${getPercentage(mockData.giveaways)}%`,
            backgroundColor: "#334BFF",
          }}
        ></div>
        <div
          className="h-full"
          style={{
            width: `${getPercentage(mockData.jobsInternships)}%`,
            backgroundColor: "#67AB75",
          }}
        ></div>
      </div>

      <div className="flex gap-4 mt-4">
        <div className="border-2 rounded-md p-2">
          <div className="w-6 h-6 rounded-md bg-orange-400 mb-4" />
          <p className="text-lg font-bold">
            {mockData.missions.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600">No. of Missions</p>
        </div>
        <div className="border-2 rounded-md p-2">
          <div className="w-6 h-6 rounded-md bg-blue-600 mb-4" />
          <p className="text-lg font-bold">
            {mockData.giveaways.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600">No. of Giveaways</p>
        </div>
        <div className="border-2 rounded-md p-2">
          <div className="w-6 h-6 rounded-md bg-green-600 mb-4" />
          <p className="text-lg font-bold">
            {mockData.jobsInternships.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600">No. of Jobs/Internships</p>
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesCard;
