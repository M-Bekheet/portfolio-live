import nodemailer from "nodemailer";

// Configure Nodemailer transporter using Gmail
// Ensure you have GMAIL_USER and GMAIL_APP_PASSWORD in your .env.local
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD, // Use an App Password for Gmail
  },
});

type Props = {
  name: string;
  email: string;
  description: string;
  company?: string;
  position?: string;
};
export async function sendMail({
  name,
  email,
  description,
  company,
  position,
}: Props) {
  const mailOptions = {
    to: process.env.NEXT_PUBLIC_MY_EMAIL,
    from: process.env.GMAIL_USER, // Sender address (must be the same as GMAIL_USER)
    subject: `${name} submitted the portfolio contact form`,
    text: `
    Someone has submitted the contact form on your portfolio.
    ${name} ${company ? "from " + company + " " : ""}${
      position ? " with position: " + position : ""
    } says:
    ${description}.
    Contact Email: ${email}
    `,

    html: `<h2>${name} has submitted the contact form on your portfolio.</h2>
    <strong>${name}</strong> ${
      company ? `from <strong>${company}</strong> ` : ""
    }${position ? " with position: " + position : ""} says:
    <div>${description}</div>


   <p>------------------------------------------------------------------------</p>

    <h3>Contact Information:</h3>
    <div>Name: ${name}</div>
    <div>Email: ${email}</div>
    ${company ? `<div>Company: ${company}</div>` : ""}
    ${position ? `<div>Position: ${position}</div>` : ""}
    `,
  };
  // const send = await sgMail.send(msg);
  // return { success: true };

  try {
    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });
  } catch (error) {
    console.error("Error sending email:", error);
    // It's good practice to return a more specific error or handle it appropriately
    return { success: false, error: "Failed to send email" };
  }
}
