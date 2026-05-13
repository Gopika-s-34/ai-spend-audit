import { generateAudit } from "@/lib/auditEngine";

test("detects ChatGPT overspending", () => {

    const result = generateAudit(
        "ChatGPT",
        "Team",
        100,
        2
    );

    expect(result.savings).toBeGreaterThan(0);
});