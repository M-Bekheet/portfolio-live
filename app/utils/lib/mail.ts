const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
  const msg = {
    to: process.env.NEXT_PUBLIC_MY_EMAIL,
    from: process.env.NEXT_PUBLIC_MY_SENDGRID_EMAIL,
    subject: `${name} submitted the portfolio contact form`,
    text: `
    Someone has submitted the contact form on your portfolio.
    ${name} ${company ? "from " + company + " " : ""}${
      position ? " with position: " + position : ""
    } says:<br/>
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
  const send = await sgMail.send(msg);
  return { success: true };
}
