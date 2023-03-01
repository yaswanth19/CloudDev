const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/api/feedback', (req, res) => {
  console.log(req.body);
  res.send('Thanks for your feedback!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

