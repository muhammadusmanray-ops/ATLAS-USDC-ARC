import fs from 'fs';
import { marked } from 'marked';

const largeMd = fs.readFileSync('Atlas_Arc_Scientific_Report.md', 'utf-8');

const htmlContent = marked.parse(largeMd);

const finalHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Atlas Arc Comprehensive Technical Report</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap');
        body {
            font-family: 'Inter', sans-serif;
            line-height: 2.2;
            color: #2d3748;
            max-width: 900px;
            margin: 0 auto;
            padding: 60px;
            font-size: 1.3rem; /* Huge font to create more pages */
        }
        h1, h2, h3, h4 { color: #1a202c; font-weight: 800; border-bottom: 2px solid #e2e8f0; padding-bottom: 1rem; margin-top: 3.5rem; }
        h1 { font-size: 4rem; text-align: center; color: #3182ce; border: none; margin-bottom: 1.5rem; }
        h2 { font-size: 2.8rem; color: #2c5282; page-break-after: avoid; }
        h3 { font-size: 2rem; color: #4a5568; }
        p { margin-bottom: 2.5rem; }
        ul, ol { margin-bottom: 2.5rem; font-size: 1.25rem; }
        li { margin-bottom: 1rem; }
        table { width: 100%; border-collapse: collapse; margin: 3rem 0; font-size: 1.25rem; }
        th, td { padding: 20px 25px; border: 1px solid #cbd5e0; text-align: left; }
        th { background-color: #ebf8ff; font-weight: 600; color: #2c5282; }
        tr:nth-child(even) { background-color: #f7fafc; }
        code { background-color: #edf2f7; padding: 0.4rem 0.6rem; border-radius: 4px; font-family: 'Courier New', Courier, monospace; font-weight: bold; color: #c53030; }
        pre { background-color: #1a202c; padding: 2rem; border-radius: 12px; overflow-x: auto; color: #f7fafc; line-height: 1.5; font-size: 1.2rem; box-shadow: inset 0 2px 4px rgba(0,0,0,0.5); }
        pre code { background-color: transparent; color: #e2e8f0; padding: 0; font-weight: normal; }
        blockquote { border-left: 5px solid #3182ce; margin-left: 0; padding-left: 1.5rem; color: #718096; font-style: italic; background: #f7fafc; padding: 1.5rem; border-radius: 0 8px 8px 0; }
        .page-break { page-break-after: always; }
    </style>
</head>
<body>
    ${htmlContent}
</body>
</html>
`;

fs.writeFileSync('large_report.html', finalHtml);
console.log('Massive HTML ready!');
