const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/alerts', (req, res) => {
  res.json([
    { title: 'Earthquake Alert', location: 'Maynamar', details: '7.7', severity: 'red' },
    { title: 'Flood Near By', location: 'Mumbai', details: 'High Density', severity: 'red' },
    { title: 'Fire Nearby Alert', location: 'Jaipur', details: 'Bus Blast', severity: 'red' },
    { title: 'Pre Cyclone Alert', location: 'Pune', details: 'High Density', severity: 'red' }
  ]);
});

app.get('/user', (req, res) => {
  res.json({ name: 'John Doe' });
});

app.get('/dashboard', (req, res) => {
  res.json({ message: 'Dashboard data goes here' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
