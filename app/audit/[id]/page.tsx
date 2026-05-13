import { supabase } from "@/lib/supabase";

export default async function AuditPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {

    const { id } = await params;

    const { data } = await supabase
        .from("audits")
        .select("*")
        .eq("id", id)
        .single();

    if (!data) {
        return (
            <main className="min-h-screen bg-black text-white flex items-center justify-center">
                <h1 className="text-3xl font-bold">
                    Audit Not Found
                </h1>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">

            <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

                <h1 className="text-4xl font-bold">
                    Shared Audit Report
                </h1>

                <div className="mt-8 space-y-5">

                    <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800">
                        <p className="text-sm text-gray-400">
                            Tool
                        </p>

                        <h2 className="text-2xl font-bold mt-2">
                            {data.tool}
                        </h2>
                    </div>

                    <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800">
                        <p className="text-sm text-gray-400">
                            Recommendation
                        </p>

                        <h2 className="text-xl font-semibold mt-2">
                            {data.recommendation}
                        </h2>
                    </div>

                    <div className="p-5 rounded-xl bg-green-500/10 border border-green-500/20">

                        <p className="text-sm text-green-300">
                            Estimated Annual Savings
                        </p>

                        <h2 className="text-5xl font-bold text-green-400 mt-2">
                            ${data.yearly_savings}
                        </h2>

                    </div>

                </div>

            </div>

        </main>
    );
}