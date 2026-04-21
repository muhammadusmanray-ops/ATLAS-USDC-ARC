const https = require('https');

const body = JSON.stringify({
  messages: [{ role: "user", content: "What is the current ARC market status?" }],
  currentDemand: 150
});

const options = {
  hostname: 'HEWJDEWJDBQWJDWEJ-atlasusdc.hf.space',
  path: '/api/chat',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(body)
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('HTTP Status:', res.statusCode);
    console.log('Response:', data);
    try {
      const parsed = JSON.parse(data);
      if (parsed.reply) {
        console.log('\n✅ AI ANALYST WORKING! Reply:', parsed.reply.substring(0, 200));
      } else if (parsed.error) {
        console.log('\n❌ AI ANALYST ERROR:', parsed.error);
      }
    } catch(e) {
      console.log('Raw:', data.substring(0, 300));
    }
  });
});

req.on('error', e => console.error('Request failed:', e.message));
req.write(body);
req.end();
