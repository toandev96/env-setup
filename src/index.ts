#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Files to be created
const configFiles = [
  {
    name: ".prettierrc",
    content: JSON.stringify({ semi: false, singleQuote: true }, null, 2),
  },
  {
    name: ".eslintrc",
    content: JSON.stringify(
      { env: { browser: true, es2021: true }, extends: ["eslint:recommended"] },
      null,
      2
    ),
  },
];

configFiles.forEach((file) => {
  const filePath = path.join(process.cwd(), file.name);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, file.content, "utf-8");
    console.log(`Created: ${file.name}`);
  } else {
    console.log(`Skipped (already exists): ${file.name}`);
  }
});

console.log("Setup completed!");
