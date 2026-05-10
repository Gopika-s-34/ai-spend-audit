export function generateAudit(
    tool: string,
    plan: string,
    spend: number,
    seats: number
) {

    let recommendation =
        "Your current setup already looks cost efficient.";

    let savings = 0;

    let reason =
        "Your selected plan matches your current usage.";

    if (
        tool === "ChatGPT" &&
        plan === "Team" &&
        seats <= 2
    ) {
        recommendation =
            "Downgrade to ChatGPT Plus";

        savings = spend - 20 * seats;

        reason =
            "Small teams usually don't benefit enough from the Team plan pricing.";
    }

    else if (
        tool === "Cursor" &&
        plan === "Business" &&
        seats <= 2
    ) {
        recommendation =
            "Switch to Cursor Pro";

        savings = spend - 20 * seats;

        reason =
            "Cursor Business is more suitable for larger engineering teams.";
    }

    else if (
        tool === "Copilot" &&
        plan === "Enterprise" &&
        seats < 5
    ) {
        recommendation =
            "Switch to Copilot Business";

        savings = spend - 19 * seats;

        reason =
            "Enterprise features may be unnecessary for smaller teams.";
    }

    return {
        recommendation,
        savings: Math.max(savings, 0),
        yearlySavings: Math.max(savings * 12, 0),
        reason,
    };
}