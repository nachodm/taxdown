"use strict"

const { json } = require('body-parser');
const { response } = require('express');
const express = require('express')
const app = express()
const fetch = require('node-fetch');
const makeRequest = require('./make-request')
const port = 3000;

/**
 * Performs a get request to the exchange rates api and returns the same information in json format.
 */
app.get('/getExchangeRates', async (req, res) => {
    const json = await makeRequest.makeRequest();
    res.setHeader('Content-Type', 'application/json');
    res.json(json);
})

app.listen(port, (err) => {
    if (err) {
        console.log('Error al iniciar el servidor')
    }
    else {
        console.log('Serviror arrancado en el puerto ' + port)
    }
})
module.exports = app