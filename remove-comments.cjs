const fs = require("fs");
const path = require("path");

const extensions = [".ts", ".tsx", ".js", ".jsx"];

function getFiles(dir) {
  const files = [];

  for (const item of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...getFiles(fullPath));
    } else if (extensions.includes(path.extname(fullPath))) {
      files.push(fullPath);
    }
  }

  return files;
}

const files = getFiles("./src");

let changedFiles = 0;

for (const file of files) {
  let content = fs.readFileSync(file, "utf8");
  const original = content;

  // Remove JSX comments: {/* comment */}
  content = content.replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, "");

  // Remove block comments: /* comment */
  content = content.replace(/\/\*[\s\S]*?\*\//g, "");

  // Remove single-line comments: // comment
  content = content.replace(/^\s*\/\/.*$/gm, "");

  if (content !== original) {
    fs.writeFileSync(file, content, "utf8");
    changedFiles++;
    console.log(`✅ ${file}`);
  }
}

console.log(`\nRemoved comments from ${changedFiles} files.`);
