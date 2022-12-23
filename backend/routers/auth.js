const router = require('express').Router();
const passport = require('passport');

const CLIENT_URL = 'http://localhost:3000/';

router.get('/login/failed', (req, res) => {
   res.status(401).json({
      success: false,
      message: 'failed',
   });
});
// note time
// 55:13

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get(
   '/google/callback',
   passport.authenticate('google', {
      successRedirect: CLIENT_URL,
      failureRedirect: '/login/failed',
   })
);
