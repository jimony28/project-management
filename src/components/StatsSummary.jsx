const StatsSummary = ({ hours }) => (
  <div className="flex mt-4">
    <div className="bg-white p-4 shadow rounded flex-1 text-center">
      <div className="text-sm text-gray-500">Total Hours</div>
      <div className="text-xl font-bold">{hours} hrs</div>
    </div>
  </div>
);

export default StatsSummary;