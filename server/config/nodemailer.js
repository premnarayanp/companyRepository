//nodemailer transporter Objects
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", //"smtp.gmail.com", 
    port: 587, //465
    secure: false, //true
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    }
});

// console.log(" process.env.MAIL_USERNAME=", process.env.MAIL_USERNAME)
// console.log(" process.env.MAIL_PASSWORD=", process.env.MAIL_PASSWORD)
export default transporter;