import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import Monitoring from './components/Monitoring';
import Reports from './components/Reports';
import SearchBar from './components/SearchBar';
import { analyzeContent } from './services/api';

function App() {
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (content) => {
    setLoading(true);
    setError(null);
    setAnalysisResult(null);
    try {
      const result = await analyzeContent(content);
      setAnalysisResult(result);
    } catch (err) {
      console.error("Error during analysis:", err);
      setError("Failed to analyze content. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-indigo-700 dark:text-indigo-400">
            Social Media Content Analyzer
          </h1>
          <SearchBar onSearch={handleSearch} loading={loading} />

          {loading && (
            <div className="text-center mt-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto"></div>
              <p className="mt-4 text-lg">Analyzing content...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-8" role="alert">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}

          {analysisResult && (
            <div className="mt-12">
              <Routes>
                <Route path="/" element={<Dashboard analysis={analysisResult} />} />
                <Route path="/analytics" element={<Analytics analysis={analysisResult} />} />
                {/* <Route path="/monitoring" element={<Monitoring />} /> */}
                {/* <Route path="/reports" element={<Reports />} /> */}
              </Routes>
            </div>
          )}

          {!analysisResult && !loading && !error && (
             <div className="mt-12 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
                 <p className="text-xl text-gray-600 dark:text-gray-300">
                     Enter some social media content above to get started with the analysis!
                 </p>
                 {/* <div className="mt-6">
                     <img src="https://via.placeholder.com/400x200?text=Analyze+Your+Content" alt="Placeholder for content analysis" className="mx-auto rounded-lg shadow-md" />
                 </div> */}
             </div>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;