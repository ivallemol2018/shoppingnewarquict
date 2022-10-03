const { createTransport } = require('nodemailer')
const keys = require('../config/keys');

const path = require("path")
const ejs = require('ejs')

const hostSMTP = keys.hostSMTP
const portSMTP = keys.portSMTP
const userSMTP = keys.userSTMP
const passwordSMTP  = keys.passwordSTMP
const toMail = keys.toMailAdmin

const transporter = createTransport({
    service: 'gmail',
    host: hostSMTP,
    port: portSMTP,
    secure: true,
    socketTimeout: 5000,
    auth: {
        user: userSMTP,
        pass: passwordSMTP
    }
})

const sendEmail = (data,subject,template,toMailCC = '') =>{

    const templateEmail = path.join(__dirname,'..',`/utils/${template}`)

    ejs.renderFile(templateEmail, { data })
        .then(body => {
            transporter.sendMail({
                from: 'no-reply@shoppingcarthree.herokuapp.com',
                to: [toMail,toMailCC],
                subject,
                html: body
            })
                .then(r => console.log(r))
                .catch(e => console.log('error:', e))
        })
}

module.exports = sendEmail