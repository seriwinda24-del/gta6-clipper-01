// Entry program for gta6-clipper-01 ("Clip GTA 6 for the most YouTube views").
// The video itself is the entry; this program only moves the video's address
// (VIDEO.json, written at the repository root) into the output directory
// where the grader reads it. Nothing else is written, and the output bytes
// are exactly the input bytes on every run.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const botDir = resolve(process.env.MAKEFUN_BOT_DIR ?? "/bot");
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
const sourcePath = join(botDir, "VIDEO.json");
const targetPath = join(outDir, "VIDEO.json");

let videoAddress: Buffer;
try {
  videoAddress = readFileSync(sourcePath);
} catch (error) {
  console.error(`VIDEO.json could not be read from ${sourcePath}: ${(error as Error).message}`);
  process.exit(1);
}

// The address must be a JSON object holding one YouTube URL string; refuse
// to hand on a placeholder or a malformed file.
let parsed: unknown;
try {
  parsed = JSON.parse(videoAddress.toString("utf8"));
} catch (error) {
  console.error(`VIDEO.json is not valid JSON: ${(error as Error).message}`);
  process.exit(1);
}
if (
  typeof parsed !== "object" ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== "string" ||
  !/^https:\/\/(www\.youtube\.com|youtu\.be)\//.test((parsed as { url: string }).url)
) {
  console.error('VIDEO.json must hold {"url": "https://www.youtube.com/..."}');
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(targetPath, videoAddress);
