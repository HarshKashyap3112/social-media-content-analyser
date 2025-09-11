import React from 'react';

function Reports() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
      <h2 className="text-3xl font-bold mb-4 text-indigo-700 dark:text-indigo-400">Reports</h2>
      <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
        Generate comprehensive reports based on your content analyses, monitoring data, and analytics insights.
        (Feature under development)
      </p>
      <div className="flex justify-center">
        <img
          src="https://via.placeholder.com/600x300?text=Detailed+Reports+Here"
          alt="Reports placeholder"
          className="rounded-lg shadow-md"
        />
      </div>
      <ul className="list-disc list-inside text-left mx-auto max-w-md mt-8 text-gray-700 dark:text-gray-300">
        <li>Exportable PDF/CSV reports</li>
        <li>Customizable report templates</li>
        <li>Historical data trends</li>
        <li>Executive summaries</li>
      </ul>
    </div>
  );
}

export default Reports;