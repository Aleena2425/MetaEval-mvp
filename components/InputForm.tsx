"use client";

import React, { useState } from "react";

export default function InputForm({ onRun }: { onRun: Function }) {
  const [prompt, setPrompt] = useState("");
  const [taskType, setTaskType] = useState("rephrase");
  const [constraints, setConstraints] = useState("");
  const [models, setModels] = useState<string[]>(["GPT-4", "Gemini Pro"]);

  return (
    <div className="space-y-6 mb-10 p-6 rounded-xl bg-gray-800 border border-gray-700 shadow-lg">
      <h2 className="text-xl font-semibold text-gray-100">🔧 Benchmark Setup</h2>

      {/* Prompt */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Prompt</label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your benchmark prompt..."
          rows={4}
          className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
      </div>

      {/* Task Type */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Task Type</label>
        <select
          value={taskType}
          onChange={(e) => setTaskType(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500"
        >
          <option value="rephrase">Rephrasing</option>
          <option value="code">Code Generation</option>
          <option value="summarize">Summarization</option>
          <option value="qa">Question Answering</option>
          <option value="creative">Creative Writing</option>
        </select>
      </div>

      {/* Constraints */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Constraints (optional)</label>
        <input
          type="text"
          value={constraints}
          onChange={(e) => setConstraints(e.target.value)}
          placeholder="e.g. max 200 words, formal tone"
          className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Models */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Models to Compare</label>
        <div className="flex flex-wrap gap-2">
          {["GPT-4", "Gemini Pro", "Llama-3", "Claude 3"].map((model) => (
            <button
              key={model}
              onClick={() =>
                setModels((prev) =>
                  prev.includes(model) ? prev.filter((m) => m !== model) : [...prev, model]
                )
              }
              className={`px-4 py-2 rounded-lg border ${
                models.includes(model)
                  ? "bg-blue-600 border-blue-500 text-white"
                  : "bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {model}
            </button>
          ))}
        </div>
      </div>

      {/* Templates */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Quick Templates</label>
        <div className="flex gap-2 flex-wrap">
          {[
            { label: "Rephrase Email", prompt: "Rephrase this email in a polite tone" },
            { label: "Fix Code", prompt: "Fix the bug in this Python function" },
            { label: "Summarize News", prompt: "Summarize this article in 3 bullet points" },
          ].map((tpl) => (
            <button
              key={tpl.label}
              onClick={() => {
                setPrompt(tpl.prompt);
                setTaskType("rephrase");
              }}
              className="px-4 py-2 bg-gray-900 hover:bg-gray-700 rounded-lg border border-gray-700 text-gray-300"
            >
              {tpl.label}
            </button>
          ))}
        </div>
      </div>

      {/* Run Button */}
      <button
        onClick={() => onRun({ prompt, taskType, constraints, models })}
        className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold shadow-md"
      >
        Run Benchmark
      </button>
    </div>
  );
}
