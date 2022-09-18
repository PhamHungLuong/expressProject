const API_KEY = 'not key';

const axios = require('axios');
const HttpError = require('../models/http-error');

async function getCoordsForAddress(address) {
    // fake API
    return {
        lat: 40.213231,
        lng: 34.23123123,
    };

    // const response = await axios.get(`API key`);

    // const data = response.data;

    // if (!data || data.status === 'ZERO_RESULTS') {
    //     const error = new HttpError('Could not find location', 422);
    //     throw error;
    // }

    // const coordinates = data.results[0].geometry.location;

    // return coordinates;
}

module.exports = getCoordsForAddress;
