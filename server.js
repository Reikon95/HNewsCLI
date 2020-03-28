const express = require('express');
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const app = express();

app.get('/scrape', function (req, res) {
    let url = 'http://www.imdb.com/title/tt1229340/';
    request(url, function(error, response, html) {
        if (!error) {
            let $ = cheerio.load(html);
            let title, release, rating;
            let json = {title: '', release: '', rating: ''}
        }
    })

});

app.listen('8081');

console.log('Magic happens on port 8081');

exports = module.exports = app;