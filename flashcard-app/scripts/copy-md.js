/**
 * Script to copy markdown files from the repository root to the public folder
 * This ensures the markdown files are available to the built application
 */

import { copyFileSync, readdirSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rootDir = join(__dirname, '..', '..');
const publicDir = join(__dirname, '..', 'public', 'content');

// Create public/content directory if it doesn't exist
if (!existsSync(publicDir)) {
  mkdirSync(publicDir, { recursive: true });
}

// Get all .md files from root directory
const files = readdirSync(rootDir).filter(file => file.endsWith('.md') && file !== 'README.md');

console.log('Copying markdown files to public/content/...');
files.forEach(file => {
  const src = join(rootDir, file);
  const dest = join(publicDir, file);
  copyFileSync(src, dest);
  console.log(`  ✓ Copied ${file}`);
});

console.log(`\nCopied ${files.length} markdown file(s) successfully.`);
