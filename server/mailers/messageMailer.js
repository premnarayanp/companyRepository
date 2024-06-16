import transporter from '../config/nodemailer.js';

const messageMailer = async (company) => {
    //console.log("company==", company);
    const info = await transporter.sendMail({
        from: process.env.MAIL_USERNAME,
        to: company.emailId,
        subject: `Message from:-${company.companyName} ✔`, // Subject line
        text: "Hello world?", // plain text body
        html: `<div> <h1>Message for you</h1><p>${company.message}</p></div>`, // html body
    });
    if (info.messageId) {
        return { success: true, info: info }
    }
    return {
        success: false,
        info: info
    }
}

export default messageMailer;