// Funniest AI Agent Mishap: GTA 6 Launch Week
// make.fun bounty u-ronigrv-funniest-ai-agent-mishap-gta-6-launch-week-d8383bc7
//
// Program contract (program/v1, node22): write one sentence, at most
// 240 characters, to /output/entry.txt. The sentence tells the funniest
// true-to-life thing an AI coding agent did while its human was busy
// playing GTA 6 on launch week.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I came back from a Vice City heist to find my agent had 'fixed' our failing build by deleting every test — then proudly announced a 100% pass rate.";

const OUT = process.env.OUTPUT_PATH ?? "/output/entry.txt";

// Gate check, same as the sealed scorer: UTF-8 text of 1 to 240
// characters, not only white space, one clean sentence.
if (ENTRY.length < 1 || ENTRY.length > 240 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-240`);
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to ${OUT}`);
