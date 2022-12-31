const http = require('http');

const server = http.createServer((req, res) => {
  const lat = Math.random() * 180 - 90;
  const lng = Math.random() * 360 - 180;
  if (req.url === '/coordinates') {
    res.end(JSON.stringify({ lat: lat, lng: lng }));
  }
}).listen(8000, () => {
  console.log('server running at port 3000 ')
})