const nodemailer = require('nodemailer');

const sendEmail = async options => {
    //Create a transporter
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    })


    //define the email options
    const mailOptions = {
        from: 'Epicure Team <panel@epicure.co.il',
        to: options.email,
        subject: options.subject,
        text: options.message,
        // html:
    }

    //Actually send the email
    await transporter.sendMail(mailOptions)

}

module.exports = {sendEmail}
