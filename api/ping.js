const axios = require('axios');

const postData = async () => {
  try {
    const response = await axios.post('https://i.clarity.ms/collect', {
      // You can include the request body here if needed.
      // For example: data: { key: 'value' }
    }, {
      headers: {
        'accept': 'application/x-clarity-gzip',
        'content-length': '862', // Note: this header is usually set automatically.
        'cookie': 'MUID=1B883A4570CB6D8D15D22FCA71396CDA; ANON=A=5869E4DF1B10607C0009C481FFFFFFFF&E=1ed6&W=1; NAP=V=1.9&E=1e7c&C=38ToE1hdcg0UrqEYq9El7CMkCjTn_dALtvzzY2QpT-0pXuzwFzSrTg&W=1',
        'origin': 'https://app.getgrass.io',
        'referer': 'https://app.getgrass.io/',
        'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Microsoft Edge";v="134"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0'
      }
    });
    console.log('Request sent. Status code:', response.status);
  } catch (error) {
    console.error('Error sending POST request:', error.message);
  }
};

// Run the POST request every 60 seconds.
setInterval(postData, 60 * 1000);

// Optionally, call it once at startup.
postData();
