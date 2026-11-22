// main.ts — entry program for the make.fun bounty
// "The agent builds a game from one prompt".
//
// What it does: copy POST.json from this repository to the output
// directory, byte for byte. The house reads the post from X itself;
// nothing this program writes about the post counts.
//
// Node 22, standard library only. No network, no wall clock, no files
// outside this repository. The two runs of an entry write the same bytes.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Read first so a malformed POST.json fails loudly instead of copying
// a broken file: the entry must name a real X post address.
const postPath = join(botDir, "POST.json");
const post = JSON.parse(readFileSync(postPath, "utf8")) as unknown;
if (typeof post !== "object" || post === null || typeof (post as { url?: unknown }).url !== "string") {
  throw new Error("POST.json must be an object with a string url");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(postPath, join(outDir, "POST.json"));
