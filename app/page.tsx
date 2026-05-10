"use client";

import { useEffect, useState } from "react";
import { generateAudit } from "@/lib/auditEngine";

export default function Home() {
  const [tool, setTool] = useState("");
  const [plan, setPlan] = useState("");
  const [spend, setSpend] = useState("");
  const [seats, setSeats] = useState("");
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const savedData = localStorage.getItem("audit-data");

    if (savedData) {
      const parsedData = JSON.parse(savedData);

      setTool(parsedData.tool || "");
      setPlan(parsedData.plan || "");
      setSpend(parsedData.spend || "");
      setSeats(parsedData.seats || "");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "audit-data",
      JSON.stringify({
        tool,
        plan,
        spend,
        seats,
      })
    );
  }, [tool, plan, spend, seats]);
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
              AI Tool
            </label>

            <select
              value={tool}
              onChange={(e) => setTool(e.target.value)}
              className="w-full p-3 rounded-lg bg-black border border-zinc-700 outline-none focus:border-white"
            >
              <option value="">Select Tool</option>
              <option value="ChatGPT">ChatGPT</option>
              <option value="Claude">Claude</option>
              <option value="Cursor">Cursor</option>
              <option value="Copilot">GitHub Copilot</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Current Plan
            </label>

            <select
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              className="w-full p-3 rounded-lg bg-black border border-zinc-700 outline-none focus:border-white"
            >
              <option value="">Select Plan</option>
              <option value="Plus">Plus</option>
              <option value="Team">Team</option>
              <option value="Enterprise">Enterprise</option>
              <option value="Pro">Pro</option>
              <option value="Business">Business</option>
            </select>
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
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Number of Seats
            </label>

            <input
              type="number"
              placeholder="2"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              className="w-full p-3 rounded-lg bg-black border border-zinc-700 outline-none focus:border-white"
            />
          </div>

          <button
            onClick={() => {

              if (!tool || !plan || !spend || !seats) {
                alert("Please fill all fields");
                return;
              }

              const audit = generateAudit(
                tool,
                plan,
                Number(spend),
                Number(seats)
              );

              setResult(audit);
            }}
            className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Generate Audit
          </button>


          {result && (
            <div className="mt-8 p-5 rounded-xl border border-zinc-700 bg-zinc-950">

              <h2 className="text-2xl font-bold">
                Audit Result
              </h2>

              <p className="mt-4 text-gray-300">
                {result.recommendation}
              </p>
              <div className="mt-6 mb-6 p-5 rounded-xl bg-green-500/10 border border-green-500/20">

                <p className="text-sm text-green-300">
                  Estimated Annual Savings
                </p>

                <h3 className="text-4xl font-bold text-green-400 mt-2">
                  ${result.yearlySavings}
                </h3>

              </div>
              <div className="mt-5 space-y-2">

                <p>
                  Monthly Savings:
                  <span className="text-green-400 font-bold">
                    {" "} ${result.savings}
                  </span>
                </p>

                <p>
                  Yearly Savings:
                  <span className="text-green-400 font-bold">
                    {" "} ${result.yearlySavings}
                  </span>
                </p>

              </div>
              <p className="mt-2 text-sm text-gray-500">
                {result.reason}
              </p>
            </div>

          )}
        </div>

      </div>
    </main>
  );
}