const passport = require("passport");
const ApiError = require("../utils/apiError");
const userModel = require("../models/user.model");
const GoogleStrategy = require('passport-google-oauth20').Strategy


passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },

    async (accessToken, refreshToken, profile, cb) => {
      try {
        // console.log("Profile-->", profile);
        const googleId = profile.id;
        const name = profile.displayName;
        const email = profile.emails?.[0]?.value
        const avatar = profile.photos?.[0]?.value || "";

        if (!email) {
          throw new ApiError("404", "Google account email not found")
        }

        let user = await userModel.findOne({ googleId })

        if (!user) {
          user = await userModel.findOne({ email })

          if (user) {
            user.googleId = googleId;
            user.isEmailVerified = true;
            user.authProvider = user.authProvider === "local" ? "both" : "google";
            await user.save()
          } else {
            user = await userModel.create({
              name,
              email,
              googleId,
              authProvider: "google",
            });

            // important flag
            user.isNewUser = true;
          }
        }
        return cb(null, user);
      } catch (err) {
        // return cb(null, user);
        console.log("Error in passport.js", err);

      }
    }

  )
)

module.exports = passport