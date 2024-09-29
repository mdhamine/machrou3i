import nodemailer from 'nodemailer';


export default eventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { name, phone, state, product, receiveremail,total , email, plan, ig } = body;
    
    if (receiveremail !== "ee") {
        console.log("ahhhh");
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL, 
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: '"Sender Name" <' + process.env.EMAIL + '>',
      to:  receiveremail,
      subject: 'New Order',
      text: `New order received:\n\nName: ${name}\nPhone: ${phone}\nState: ${state}\nProduct: ${product}`,
      html: `<p>New order received:</p>
             <ul>
               <li><strong>Name:</strong> ${name}</li>
               <li><strong>Phone:</strong> ${phone}</li>
               <li><strong>State:</strong> ${state}</li>
               <li><strong>Product:</strong> ${product}</li>
               <li><strong>total:</strong> ${total}</li>
             </ul>`
    }; 

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    return { success: true, message: 'Email sent successfully', status: 200 };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email', error, };
  }
});
