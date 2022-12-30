const express = require('express');
const app = express();
app.use(express.json());

app.get('/coordinates', (req, res) => {

  const lat = Math.random() * 180 - 90;
  const lng = Math.random() * 360 - 180;

  res.json({
    lat: lat,
    lng: lng
  });
});

app.listen(3000, () => {
  console.log('API listening on port 3000');
});
