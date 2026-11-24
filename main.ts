import * as fs from 'node:fs';
import * as path from 'node:path';

// The sunflower emoji radiates cheerful, natural warmth to brighten any stranger's day.
// Its universally recognized floral beauty offers an inviting, non-default smile.
const emoji = '🌻';

// Guard: ensure emoji is between 1 and 8 characters
const charCount = Array.from(emoji).length;
if (charCount === 0 || charCount > 8) {
  console.error(`Error: emoji character count (${charCount}) is out of allowed range (1-8).`);
  process.exit(1);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });

const outputPath = path.join(outputDir, 'entry.txt');
fs.writeFileSync(outputPath, emoji, 'utf8');
