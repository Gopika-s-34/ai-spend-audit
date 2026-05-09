"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [tool, setTool] = useState("");
  const [plan, setPlan] = useState("");
  const [spend, setSpend] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("audit-data");

    if (savedData) {
      const parsedData = JSON.parse(savedData);

      setTool(parsedData.tool || "");
      setPlan(parsedData.plan || "");
      setSpend(parsedData.spend || "");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "audit-data",
      JSON.stringify({
        tool,
        plan,
        spend,
      })
    );
  }, [tool, plan, spend]);
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">

      <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">

        <h1 className="text-4xl font-bold">
          AI Spend Audit
        </h1>

        <p className="mt-3 text-gray-400">
          Find where your startup is overspending on AI tools.
        </p>

        <div className="mt-10 space-y-5">

          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Tool Name
            </label>

            <input
              type="text"
              placeholder="ChatGPT"
              value={tool}
              onChange={(e) => setTool(e.target.value)}
              className="w-full p-3 rounded-lg bg-black border border-zinc-700 outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Current Plan
            </label>

            <input
              type="text"
              placeholder="Plus"
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              className="w-full p-3 rounded-lg bg-black border border-zinc-700 outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Monthly Spend ($)
            </label>

            <input
              type="number"
              placeholder="20"
              value={spend}
              onChange={(e) => setSpend(e.target.value)}
              className="w-full p-3 rounded-lg bg-black border border-zinc-700 outline-none focus:border-white"
            />
          </div>

          <button className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Generate Audit
          </button>

        </div>

      </div>

    </main>
  );
}