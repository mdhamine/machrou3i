import nodemailer from 'nodemailer';


export default eventHandler(async (event) => {    
    try {
    const body = await readBody(event);
    const {phone, plan, ig, message, contact } = body;
    
    

    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL, 
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: '"Sender Name" <' + process.env.EMAIL + '>',
      to:  `${process.env.EMAIL}`,
    
      subject: 'New Order',
      html: `<p>New order received:</p>
             <ul>
               <li><strong>phone is/strong> ${phone}</li>
               <li><strong>ig </strong> ${ig}</li>
               <li><strong>plan:</strong> ${plan}</li>
               <li><strong>inquire:</strong> ${contact}</li>
               <li><strong>msg:</strong> ${message}</li>
               
             </ul>`
    }; 

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email', error };
  }
});
