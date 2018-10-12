const express = require('express');
const router = express.Router();

const speakers = require('./speakers');
const feedback = require('./feedback');

module.exports = () => {
    router.get('/', (req, res, next) => {
        return res.render('index');
    });
    router.use('/speakers', speakers());
    router.use('/feedback', feedback());
    return router;
};