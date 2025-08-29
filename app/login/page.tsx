"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // For now, just redirect after "login"
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md p-8 rounded-lg bg-gray-800 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleLogin}
          className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold"
        >
          Login
        </button>
      </div>
    </main>
  );
}
