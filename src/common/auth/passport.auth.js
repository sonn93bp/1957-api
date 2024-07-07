const { Strategy, ExtractJwt } = require("passport-jwt");
const { jwtSecret } = require("../../../lib/config/env.config");
const { GetCache, SetCache } = require("../../../lib/utils/cache.utils");
const { findByEmail } = require("../services/user.service");
const passport = require("passport");

const JwtOptions = {
  secretOrKey: jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("Bearer"),
};

const JWTVerify = async (payload, done) => {
  try {
    const data = await GetCache(payload.sub);
    if (data) return done(null, data);
    const info = await findByEmail(payload.sub);
    if (info) {
      await SetCache(user, payload.sub);
      return done(null, user);
    }
    return done(null, false);
  } catch (err) {
    return done(err, false);
  }
};
passport.use("jwt", new Strategy(JwtOptions, JWTVerify));
module.exports = passport;
