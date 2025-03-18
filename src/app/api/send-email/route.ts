import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        // Get form fields
        const fullName = formData.get("fullName") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const address = formData.get("address") as string;
        const desiredPosition = formData.get("desiredPosition") as string;
        const yearsOfExperience = formData.get("yearsOfExperience") as string;
        const coverLetter = formData.get("coverLetter") as string;
        const pdfFile = formData.get("pdf") as File;

        // Setup transporter for SMTP
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_FROM,
                pass: process.env.PASS,
            },
        });

        // Convert PDF file to buffer for attachment
        const pdfBuffer = pdfFile
            ? Buffer.from(await pdfFile.arrayBuffer())
            : null;

        // Email to admin with PDF attachment
        const adminMailOptions = {
            from: `Forzo Team <${process.env.EMAIL_FROM}>`,
            to: "forzohr@gmail.com",
            subject: `📑 New Job Application Received`,
            html: `
                <h2>📑 New Job Application Received</h2>
                <h3>Candidate Details:</h3>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Address:</strong> ${address}</p>
                <p><strong>Desired Position:</strong> ${desiredPosition}</p>
                <p><strong>Years of Experience:</strong> ${yearsOfExperience}</p>
                <h3>Cover Letter:</h3>
                <p>${coverLetter || "No cover letter provided"}</p>
            `,
            attachments: pdfBuffer
                ? [
                      {
                          filename: pdfFile.name,
                          content: pdfBuffer,
                      },
                  ]
                : [],
        };

        // Confirmation email to candidate
        const userMailOptions = {
            from: `Forzo Team <${process.env.EMAIL_FROM}>`,
            to: email,
            subject: "Thank You for Your Application - Forzo",
            html: `
                <h2>Thank You for Your Application!</h2>
                <p>Dear ${fullName},</p>
                <p>We have received your application for the position of <strong>${desiredPosition}</strong> at Forzo. 
                Thank you for your interest in joining our team!</p>
                
                <h3>Application Details:</h3>
                <ul>
                    <li>Position: ${desiredPosition}</li>
                    <li>Phone: ${phone}</li>
                    <li>Address: ${address}</li>
                </ul>
                
                <p>Our hiring team will review your application and get back to you if your qualifications match our requirements.</p>
                
                <p>Please note that due to the high volume of applications, it may take some time to process all submissions.</p>
                
                <p>Best Regards,<br>
                The Forzo Recruitment Team</p>
            `,
        };

        // Send emails
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(userMailOptions);

        return NextResponse.json({
            success: true,
            message:
                "Application received and confirmation emails sent successfully!",
        });
    } catch (error) {
        console.error("Email Error:", error);
        return NextResponse.json({
            success: false,
            message: "Failed to process application",
            error,
        });
    }
}
