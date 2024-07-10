const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const userService = require("./../services/user.service");
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "G8342ltj55bMzlP3YfQdZWlL56E1de7t", // Replace with your actual secret key
};
// Configure JWT strategy
passport.use(
  new JwtStrategy(jwtOptions, function (jwt_payload, done) {
    console.log(jwt_payload);
    // JWT verification and user lookup logic
    userService
      .findByEmail(jwt_payload.email)
      .then((info) => {
        console.log(info);
        if (info) {
          return done(null, info);
        }
        return done(null, false);
      })
      .catch(() => {
        return done(null, false);
      });
  })
);

module.exports = passport;
