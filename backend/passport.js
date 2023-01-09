const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport')

const GOOGLE_CLIENT_ID = '937895354556-c198p2fjfkpp4horamr4ao7itv9jc2uq.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(
   new GoogleStrategy(
      {
         clientID: GOOGLE_CLIENT_ID,
         clientSecret: GOOGLE_CLIENT_SECRET,
         callbackURL: '/auth/google/callback',
      },
      function (accessToken, refreshToken, profile, done) {
         // for db connection :
         // User.findOrCreate({ googleId: profile.id }, function (err, user) {
         //   return cb(err, user);
         // });
         done(null, profile);
      }
   )
);


passport.serializeUser((user, done) => {
   done(null, user);
})

passport.deserializeUser((user, done) => {
   done(null, user);
})