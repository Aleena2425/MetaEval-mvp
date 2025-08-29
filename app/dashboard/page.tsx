"use client";

import React, { useState } from "react";
import InputForm from "../../components/InputForm";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Trophy, Clock, DollarSign, TrendingUp, Zap } from "lucide-react";

<<<<<<< Updated upstream
export default function Dashboard() {
  const [results, setResults] = useState<any[]>([]);
  const [explanation, setExplanation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRun = async (data: any) => {
    console.log("Running with config:", data);
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock results for now
    setResults([
      { rank: 1, model: "GPT-4", score: 8.7, speed: "1.2s", cost: "$0.03", accuracy: "92%", efficiency: "High" },
      { rank: 2, model: "Gemini Pro", score: 8.3, speed: "1.0s", cost: "$0.00", accuracy: "89%", efficiency: "Very High" },
      { rank: 3, model: "Claude 3", score: 8.1, speed: "1.8s", cost: "$0.02", accuracy: "87%", efficiency: "Medium" },
      { rank: 4, model: "Llama-3", score: 7.9, speed: "1.5s", cost: "$0.00", accuracy: "85%", efficiency: "High" },
    ]);
    setExplanation("Based on the benchmark results, GPT-4 demonstrates the highest overall performance with excellent accuracy and comprehensive responses. However, Gemini Pro offers the best value proposition with zero cost and fast response times. Claude 3 shows strong performance but with higher latency, while Llama-3 provides a good open-source alternative with competitive performance.");
    setIsLoading(false);
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return `#${rank}`;
  };

  const getScoreColor = (score: number) => {
    if (score >= 8.5) return "text-green-400";
    if (score >= 8.0) return "text-blue-400";
    if (score >= 7.5) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-20 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">
              <span className="gradient-text">MetaEval</span> Dashboard
            </h1>
            <p className="text-xl text-gray-300">
              Benchmark AI models and analyze performance
            </p>
          </div>

          {/* Form */}
          <div className="mb-8">
            <InputForm onRun={handleRun} />
          </div>

          {/* Loading State */}
          {isLoading && (
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="flex items-center justify-center py-12">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-gray-400">Running benchmark...</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Results */}
          {results.length > 0 && !isLoading && (
            <div className="space-y-6">
              {/* Results Header */}
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold flex items-center text-white">
                  <BarChart3 className="mr-2 h-6 w-6" />
                  Benchmark Results
                </h2>
                <Button variant="outline" size="sm" className="border-gray-700 hover:bg-gray-900">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Export Report
                </Button>
              </div>

              {/* Results Table */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Model Performance Comparison</CardTitle>
                  <CardDescription className="text-gray-400">
                    Detailed analysis of AI model performance across multiple metrics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-800">
                          <th className="text-left py-3 px-4 font-medium text-white">Rank</th>
                          <th className="text-left py-3 px-4 font-medium text-white">Model</th>
                          <th className="text-left py-3 px-4 font-medium text-white">Score</th>
                          <th className="text-left py-3 px-4 font-medium text-white">Accuracy</th>
                          <th className="text-left py-3 px-4 font-medium text-white">Speed</th>
                        </tr>
                      </thead>
                      <tbody>
                        {results.map((result) => (
                          <tr key={result.model} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                            <td className="py-3 px-4">
                              <span className="text-2xl">{getRankIcon(result.rank)}</span>
                            </td>
                            <td className="py-3 px-4 font-medium text-white">{result.model}</td>
                            <td className={`py-3 px-4 font-bold ${getScoreColor(result.score)}`}>
                              {result.score}/10
                            </td>
                            <td className="py-3 px-4 text-gray-300">{result.accuracy}</td>
                            <td className="py-3 px-4 flex items-center text-gray-300">
                              <Clock className="mr-1 h-4 w-4 text-gray-400" />
                              {result.speed}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Explanation */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Trophy className="mr-2 h-5 w-5" />
                    Analysis & Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{explanation}</p>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center border-gray-700 hover:bg-gray-900">
                  <Zap className="mb-2 h-6 w-6" />
                  <span className="font-medium text-white">Save Results</span>
                  <span className="text-xs text-gray-400">Store for later comparison</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center border-gray-700 hover:bg-gray-900">
                  <BarChart3 className="mb-2 h-6 w-6" />
                  <span className="font-medium text-white">Detailed Report</span>
                  <span className="text-xs text-gray-400">Generate comprehensive analysis</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center border-gray-700 hover:bg-gray-900">
                  <TrendingUp className="mb-2 h-6 w-6" />
                  <span className="font-medium text-white">Compare History</span>
                  <span className="text-xs text-gray-400">View previous benchmarks</span>
                </Button>
              </div>
=======
// Define types for result and form data
type Result = {
  rank: number;
  model: string;
  score: number;
  speed: string;
  cost: string;
  error?: string | null;
};

type FormData = {
  prompt: string;
  taskType: string;
  constraints?: string;
  selectedModels?: string[];
};

export default function Dashboard() {
  const [results, setResults] = useState<Result[]>([]);
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRun = async (data: FormData) => {
    console.log("Running with config:", data);

    setLoading(true);
    setError("");
    setResults([]);

    try {
      // Call your backend API
      const response = await fetch('http://localhost:8000/benchmark', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: data.prompt,
          task_type: data.taskType,
          constraints: data.constraints || "",
          models: data.selectedModels || ["GPT-4", "Gemini Pro"],
          timeout_per_model: 30,
          max_concurrent: 3
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      // Transform backend response to match your UI format
      if (result.results && typeof result.results === 'object') {
        const transformedResults: Result[] = Object.entries(result.results).map(([modelName, metrics]: [string, any]) => ({
          rank: metrics.rank || 0,
          model: modelName,
          score: metrics.composite_score || 0,
          speed: `${((metrics.response_time_ms || 0) / 1000).toFixed(1)}s`,
          cost: `$${(metrics.cost_usd || 0).toFixed(4)}`,
          error: metrics.error
        })).sort((a, b) => a.rank - b.rank);

        setResults(transformedResults);

        // Set explanation based on results
        if (result.summary?.recommended_model) {
          setExplanation(
            `${result.summary.recommended_model.name} is recommended with a score of ${result.summary.recommended_model.score}/10. ` +
            `Total cost: $${(result.summary.total_cost || 0).toFixed(4)}, ` +
            `Average response time: ${((result.summary.avg_response_time || 0) / 1000).toFixed(1)}s`
          );
        }
      }

    } catch (err: any) {
      console.error('Benchmark failed:', err);
      setError(`Failed to run benchmark: ${err.message}`);

      // Fallback to mock data for demo
      setResults([
        { rank: 1, model: "GPT-4", score: 8.7, speed: "1.2s", cost: "$0.03", error: null },
        { rank: 2, model: "Gemini Pro", score: 8.3, speed: "1.0s", cost: "$0.00", error: null },
        { rank: 3, model: "Llama-3", score: 7.9, speed: "1.5s", cost: "$0.00", error: null },
      ]);
      setExplanation("Using mock data - backend connection failed. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">MetaEval Dashboard</h1>

      {/* Form */}
      <InputForm onRun={handleRun} />

      {/* Loading State */}
      {loading && (
        <div className="mt-6 p-4 bg-blue-900/20 border border-blue-600 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-400"></div>
            <span>Running benchmark... This may take up to 30 seconds.</span>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="mt-6 p-4 bg-red-900/20 border border-red-600 rounded-lg">
          <h3 className="font-semibold text-red-400">Error</h3>
          <p className="text-red-300">{error}</p>
        </div>
      )}

      {/* Results */}
      {results.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Results</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left bg-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-gray-700">
                <tr>
                  <th className="py-3 px-4">Rank</th>
                  <th className="py-3 px-4">Model</th>
                  <th className="py-3 px-4">Score</th>
                  <th className="py-3 px-4">Speed</th>
                  <th className="py-3 px-4">Cost</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r) => (
                  <tr key={r.model} className="border-b border-gray-700 hover:bg-gray-750">
                    <td className="py-3 px-4">#{r.rank}</td>
                    <td className="py-3 px-4 font-medium">{r.model}</td>
                    <td className="py-3 px-4">
                      <span className={`font-semibold ${r.score >= 8 ? 'text-green-400' : r.score >= 6 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {r.score}/10
                      </span>
                    </td>
                    <td className="py-3 px-4">{r.speed}</td>
                    <td className="py-3 px-4">{r.cost}</td>
                    <td className="py-3 px-4">
                      {r.error ? (
                        <span className="text-red-400">Error: {r.error}</span>
                      ) : (
                        <span className="text-green-400">Success</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {explanation && (
            <div className="p-4 rounded-lg bg-gray-800 border border-gray-700 mt-6">
              <h3 className="text-lg font-semibold mb-2">Analysis</h3>
              <p className="text-gray-300">{explanation}</p>
>>>>>>> Stashed changes
            </div>
          )}
        </div>
      </main>
    </div>
  );
}