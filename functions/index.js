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
const wallpersMockData = [
    {
        id: 1,
        categoryId:1,
        url: 'https://placeimg.com/1920/1080/any',
        thumbnail: 'https://placeimg.com/280/160/any',
        title: 'This is our big Tagline!',
        description: 'Here\'s our small slogan.',
        views: 1000,
        createdOn: '946715040000'
    },
    {
        id: 2,
        categoryId:2,
        url: 'https://placeimg.com/1920/1080/animals',
        thumbnail: 'https://placeimg.com/280/160/animals',
        title: 'This is our big Tagline!',
        description: 'Here\'s our small slogan.',
        views: 1100,
        createdOn: '949393440000'
    },
    {
        id: 3,
        categoryId:3,
        url: 'https://placeimg.com/1920/1080/arch',
        thumbnail: 'https://placeimg.com/280/160/arch',
        title: 'This is our big Tagline!',
        description: 'Here\'s our small slogan.',
        views: 1200,
        createdOn: '951899040000'
    },
    {
        id: 4,
        categoryId:4,
        url: 'https://placeimg.com/1920/1080/nature',
        thumbnail: 'https://placeimg.com/280/160/nature',
        title: 'This is our big Tagline!',
        description: 'Here\'s our small slogan.',
        views: 1300,
        createdOn: '954577440000'
    },
    {
        id: 5,
        categoryId:5,
        url: 'https://placeimg.com/1920/1080/people',
        thumbnail: 'https://placeimg.com/280/160/people',
        title: 'This is our big Tagline!',
        description: 'Here\'s our small slogan.',
        views: 1400,
        createdOn: '957165840000'
    },
    {
        id: 6,
        categoryId:7,
        url: 'https://placeimg.com/1920/1080/tech',
        thumbnail: 'https://placeimg.com/280/160/tech',
        title: 'This is our big Tagline!',
        description: 'Here\'s our small slogan.',
        views: 1500,
        createdOn: '959844240000'
    },
    {
        id: 7,
        categoryId:8,
        url: 'https://placeimg.com/1920/1080/grayscale',
        thumbnail: 'https://placeimg.com/280/160/grayscale',
        title: 'This is our big Tagline!',
        description: 'Here\'s our small slogan.',
        views: 1600,
        createdOn: '962436240000'
    },
    {
        id: 8,
        categoryId:8,
        url: 'https://placeimg.com/1920/1080/sepia',
        thumbnail: 'https://placeimg.com/280/160/sepia',
        title: 'This is our big Tagline!',
        description: 'Here\'s our small slogan.',
        views: 1700,
        createdOn: '965114640000'
    },
    {
        id: 9,
        categoryId:9,
        url: 'https://placeimg.com/1920/1080/any',
        thumbnail: 'https://placeimg.com/280/160/any',
        title: 'This is our big Tagline!',
        description: 'Here\'s our small slogan.',
        views: 1800,
        createdOn: '967793040000'
    },
    {
        id: 10,
        url: 'https://placeimg.com/1920/1080/nature',
        thumbnail: 'https://placeimg.com/280/160/nature',
        title: 'This is our big Tagline!',
        description: 'Here\'s our small slogan.',
        views: 1900,
        createdOn: '970385040000'
    }
];

const commentsMockData = [
    {
        id: 1,
        wallpaperId: 1,
        userID: 1,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        createdOn: '946715040000'
    },
    {
        id: 2,
        wallpaperId: 1,
        userID: 2,
        comment: 'Nisl nunc mi ipsum faucibus. Tellus in metus vulputate eu.',
        createdOn: '946715040000'
    },
    {
        id: 3,
        wallpaperId: 1,
        userID: 3,
        comment: 'Porttitor rhoncus dolor purus non enim praesent elementum. Tempus urna et pharetra pharetra massa massa ultricies.',
        createdOn: '946715040000'
    },
    {
        id: 4,
        wallpaperId: 2,
        userID: 4,
        comment: ' Fringilla est ullamcorper eget nulla facilisi',
        createdOn: '946715040000'
    },
    {
        id: 5,
        wallpaperId: 2,
        userID: 5,
        comment: 'Ullamcorper velit sed ullamcorper morbi tincidunt. Elementum pulvinar etiam non quam lacus suspendisse faucibus.',
        createdOn: '946715040000'
    },
    {
        id: 6,
        wallpaperId: 2,
        userID: 6,
        comment: 'Nisi scelerisque eu ultrices vitae auctor. Accumsan lacus vel facilisis volutpat est velit egestas.',
        createdOn: '946715040000'
    },
    {
        id: 7,
        wallpaperId: 2,
        userID: 7,
        comment: 'Sed odio morbi quis commodo. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. Vel orci porta non pulvinar neque laoreet.',
        createdOn: '946715040000'
    },
    {
        id: 8,
        wallpaperId: 3,
        userID: 8,
        comment: 'Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Semper quis lectus nulla at volutpat diam.',
        createdOn: '946715040000'
    },
    {
        id: 9,
        wallpaperId: 3,
        userID: 9,
        comment: 'Ut sem viverra aliquet eget sit amet tellus cras adipiscing. In hac habitasse platea dictumst vestibulum rhoncus est.',
        createdOn: '946715040000'
    },
    {
        id: 10,
        wallpaperId: 3,
        userID: 10,
        comment: 'Donec adipiscing tristique risus nec feugiat in. Elementum nibh tellus molestie nunc non blandit massa enim nec.',
        createdOn: '946715040000'
    }
];

// Top Wallpapers
app.get('/api/v1/top', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(wallpersMockData));
});

// Latest Wallpapers
app.get('/api/v1/latest', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(wallpersMockData));
});

// Filtered Comments
app.get('/api/v1/comments', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(
        commentsMockData.filter(item => {
            return item.wallpaperId === Number(req.query.id);
        })

    ));
});

// Filtered Comments
app.get('/api/v1/wallpaper', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(
        wallpersMockData.filter(item => {
            return item.id === Number(req.query.id);
        })

    ));
});

// Not Found
//@todo Handle Exception properly
app.get('*', (req, res) => res.send('Resource not found'));

exports.app = functions.https.onRequest(app);
