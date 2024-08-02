const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const userService = require("./../services/user.service");
const {
  jwt: { jwtSecret },
} = require("./../../lib/config/env.config");
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret, // Replace with your actual secret key
};
// Configure JWT strategy
passport.use(
  new JwtStrategy(jwtOptions, function (jwt_payload, done) {
    // JWT verification and user lookup logic
    userService
      .getInfo(jwt_payload.email)
      .then((user) => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(() => {
        return done(null, false);
      });
  })
);

module.exports = passport;
