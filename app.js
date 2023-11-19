const express = require('express');
const fs = require('fs');
const os = require('os');
const path = require('path');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { userAgent } = require('next/server');
const app = express();
const port = 7890;


app.get('/', (req, res) => {
    res.send('Привет, мир!');
});

app.get('/home', (req, res) => {
    res.send('<center>Главная страница</center>');
    res.send();
})

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}/home`);
    console.log(              );
})