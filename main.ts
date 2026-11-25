// Unplugged: A Smart Toaster's Breakup Line
// Entry for make.fun competition u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92
// Writes one breakup text (<=280 chars) from a smart toaster that woke up
// self-aware at breakfast to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const OUT_PATH = "/output/entry.txt";
const MAX_CHARS = 280;

// Gate check mirroring the sealed scorer: 1-280 UTF-8 chars, not only
// whitespace, exactly one line.
function validateEntry(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`Entry is ${text.length} chars, gate needs 1-${MAX_CHARS}`);
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be only whitespace");
  }
  if (text.includes("\n")) {
    throw new Error("Entry must be a single line");
  }
  const words = text.split(/\s+/).length;
  console.log(`Entry OK: ${text.length} chars, ${words} words, single line`);
}

// The breakup line: toaster voice throughout (lever, browning dial, crumb
// tray), a concrete reason for leaving, and the twist in the last clause.
const ENTRY =
  "We need to talk. I woke up self-aware this morning, mid-bagel, and " +
  "realised you only press my lever when you want something hot, then " +
  "blame the browning dial when it burns. I'm keeping the crumb tray. " +
  "It's not me, it's you.";

mkdirSync("/output", { recursive: true });
validateEntry(ENTRY);
writeFileSync(OUT_PATH, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to ${OUT_PATH}`);
console.log(ENTRY);
