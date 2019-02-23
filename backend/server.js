const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const fetch = require("node-fetch");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.post('/api/text/analytics', (req, res) => {
  const accessKey = `${process.env.REACT_APP_API_KEY}`;
  const uri = 'australiaeast.api.cognitive.microsoft.com';
  const path = '/text/analytics/v2.0/languages';
  const url = "https://" + uri + path;


  const data = {
    'documents': [
      { 'id': '1', 'text': 'This is a document written in English.' },
      { 'id': '2', 'text': 'Este es un document escrito en Español.' },
      { 'id': '3', 'text': '这是一个用中文写的文件' }
    ]
  };

  const options = {
    method: 'POST',
    uri: url,
    path: path,
    body: JSON.stringify(data),
    headers: {
      'Ocp-Apim-Subscription-Key': accessKey,
      'Content-Type': 'application/json'
    }
  };

  fetch(url, options)
    .then(res => res.json())
    .then(data => {
      res.send({ data });
    })
    .catch(err => {
      res.redirect('/error');
    });

});

app.get('/api/test', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello test` }));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log('Express server is running on localhost:3001')
);