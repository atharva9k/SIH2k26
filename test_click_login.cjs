const { execSync } = require('child_process');
const path = require('path');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const htmlPath = path.resolve(__dirname, 'index.html').replace(/\\/g, '/');
const fileUrl = 'file:///' + htmlPath;

console.log('Testing standalone index.html...');
const output = execSync(`"${edgePath}" --headless --disable-gpu --dump-dom --allow-file-access-from-files "${fileUrl}"`, {
  encoding: 'utf8',
  maxBuffer: 10 * 1024 * 1024
});

console.log('DOM Output Length:', output.length);
if (output.includes('GeM BidVerify')) {
  console.log('SUCCESS: Page rendered successfully.');
} else {
  console.log('ERROR: Page did not render root DOM.');
  console.log(output.slice(0, 1000));
}
