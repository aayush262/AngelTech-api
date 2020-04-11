const nodemailer = require('nodemailer');

module.exports = sendMail = async(options) => {
    try{
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth:{
                user: 'testforsmtp123456789@gmail.com',
                pass: 'ayoush26@123'
            },
            tls: {
                // do not fail on invalid certs
                rejectUnauthorized: false
            }
        })
        const message ={   
            from: `Sack <noreply@sack.com>`,
            to: options.email,
            subject: options.subject,
            html: options.html
        }
        const info = await transporter.sendMail(message);
    }catch(err){
        console.log(err);
    }
}