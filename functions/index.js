/*
  @todo A simple mock server, should be replaced with live real data from firebase later
*/
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();

const allowedOrigins = [
    'http://localhost:3000',
    'http://windowswallpapers.com'
];

app.use(cors({
    origin: function(origin, callback){
        // allow requests with no origin (like mobile apps or curl requests)
        if(!origin) return callback(null, true);
        if(allowedOrigins.indexOf(origin) === -1){
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

// Mock data
const mockData = [
    {
        id: 1,
        url: 'https://placeimg.com/1920/1080/any',
        thumbnail: 'https://placeimg.com/280/160/any',
        title: 'This is our big Tagline!',
        description: 'Here\'s our small slogan.',
        views: 1000,
        uploadedOn: 946715040000
    },
    {
        id: 2,
        url: 'https://placeimg.com/1920/1080/animals',
        thumbnail: 'https://placeimg.com/280/160/animals',
        title: 'This is our big Tagline!',
        description: 'Here\'s our small slogan.',
        views: 1000,
        uploadedOn: 949393440000
    },
    {
        id: 3,
        url: 'https://placeimg.com/1920/1080/arch',
        thumbnail: 'https://placeimg.com/280/160/arch',
        title: 'This is our big Tagline!',
        description: 'Here\'s our small slogan.',
        views: 1000,
        uploadedOn: 951899040000
    },
    {
        id: 4,
        url: 'https://placeimg.com/1920/1080/nature',
        thumbnail: 'https://placeimg.com/280/160/nature',
        title: 'This is our big Tagline!',
        description: 'Here\'s our small slogan.',
        views: 1000,
        uploadedOn: 954577440000
    },
    {
        id: 5,
        url: 'https://placeimg.com/1920/1080/people',
        thumbnail: 'https://placeimg.com/280/160/people',
        title: 'This is our big Tagline!',
        description: 'Here\'s our small slogan.',
        views: 1000,
        uploadedOn: 957165840000
    },
    {
        id: 6,
        url: 'https://placeimg.com/1920/1080/tech',
        thumbnail: 'https://placeimg.com/280/160/tech',
        title: 'This is our big Tagline!',
        description: 'Here\'s our small slogan.',
        views: 1000,
        uploadedOn: 959844240000
    },
    {
        id: 7,
        url: 'https://placeimg.com/1920/1080/grayscale',
        thumbnail: 'https://placeimg.com/280/160/grayscale',
        title: 'This is our big Tagline!',
        description: 'Here\'s our small slogan.',
        views: 1000,
        uploadedOn: 962436240000
    },
    {
        id: 8,
        url: 'https://placeimg.com/1920/1080/sepia',
        thumbnail: 'https://placeimg.com/280/160/sepia',
        title: 'This is our big Tagline!',
        description: 'Here\'s our small slogan.',
        views: 1000,
        uploadedOn: 965114640000
    },
    {
        id: 9,
        url: 'https://placeimg.com/1920/1080/any',
        thumbnail: 'https://placeimg.com/280/160/any',
        title: 'This is our big Tagline!',
        description: 'Here\'s our small slogan.',
        views: 1000,
        uploadedOn: 967793040000
    },
    {
        id: 10,
        url: 'https://placeimg.com/1920/1080/nature',
        thumbnail: 'https://placeimg.com/280/160/nature',
        title: 'This is our big Tagline!',
        description: 'Here\'s our small slogan.',
        views: 1000,
        uploadedOn: 970385040000
    }
];

// Top Wallpapers
app.get('/api/v1/top', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(mockData));
});

// Latest Wallpapers
app.get('/api/v1/latest', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(mockData));
});

// Not Found
//@todo Handle Exception properly
app.get('*', (req, res) => res.send('Resource not found'));

exports.app = functions.https.onRequest(app);
