const { execSync } = require('child_process');
const fs = require('fs');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const routes = [
  { path: '#/', name: 'Dashboard Page', mustContain: ['GeM Technical Evaluation', 'Deterministic Technical Scrutiny Active'] },
  { path: '#/tenders', name: 'Tenders Page', mustContain: ['Tenders & Evaluation Criteria', 'Publish New Tender', 'GEM/2026/B/12345'] },
  { path: '#/bidders', name: 'Bidders Registry Page', mustContain: ['Bidder & Vendor Master Registry', 'ABC Technologies Pvt Ltd', 'Register New Bidder'] },
  { path: '#/bids', name: 'Bids List Page', mustContain: ['All Bids Under Verification', 'Submit / Register New Bid', 'BID/12345/ABC-01'] },
  { path: '#/bids/1', name: 'Bid Verification Detail Page', mustContain: ['Compliance Score', 'Technical Compliance & Requirement Evidence Matrix', 'Attached Bid Documents Repository'] },
  { path: '#/integrations', name: '14 Connectors Integrations Page', mustContain: ['Government Portal Integrations Architecture', '14 Connectors Live', 'GSTN Verification Gateway'] },
  { path: '#/audit', name: 'CVC Audit Logs Page', mustContain: ['Immutable CVC & CAG Vigilance Audit Trail', 'Total Logged Vigilance Events', 'BID_COMPLIANCE_EVALUATION'] }
];

console.log('--- TESTING ALL APPLICATION ROUTES IN HEADLESS BROWSER ---\n');

let allPassed = true;

for (const route of routes) {
  const url = `file:///D:/SIH_Project/index.html${route.path}`;
  const outFile = `dom_test_${route.name.replace(/\s+/g, '_')}.html`;

  try {
    execSync(`"${edgePath}" --headless=new --disable-web-security --allow-file-access-from-files --user-data-dir="C:\\Users\\Joshi\\AppData\\Local\\Temp\\edge_test" --dump-dom --virtual-time-budget=5000 "${url}" > "${outFile}"`, { stdio: 'ignore' });
    const dom = fs.readFileSync(outFile, 'utf8');

    const missing = route.mustContain.filter(str => !dom.includes(str));
    if (missing.length === 0) {
      console.log(`[PASS] ${route.name} (${route.path}) rendered completely.`);
    } else {
      console.log(`[FAIL] ${route.name} (${route.path}) missing: ${missing.join(', ')}`);
      allPassed = false;
    }
    try { fs.unlinkSync(outFile); } catch (e) {}
  } catch (err) {
    console.error(`[ERROR] testing ${route.name}:`, err.message);
    allPassed = false;
  }
}

if (fs.existsSync('rendered_dom.html')) fs.unlinkSync('rendered_dom.html');
if (fs.existsSync('test-rendered.cjs')) fs.unlinkSync('test-rendered.cjs');

console.log(`\nALL ROUTES TEST RESULT: ${allPassed ? 'ALL PASSED (100% SUCCESS)' : 'SOME FAILED'}`);
process.exit(allPassed ? 0 : 1);
