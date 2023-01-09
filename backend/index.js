const express = require('express');
const app = express();
const cors = require('cors');
const cookieSession = require('cookie-session');
const passportSetup = require('./passport');
const passport = require('passport');
const authRoute = require('./routers/auth');

app.use(
   cookieSession({
      name: 'session',
      keys: ['fran'],
      maxAge: 24 * 60 * 100,
   })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
   cors({
      origin: 'https://localhost:3000',
      method: 'GET,POST,PUT,DELETE',
      credentials: true,
   })
);

app.use("/auth", authRoute)

app.listen('5000', () => {
   console.log('server is running');
});
