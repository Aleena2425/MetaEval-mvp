"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Zap, Code, FileText, MessageSquare, PenTool, Brain } from "lucide-react";

export default function InputForm({ onRun }: { onRun: Function }) {
  const [prompt, setPrompt] = useState("");
  const [taskType, setTaskType] = useState("rephrase");
  const [constraints, setConstraints] = useState("");
  const [models, setModels] = useState<string[]>(["GPT-4", "Gemini Pro"]);

  const taskTypes = [
    { value: "rephrase", label: "Rephrasing", icon: MessageSquare },
    { value: "code", label: "Code Generation", icon: Code },
    { value: "summarize", label: "Summarization", icon: FileText },
    { value: "qa", label: "Question Answering", icon: Brain },
    { value: "creative", label: "Creative Writing", icon: PenTool },
  ];

  const availableModels = ["GPT-4", "Gemini Pro", "Llama-3", "Claude 3"];

  const templates = [
    { label: "Rephrase Email", prompt: "Rephrase this email in a polite tone", type: "rephrase" },
    { label: "Fix Code", prompt: "Fix the bug in this Python function", type: "code" },
    { label: "Summarize News", prompt: "Summarize this article in 3 bullet points", type: "summarize" },
    { label: "Answer Question", prompt: "Answer this question with detailed explanation", type: "qa" },
  ];

  return (
    <Card className="glass glow">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <CardTitle>🔧 Benchmark Setup</CardTitle>
            <CardDescription>Configure your AI model evaluation</CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Prompt */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Prompt</label>
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your benchmark prompt..."
            rows={4}
            className="resize-none"
          />
        </div>

        {/* Task Type */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Task Type</label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {taskTypes.map((task) => {
              const Icon = task.icon;
              return (
                <button
                  key={task.value}
                  onClick={() => setTaskType(task.value)}
                  className={`p-3 rounded-lg border transition-all duration-200 flex flex-col items-center space-y-2 ${
                    taskType === task.value
                      ? "bg-primary/10 border-primary text-primary"
                      : "bg-background border-border hover:bg-accent/10"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs font-medium">{task.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Constraints */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Constraints (optional)</label>
          <Input
            type="text"
            value={constraints}
            onChange={(e) => setConstraints(e.target.value)}
            placeholder="e.g. max 200 words, formal tone"
          />
        </div>

        {/* Models */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Models to Compare</label>
          <div className="flex flex-wrap gap-2">
            {availableModels.map((model) => (
              <button
                key={model}
                onClick={() =>
                  setModels((prev) =>
                    prev.includes(model) ? prev.filter((m) => m !== model) : [...prev, model]
                  )
                }
                className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                  models.includes(model)
                    ? "bg-primary/10 border-primary text-primary"
                    : "bg-background border-border hover:bg-accent/10"
                }`}
              >
                {model}
              </button>
            ))}
          </div>
        </div>

        {/* Templates */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Quick Templates</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {templates.map((tpl) => (
              <button
                key={tpl.label}
                onClick={() => {
                  setPrompt(tpl.prompt);
                  setTaskType(tpl.type);
                }}
                className="p-3 rounded-lg border border-border bg-background hover:bg-accent/10 transition-all duration-200 text-left"
              >
                <div className="font-medium text-sm">{tpl.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{tpl.prompt}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Run Button */}
        <Button
          onClick={() => onRun({ prompt, taskType, constraints, models })}
          className="w-full glow"
          variant="gradient"
          size="lg"
        >
          <Zap className="mr-2 h-5 w-5" />
          Run Benchmark
        </Button>
      </CardContent>
    </Card>
  );
}
