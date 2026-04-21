import axios from 'axios';

// Your Hugging Face Space URL
const SPACE_URL = 'https://hewjdewjdbqwjdwej-atlasusdc.hf.space/api/health';

console.log('🚀 Atlas Keep-Alive Worker Started...');
console.log(`Target: ${SPACE_URL}`);
console.log('Interval: Every 35 minutes');

async function ping() {
    try {
        const timestamp = new Date().toLocaleString();
        const response = await axios.get(SPACE_URL);
        if (response.status === 200) {
            console.log(`[${timestamp}] ✅ Space is awake! Status: OK`);
        } else {
            console.log(`[${timestamp}] ⚠️ Space responded with status: ${response.status}`);
        }
    } catch (error) {
        console.error(`[${new Date().toLocaleString()}] ❌ Failed to ping space:`, error.message);
    }
}

// Ping immediately on start
ping();

// Schedule ping every 40 minutes (2400000 ms)
setInterval(ping, 2400000);
