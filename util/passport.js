const passport = require('passport')
const HeaderAPIKeyStrategy = require('passport-headerapikey').HeaderAPIKeyStrategy

passport.use(new HeaderAPIKeyStrategy(
  { header: 'Authorization', prefix: 'Api-Key ' },
  false,
  (apikey, done) => {
    console.log("A request has been made!")
    console.log(apikey)
    console.log(process.env.API_KEY)
    if (apikey === process.env.API_KEY) {
      return done(null, { authenticated: true })
    }
    return done(new Error("unauthorized"), null)
  }
));

module.exports = {
  passport
}
