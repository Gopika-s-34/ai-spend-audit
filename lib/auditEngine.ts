export function generateAudit(
    tool: string,
    plan: string,
    spend: number,
    seats: number
) {

    let recommendation = "Your current setup looks good.";
    let savings = 0;

    if (
        tool.toLowerCase() === "chatgpt" &&
        plan.toLowerCase() === "team" &&
        seats <= 2
    ) {
        recommendation =
            "Downgrade from Team to Plus plan.";

        savings = spend - 20 * seats;
    }

    if (
        tool.toLowerCase() === "cursor" &&
        plan.toLowerCase() === "business" &&
        seats <= 2
    ) {
        recommendation =
            "Cursor Pro may be sufficient for your team size.";

        savings = spend - 20 * seats;
    }

    return {
        recommendation,
        savings,
        yearlySavings: savings * 12,
    };
}