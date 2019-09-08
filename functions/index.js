/*
  @todo A simple mock server, should be replaced with live real data from firebase later
*/
const functions = require('firebase-functions');
const express = require('express');

const app = express();

// Latest Wallpapers
app.get('/api/v1/top', (req, res) => {
    const data = [
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        }
    ];
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
});

// Top Wallpapers
app.get('/api/v1/latest', (req, res) => {
    const data = [
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        },
        {
            url: 'https://placeimg.com/1920/1080/nature',
            title: 'This is our big Tagline!',
            description: 'Here\'s our small slogan.'
        }
    ];
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
});

// Not Found
app.get('*', (req, res) => res.send('Resource does not exists'));

exports.app = functions.https.onRequest(app);
