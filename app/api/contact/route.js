import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const formData = await request.formData();

    // Extract form data
    const name = formData.get("name");
    const email = formData.get("email");
    const company = formData.get("company");
    const phone = formData.get("phone");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Basic validation
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Required fields are missing" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Create transporter for Gmail
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "info@futureverde.com",
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #2d4d44; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">FutureVerde Contact Form</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">New contact form submission received</p>
          </div>
          
          <div style="background-color: white; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #2d4d44; margin-top: 0;">Contact Details</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #54655e;">Name:</strong>
              <span style="margin-left: 10px;">${name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #54655e;">Email:</strong>
              <span style="margin-left: 10px;">
                <a href="mailto:${email}" style="color: #2d4d44;">${email}</a>
              </span>
            </div>
            
            ${
              company
                ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #54655e;">Company:</strong>
              <span style="margin-left: 10px;">${company}</span>
            </div>
            `
                : ""
            }
            
            ${
              phone
                ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #54655e;">Phone:</strong>
              <span style="margin-left: 10px;">
                <a href="tel:${phone.replace(
                  /\s/g,
                  ""
                )}" style="color: #2d4d44;">${phone}</a>
              </span>
            </div>
            `
                : ""
            }
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #54655e;">Subject:</strong>
              <span style="margin-left: 10px;">${subject}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #54655e;">Message:</strong>
              <div style="margin-top: 10px; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #2d4d44; border-radius: 4px;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
            
            <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
              <p>This message was sent from the FutureVerde contact form on ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Log the submission
    console.log("Contact Form Submission:", {
      name,
      email,
      company,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Return success response
    return Response.json(
      {
        success: true,
        message:
          "Thank you for your message. We will get back to you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      {
        error: "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
