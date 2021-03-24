const sgMail = require("@sendgrid/mail")

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//     to: "shreyashadlinge@gmail.com",
//     from: "shreyashadlinge@gmail.com",
//     subject: "No sub",
//     text: "Hello"
// })

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "shreyashadlinge@gmail.com",
        subject: "Thanks for joining",
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "shreyashadlinge@gmail.com",
        subject: "GoodBye",
        text: `Thank you for using the app, ${name}.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}