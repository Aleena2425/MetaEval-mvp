"use client";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-bold mb-4">⚡ Welcome to MetaEval</h1>
      <p className="text-lg text-gray-400 mb-8">
        Benchmark AI models with ease. Compare, rank, and choose the best LLM for your needs.
      </p>
      <Link
        href="/login"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold"
      >
        Get Started
      </Link>
    </main>
  );
}
