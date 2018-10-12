const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('x-server-date', new Date());
    return next();
});

app.get('/', (req, res, next) => {
    return res.send('Hello, I am an express webserver!');
});
app.get('/next', (req, res, next) => {
    setTimeout(() => {
        next(new Error('Something new went wrong'));
    }, 1000);
});
app.get('/throw', (req, res, next) => {
    throw new Error('Something is wrong');
});
app.get('/time', (req, res, next) => {
    return res.send(`The current date and time is: ${new Date().toString()}`);
});
app.get('/hello', (req, res, next) => {
    if(!req.query.name){
        return res.status(400).end();
    }
    return res.send(`Hello, ${req.query.name}`);
});
app.get('/user/:name', (req, res, next) => {
    return res.send(`This is the user profile for ${req.params.name}`);
});

app.listen(3000);