import React from 'react';

function StatsCard({ title, value, colorClass = 'text-gray-800 dark:text-gray-200' }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300 ease-in-out">
      <h3 className="text-xl font-semibold mb-2 text-gray-600 dark:text-gray-200">{title}</h3>
      <p className={`text-xl font-bold ${colorClass} truncate`}>
        {value}
      </p>
    </div>
  );
}

export default StatsCard;