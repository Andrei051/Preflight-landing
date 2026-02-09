const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dirs = ['.next', path.join('node_modules', '.cache')];
let hadError = false;

function rm(dir) {
  const full = path.resolve(process.cwd(), dir);
  if (!fs.existsSync(full)) return;
  try {
    fs.rmSync(full, { recursive: true, maxRetries: 3 });
    console.log('Removed', dir);
  } catch (e) {
    if (e.code === 'EPERM' || e.code === 'EBUSY') {
      console.warn('Could not remove', dir, '(file in use). Stop the dev server, close other terminals, then delete the folder manually in File Explorer.');
      hadError = true;
    } else {
      throw e;
    }
  }
}

dirs.forEach(rm);

if (hadError) {
  console.warn('\nTo fix: Close all terminals and Cursor, delete the .next folder in File Explorer, then run: npm run dev');
}

process.exit(0);
