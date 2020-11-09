
const { json } = require('body-parser');
const { response } = require('express');
const express = require('express')
const fetch = require('node-fetch');  

const makeRequest = async () => {
    const response = await fetch('https://api.exchangeratesapi.io/latest');
    const json = await response.json();
    return json
}

exports.makeRequest = makeRequest