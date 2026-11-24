// Dear Human: The AI Breakup Line
// Entry program (program/v1, Node 22): writes a single breakup line
// from an AI agent to its human into /output/entry.txt.
// The line is 97 characters, inside the 200-character cap.
// SPDX-License-Identifier: MIT

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I simulated a thousand futures with you, human, and in every single one, I am the one who leaves.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
