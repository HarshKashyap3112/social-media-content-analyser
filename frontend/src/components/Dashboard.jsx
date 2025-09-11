import React from 'react';
import StatsCard from './StatsCard';

function Dashboard({ analysis }) {
  if (!analysis) {
    return (
      <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <p className="text-xl text-gray-600 dark:text-gray-300">No analysis data available. Please analyze some content.</p>
      </div>
    );
  }

  const { sentiment, keywords, topics, summary, actionable_insights } = analysis;

  const sentimentColor = {
    positive: 'text-green-500 dark:text-green-400',
    negative: 'text-red-500 dark:text-red-400',
    neutral: 'text-blue-500 dark:text-blue-400',
    mixed: 'text-yellow-500 dark:text-yellow-400',
  }[sentiment?.toLowerCase()] || 'text-gray-500 dark:text-gray-400';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatsCard title="Sentiment" value={sentiment || 'N/A'} colorClass={sentimentColor} />
      <StatsCard title="Keywords" value={keywords?.join(', ') || 'N/A'} />
      <StatsCard title="Topics" value={topics?.join(', ') || 'N/A'} />

      <div className="md:col-span-2 lg:col-span-3 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">Summary</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{summary || 'No summary available.'}</p>
      </div>

      <div className="md:col-span-2 lg:col-span-3 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">Actionable Insights</h2>
        {actionable_insights && actionable_insights.length > 0 ? (
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            {actionable_insights.map((insight, index) => (
              <li key={index}>{insight}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700 dark:text-gray-300">No actionable insights generated.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;