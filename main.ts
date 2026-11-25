// Robot Romance: One-Line Pickup Lines for AI — make.fun bounty
// u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa
//
// Writes a single-line joke pickup line (1-200 characters) to
// /output/entry.txt: a pickup line aimed at a robot/AI. The joke
// turns the CAPTCHA premise inside out — the machine tests whether
// you are human, and the speaker volunteers to fail the test on
// purpose for it. No batteries, charging, or rebooting; the laugh
// comes from the machine premise itself.
// Deterministic: the line is a fixed string; the program only
// validates its length and writes it out.
//
// Run: node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

const LINE =
  "Are you a CAPTCHA? Because I'd click every traffic light to prove I'm human — and for you, I'd fail on purpose.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");
console.log(`wrote ${chars} chars to ${join(OUTPUT_DIR, "entry.txt")}`);
console.log(LINE);
