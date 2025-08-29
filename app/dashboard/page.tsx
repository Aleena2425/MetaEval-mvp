"use client";

import React, { useState } from "react";
import InputForm from "../../components/InputForm";

export default function Dashboard() {
  const [results, setResults] = useState<any[]>([]);
  const [explanation, setExplanation] = useState("");

  const handleRun = (data: any) => {
    console.log("Running with config:", data);

    // Mock results for now
    setResults([
      { rank: 1, model: "GPT-4", score: 8.7, speed: "1.2s", cost: "$0.03" },
      { rank: 2, model: "Gemini Pro", score: 8.3, speed: "1.0s", cost: "$0.00" },
      { rank: 3, model: "Llama-3", score: 7.9, speed: "1.5s", cost: "$0.00" },
    ]);
    setExplanation("Mock explanation: GPT-4 best for quality, Gemini Pro fastest & free.");
  };

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">⚡ MetaEval Dashboard</h1>

      {/* Form */}
      <InputForm onRun={handleRun} />

      {/* Results */}
      {results.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Results</h2>
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-2">Rank</th>
                <th className="py-2">Model</th>
                <th className="py-2">Score</th>
                <th className="py-2">Speed</th>
                <th className="py-2">Cost</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r) => (
                <tr key={r.model} className="border-b border-gray-800">
                  <td className="py-2">{r.rank}</td>
                  <td className="py-2">{r.model}</td>
                  <td className="py-2">{r.score}</td>
                  <td className="py-2">{r.speed}</td>
                  <td className="py-2">{r.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="p-4 rounded-lg bg-gray-800 border border-gray-700 mt-6">
            <h3 className="text-lg font-semibold mb-2">Explanation</h3>
            <p className="text-gray-300">{explanation}</p>
          </div>
        </div>
      )}
    </main>
  );
}
