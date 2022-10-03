// prod.js - production 
module.exports = {
  redirectDomain : process.env.REDIRECT_DOMAIN,
  clientDbEcommerce: process.env.CLIENT_DB_ECOMMERCE,
  hostDbEcommerce: process.env.HOST_DB_ECOMMERCE,
  userDbEcommerce: process.env.USER_DB_ECOMMERCE,
  passwordDbEcommerce: process.env.PASSWORD_DB_ECOMMERCE,
  dbEcommerce : process.env.DB_ECOMMERCE,
  driverClassName: process.env.DRIVER_CLASS_NAME,
  hostSMTP: process.env.HOST_STMP,
  portSMTP: process.env.PORT_STMP,
  userSTMP: process.env.USER_STMP,
  passwordSTMP: process.env.PASSWORD_STMP,
  toMailAdmin: process.env.TO_MAIL_ADMIN,
  accountTwilio: process.env.ACCOUNT_TWILIO,
  tokenTwilio: process.env.TOKEN_TWILIO,
  phoneFromTwilio: process.env.PHONE_FROM_TWILIO,
}