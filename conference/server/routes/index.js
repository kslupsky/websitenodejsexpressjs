const express = require('express');
const router = express.Router();

const speakers = require('./speakers');
const feedback = require('./feedback');

module.exports = (param) => {
    const { speakerService } = param;
    router.get('/', async (req, res, next) => {
        const speakersList = await speakerService.getListShort();
        return res.render('index', {
            page: 'Home',
            speakersList
        });
    });
    router.use('/speakers', speakers(param));
    router.use('/feedback', feedback(param));
    return router;
};