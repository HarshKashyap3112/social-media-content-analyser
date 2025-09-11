import React from 'react';

function Analytics({ analysis }) {
  if (!analysis) {
    return (
      <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <p className="text-xl text-gray-600 dark:text-gray-300">No analysis data available. Please analyze some content.</p>
      </div>
    );
  }

  const { sentiment, keywords, topics, summary, actionable_insights, rawResponse } = analysis;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-3xl font-bold mb-6 text-indigo-700 dark:text-indigo-400">Detailed Analytics</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Sentiment</h3>
          <p className={`text-lg font-medium ${
            sentiment?.toLowerCase() === 'positive' ? 'text-green-600 dark:text-green-400' :
            sentiment?.toLowerCase() === 'negative' ? 'text-red-600 dark:text-red-400' :
            sentiment?.toLowerCase() === 'neutral' ? 'text-blue-600 dark:text-blue-400' :
            sentiment?.toLowerCase() === 'mixed' ? 'text-yellow-600 dark:text-yellow-400' :
            'text-gray-600 dark:text-gray-400'
          }`}>
            {sentiment || 'N/A'}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Keywords</h3>
          <div className="flex flex-wrap gap-2">
            {keywords && keywords.length > 0 ? (
              keywords.map((keyword, index) => (
                <span key={index} className="bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-indigo-200 text-sm font-medium px-2.5 py-0.5 rounded-full">
                  {keyword}
                </span>
              ))
            ) : (
              <p className="text-gray-600 dark:text-gray-400">No keywords identified.</p>
            )}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Topics</h3>
        <div className="flex flex-wrap gap-2">
          {topics && topics.length > 0 ? (
            topics.map((topic, index) => (
              <span key={index} className="bg-purple-100 dark:bg-purple-700 text-purple-800 dark:text-purple-200 text-sm font-medium px-2.5 py-0.5 rounded-full">
                {topic}
              </span>
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-400">No topics identified.</p>
          )}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Summary</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{summary || 'No summary available.'}</p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Actionable Insights</h3>
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

      {rawResponse && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Raw API Response (for debugging)</h3>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm overflow-x-auto text-gray-800 dark:text-gray-200">
            {JSON.stringify(rawResponse, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default Analytics;