import { readFile, writeFile } from "node:fs/promises";

const buildNumberPath = new URL("../build-number.json", import.meta.url);
const buildNumberData = JSON.parse(await readFile(buildNumberPath, "utf8"));

if (!Number.isSafeInteger(buildNumberData.buildNumber) || buildNumberData.buildNumber < 0) {
  throw new Error("build-number.json must contain a non-negative integer buildNumber.");
}

buildNumberData.buildNumber += 1;
await writeFile(
  buildNumberPath,
  `${JSON.stringify(buildNumberData, null, 2)}\n`,
);

console.log(`Incremented build number to ${buildNumberData.buildNumber}.`);
