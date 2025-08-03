const cron = require('node-cron');
const emailService = require('../services/emailService');

const start = () => {
    console.log('Scheduled jobs initialized.');

    // Example Job: Send a reminder every day at 8:00 AM
    cron.schedule('0 8 * * *', () => {
        console.log('Running a daily reminder job.');
        // In a real app, you would query users who have opted-in
        // and send them personalized emails.
        // For example:
        // emailService.sendMail({
        //     to: 'user@example.com',
        //     subject: 'Your Daily Consistency Reminder!',
        //     text: 'Don\'t forget to complete your habits today!'
        // });
    });
};

module.exports = {
    start
};