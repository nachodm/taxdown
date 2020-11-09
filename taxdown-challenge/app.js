'use strict';

// eslint-disable-next-line import/no-unresolved
const express = require('express');
const app = express();
const fetch = require('node-fetch');
const makeRequest = require('./make-request')

/**
 * Performs a get request to the exchange rates api and returns the same information in json format.
 */
app.get('/getExchangeRates', async (req, res) => {
  const json = await makeRequest.makeRequest();
  res.setHeader('Content-Type', 'application/json');
  res.json(json);
})

// Other routes
app.get('/*', (req, res) => {
  res.send(`Try going to /getExchangeRates ;) \n Request received: ${req.method} - ${req.path}`);
});

// Error handler
app.use((err, req, res) => {
  console.error(err);
  res.status(500).send('Internal Serverless Error');
});

module.exports = app;
