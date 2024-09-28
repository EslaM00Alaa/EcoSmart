import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors'; // Import CORS

dotenv.config();

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

app.post('/send-email', (req, res) => {
    const { name, mail, msg, phone, address } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // Email to the first recipient
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'starsweden71@gmail.com',
        subject: 'meddelande från klienten',
        html: `
            <h1>klientens namn: <span>${name}</span></h1>
            <h1>klientens e-post: <span>${mail}</span></h1>
            <h1>klientens Mobb: <span>${phone}</span></h1>
            <h1>klientens adress: <span>${address}</span></h1>
            <h1>klientens meddelande: <span>${msg}</span></h1>
        `,
    };

    // Email to the second recipient
    const mailOptions2 = {
        from: process.env.EMAIL_USER,
        to: 'jalal.bayzidi64@gmail.com',
        subject: 'meddelande från klienten',
        html: `
            <h1>klientens namn: <span>${name}</span></h1>
            <h1>klientens e-post: <span>${mail}</span></h1>
            <h1>klientens Mobb: <span>${phone}</span></h1>
            <h1>klientens adress: <span>${address}</span></h1>
            <h1>klientens meddelande: <span>${msg}</span></h1>
        `,
    };

    // Thank you email to the client
    const mailOptions3 = {
        from: process.env.EMAIL_USER,
        to: mail,
        subject: 'Tack för din förfrågan!',
        html: `
            <h1>Tack för att du kontaktade oss!</h1>
            <p>Vi kommer att återkomma till dig inom 24 timmar.</p>
        `,
    };

    // Send the emails one by one
    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.error('Failed to send email to starsweden71@gmail.com:', error);
            return res.status(500).send('Error sending email to starsweden71@gmail.com');
        }

        transporter.sendMail(mailOptions2, (error) => {
            if (error) {
                console.error('Failed to send email to jalal.bayzidi64@gmail.com:', error);
                return res.status(500).send('Error sending email to jalal.bayzidi64@gmail.com');
            }

            transporter.sendMail(mailOptions3, (error) => {
                if (error) {
                    console.error('Failed to send confirmation email to client:', error);
                    return res.status(500).send('Error sending confirmation email to client');
                }

                console.log('Emails sent successfully');
                res.status(200).send('Emails sent successfully!');
            });
        });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
