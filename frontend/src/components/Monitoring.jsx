import React from 'react';

function Monitoring() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
      <h2 className="text-3xl font-bold mb-4 text-indigo-700 dark:text-indigo-400">Monitoring</h2>
      <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
        This section would allow you to set up and track specific keywords, hashtags, or topics across various social media platforms.
        (Feature under development)
      </p>
      <div className="flex justify-center">
        <img
          src="https://via.placeholder.com/600x300?text=Monitoring+Features+Coming+Soon"
          alt="Monitoring placeholder"
          className="rounded-lg shadow-md"
        />
      </div>
      <ul className="list-disc list-inside text-left mx-auto max-w-md mt-8 text-gray-700 dark:text-gray-300">
        <li>Real-time keyword tracking</li>
        <li>Alerts for trending topics</li>
        <li>Competitor analysis</li>
        <li>Performance metrics over time</li>
      </ul>
    </div>
  );
}

export default Monitoring;