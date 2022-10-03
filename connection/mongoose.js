const keys = require('../config/keys');

const options = {
  connection: {
    URL: keys.hostDbEcommerce
  },
  useNewUrlParser: true,
  useUnifiedTopology: true
}

module.exports = options