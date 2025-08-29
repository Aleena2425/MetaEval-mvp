"use client";

import React, { useState } from "react";
import InputForm from "../../components/InputForm";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Trophy, Clock, DollarSign, TrendingUp, Zap } from "lucide-react";

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
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
