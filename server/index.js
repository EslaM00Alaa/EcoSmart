import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors'; // Import CORS

dotenv.config();

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

app.post('/send-email', (req, res) => {
    const { name, mail, msg,phone,address } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'ealaa3764@gmail.com',
        subject: 'meddelande från klienten',
        html: `
            <h1>klientens namn: <span>${name}</span></h1>
            <h1>klientens e-post: <span>${mail}</span></h1>
            <h1>klientens Mobb: <span>${phone}</span></h1>
            <h1>klientens adress: <span>${address}</span></h1>
            <h1>klientens meddelande: <span>${msg}</span></h1>
        `,
    };



    
    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.error('Failed to send email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent successfully');
            res.status(200).send('Email sent successfully!');
        }
    });









});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
