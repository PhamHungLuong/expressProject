const API_KEY = 'not key';

const axios = require('axios');
const HttpError = require('../models/http-error');

async function getCoordsForAddress(address) {
    // fake API
    return {
        lat: 40.213231,
        lng: 34.23123123,
    };
}

module.exports = getCoordsForAddress;
