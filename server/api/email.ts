
import nodemailer from 'nodemailer';


export default eventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { name, phone, state, cart, receiveremail,total , delivery } = body;
    
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
    
   

    console.log("cart is ", body.cart);
    const mailOptions = {
      from: '"Sender Name" <' + process.env.EMAIL + '>',
      to:  receiveremail,
      subject: 'New Order',
      text: `New order received:`,
      html: `<p>New order received:</p>
             <ul>
               <li><strong>Name:</strong> ${name}</li>
               <li><strong>Phone:</strong> ${phone}</li>
               <li><strong>State:</strong> ${state}</li>
               <li><strong>State:</strong> ${delivery}</li>
                <ul>
                ${cart.map((item: { category: any; product: any; units: any;}) => `
               <li>
                 <strong>Category:</strong> ${item.category}, 
                 <strong>Product:</strong> ${item.product.name}, 
                 <strong>Units:</strong> ${item.units}, 
                 
               </li>`).join('')}
               </ul>
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
