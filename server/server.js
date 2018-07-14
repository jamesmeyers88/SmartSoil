
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
// const soilRouter = require('./routes/soil.router');
// const weatherRouter = require('./routes/weather.router');
const waterRouter = require('./routes/water.router');
const deviceRouter = require('./routes/device.router');
// const forecastRouter = require('./routes/forecast.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
// app.use('/api/soil', soilRouter);
// app.use('/api/weather', weatherRouter);
app.use('/api/water', waterRouter);
app.use('/api/device', deviceRouter);
// app.use('/api/forecast', forecastRouter );

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

