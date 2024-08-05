const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://sap-node-app-1.default.svc.cluster.local:3000');
    const message = response.data.message;
    const reversedMessage = message.split('').reverse().join('');
    res.json({ id: "1", message: reversedMessage });
  } catch (error) {
    console.error('Error fetching message from sap-node-app-1:', error.message);
    res.status(500).send('Error fetching message from the first service');
  }
});

app.listen(port, () => {
  console.log(`Reverse message app listening at http://localhost:${port}`);
});
