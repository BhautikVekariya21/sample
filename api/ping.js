const axios = require('axios');

// Function to send the request
const postData = async () => {
  try {
    const response = await axios.post(
      'https://i.clarity.ms/collect',
      {
        e: ["0.8.1", 12, 402017, 60000, "jktbq07vxg", "1hhr2je", "1xdaxh5", 2, 1, 1, 0, "https://app.getgrass.io/dashboard"],
        a: [[462017, 25, 329371], [462017, 24, "clarity", "suspend"], [402017, 4, 0, 231, 777, 150, 704, 0, 0, 148, 304, 132643, 0, 9175, 148, 304, 9175, 17, 405, 8158, 17, 405, 8378, 147, 302, 9168], [462017, 0, 2, 198, 4, 2, 25, 4]]
      },
      {
        headers: {
          'Accept': '*/*',
          'Accept-Language': 'en-US,en;q=0.9,en-IN;q=0.8',
          'Connection': 'keep-alive',
          'Content-Type': 'text/plain;charset=UTF-8',
          'Cookie': 'MUID=1B883A4570CB6D8D15D22FCA71396CDA; ANON=A=5869E4DF1B10607C0009C481FFFFFFFF&E=1ed6&W=1; NAP=V=1.9&E=1e7c&C=38ToE1hdcg0UrqEYq9El7CMkCjTn_dALtvzzY2QpT-0pXuzwFzSrTg&W=1',
          'Origin': 'https://app.getgrass.io',
          'Referer': 'https://app.getgrass.io/',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'cross-site',
          'Sec-Fetch-Storage-Access': 'active',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
          'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        timeout: 5000 // 5 seconds timeout
      }
    );

    console.log(`[${new Date().toISOString()}] ✅ Request successful:`, response.status);
  } catch (error) {
    console.error(`[${new Date().toISOString()}] ❌ Error sending request:`, error.message);
  }
};

// Run immediately at start
postData();

// Run every 1 minute
setInterval(postData, 60 * 1000);
