const http = require('http');
// return Math.random() * (max - min) + min;
const server = http.createServer((req, res) => {
  const lat = Math.random() * (28-25)+25;
  const lng = Math.random() * (84-78)+78;
  if (req.url === '/coordinates') {
    res.end(JSON.stringify({ lat: lat, lng: lng }));
  }
}).listen(8000, () => {
  console.log('server running at port 3000 ')
})