import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const TO_EMAIL = process.env.TO_EMAIL;
const FROM_EMAIL = process.env.FROM_EMAIL;

export const POST = async (req) => {
    const { name, email, message } = await req.json();

    const msg = {
        to: TO_EMAIL,
        from: FROM_EMAIL,
        subject: 'From Portfolio :: sent by "' + name + '" from "' + email + '"',
        text: message,
        html: message,
    };

    try{
        await sgMail.send(msg);
        return (new Response(JSON.stringify(msg), {status:200}))
    } catch (error) {
        console.error(error);
        return (new Response(JSON.stringify(error), {status:500}))
    }
}