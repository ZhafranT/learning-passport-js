const router = require('express').Router();
const passport = require('passport');

const CLIENT_URL = 'http://localhost:3000/';

router.get('/login/success', (req, res) => {
   if (req.user) {
      res.status(200).json({
         success: true,
         message: 'success',
         user: req.user,
         // cookies: req.c ookies,
      });
   }
});
router.get('/login/failed', (req, res) => {
   res.status(401).json({
      success: false,
      message: 'failed',
   });
});
// note time
// 56:19
router.get('/logout', (req, res) => {
   req.logout();
   res.redirect(CLIENT_URL);
});

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get(
   '/google/callback',
   passport.authenticate('google', {
      successRedirect: CLIENT_URL,
      failureRedirect: '/login/failed',
   })
);

module.exports = router;
