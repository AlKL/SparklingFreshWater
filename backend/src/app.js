const config = require('./utils/config');
const express = require('express');
const app = express();
const cors = require('cors');

const commentsRouter = require('./controllers/comments');
const middleware = require('./utils/middleware');
const logger = require('./utils/logger');
const mongoose = require('mongoose');

logger.info('connecting to', config.MONGODB_URI);

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => {
        logger.info('connected to MongoDB');
    })
    .catch((error) => {
        logger.error('error connecting to MongoDB:', error.message);
    });

app.use(cors());
app.use(express.static('build'));
app.use(express.json());

// app.get('/api/ping', (_req, res) => {
//     console.log('someone pinged here');
//     res.send('pong');
// });

app.use('/api/comments', commentsRouter);

app.use(middleware.requestLogger);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;