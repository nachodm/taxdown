"use strict"

const { json } = require('body-parser');
const { response } = require('express');
const express = require('express')
const app = express()
const fetch = require('node-fetch');
const port = 3000;

/**
 * Performs a get request to the exchange rates api and returns the same information in json format.
 */
app.get('/getExchangeRates', async (req, res) => {
    const response = await fetch('https://api.exchangeratesapi.io/latest');
    const json = await response.json();
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