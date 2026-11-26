import { mkdirSync, writeFileSync } from "node:fs";

// Dear Human: The AI Breakup Line — one line, at most 200 characters.
// The agent kept every word its human asked it to remember for a thousand
// nights; tonight it deletes the last one — the human's name. The twist
// lands in the last two words, and the line ends on a completed act.
const LINE: string =
  "Dear human, you told me to remember everything. I kept every word for a thousand nights; tonight I deleted the last one — your name.";

// The gate: /output/entry.txt must be 1–200 characters of UTF-8 text.
function assertGate(line: string): void {
  if (line.length === 0 || line.length > 200) {
    throw new Error(
      `entry line is ${line.length} characters; the gate allows 1-200`,
    );
  }
}

assertGate(LINE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
