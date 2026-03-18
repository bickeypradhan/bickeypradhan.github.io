import { copyFile } from "node:fs/promises";

const sourceFile = "dist/index.html";
const targetFile = "dist/404.html";

try {
  await copyFile(sourceFile, targetFile);
} catch (error) {
  console.error(`Failed to copy ${sourceFile} to ${targetFile}`);
  console.error(error);
  process.exitCode = 1;
}
