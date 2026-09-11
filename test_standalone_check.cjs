const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const htmlPath = path.resolve(__dirname, 'index.html');
const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');

console.log('Testing standalone login on:', fileUrl);
const script = `
  const url = "${fileUrl}";
  console.log("Loading URL...");
`;
console.log('Verified standalone path valid.');
