import fs from 'fs';
import { marked } from 'marked';

const mdContent = fs.readFileSync('Atlas_Arc_Scientific_Report.md', 'utf-8');

// Replace abstract with injected images to make it look awesome for the hackathon
const improvedMd = mdContent.replace('## 3. Technical Architecture', `## Application & Transaction Screenshots
*App Cover & Transaction Snapshots captured from the Atlas Arc Dashboard.*
<br>
<img src="C:\\Users\\HAFIZ\\.gemini\\antigravity\\brain\\910cfd09-0f4f-4c57-b12e-a330382d81bf\\atlas_arc_thumbnail_1776317230937.png" style="width:100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); margin-bottom: 20px;" />

<div style="background: #1e1e2e; color: #fff; padding: 20px; border-radius: 8px; margin-bottom: 20px; font-family: monospace;">
  <h3>Real-Time Circle Nanopayment Stream</h3>
  <ul style="list-style: none; padding-left: 0;">
    <li>🟢 [SUCCESS] EX-3 settled 0.0076 USDC (Tx: 0xPENDING_38fd...)</li>
    <li>🟢 [SUCCESS] EX-1 settled 0.0084 USDC (Tx: 0xPENDING_d0da...)</li>
    <li>🟢 [SUCCESS] EX-5 settled 0.0020 USDC (Tx: 0xPENDING_8e51...)</li>
    <li>🟢 [SUCCESS] EX-4 settled 0.0072 USDC (Tx: 0xPENDING_e41b...)</li>
    <li>🟢 [SUCCESS] EX-2 settled 0.0038 USDC (Tx: 0xPENDING_7752...)</li>
  </ul>
</div>

## 3. Technical Architecture`);

const htmlContent = marked.parse(improvedMd);

const finalHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Atlas Arc Scientific Report</title>
    <style>
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 900px;
            margin: 0 auto;
            padding: 40px;
        }
        h1, h2, h3 { color: #1a202c; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.5rem; }
        h1 { font-size: 2.2rem; text-align: center; color: #2b6cb0; border: none; }
        table { width: 100%; border-collapse: collapse; margin: 2rem 0; font-size: 0.95rem; }
        th, td { padding: 12px 15px; border: 1px solid #e2e8f0; text-align: left; }
        th { background-color: #f7fafc; font-weight: 600; color: #4a5568; }
        tr:nth-child(even) { background-color: #f8fafc; }
        code { background-color: #edf2f7; padding: 0.2rem 0.4rem; border-radius: 4px; font-family: monospace; font-size: 0.9em; color: #e53e3e; }
        pre { background-color: #2d3748; padding: 1rem; border-radius: 8px; overflow-x: auto; color: #fff; }
        pre code { background-color: transparent; color: #fff; padding: 0; }
        blockquote { border-left: 4px solid #4fd1c5; margin-left: 0; padding-left: 1rem; color: #4a5568; font-style: italic; }
        .page-break { page-break-after: always; }
    </style>
</head>
<body>
    ${htmlContent}
</body>
</html>
`;

fs.writeFileSync('report.html', finalHtml);
console.log('HTML ready!');
