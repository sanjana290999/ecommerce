import React from "react";

export default function Analytics() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Sales Overview</h2>
          <p className="mt-2">Graph or chart here</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">User Statistics</h2>
          <p className="mt-2">Graph or chart here</p>
        </div>
      </div>
    </div>
  );
}
