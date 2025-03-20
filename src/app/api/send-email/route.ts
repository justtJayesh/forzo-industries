import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type AcceptedMimeTypes =
    | "application/pdf"
    | "application/msword"
    | "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    | "application/vnd.oasis.opendocument.text"
    | "text/plain"
    | "application/rtf";

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        const fullName = formData.get("fullName") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const address = formData.get("address") as string;
        const desiredPosition = formData.get("desiredPosition") as string;
        const yearsOfExperience = formData.get("yearsOfExperience") as string;
        const coverLetter = formData.get("coverLetter") as string;
        // const pdfFile = formData.get("pdf") as File;
        const resumeFile = formData.get("resume") as File;

        // Setup transporter for SMTP
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_FROM,
                pass: process.env.PASS,
            },
        });

        // Convert resume file to buffer for attachment
        const resumeBuffer = resumeFile
            ? Buffer.from(await resumeFile.arrayBuffer())
            : null;

        // Get file format for better email communication
        const getFileFormat = (file: File): string => {
            const fileTypeMap: Record<AcceptedMimeTypes, string> = {
                "application/pdf": "PDF",
                "application/msword": "DOC",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                    "DOCX",
                "application/vnd.oasis.opendocument.text": "ODT",
                "text/plain": "TXT",
                "application/rtf": "RTF",
            };

            // Check if the type is one of our accepted types
            return Object.keys(fileTypeMap).includes(file.type)
                ? fileTypeMap[file.type as AcceptedMimeTypes]
                : "Unknown";
        };

        // Email to admin with resume attachment
        const adminMailOptions = {
            from: `Forzo Team <${process.env.EMAIL_FROM}>`,
            to: "Jayeshmateanil2014@gmail.com",
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
                ${
                    resumeFile
                        ? `<p><strong>Resume Format:</strong> ${getFileFormat(
                              resumeFile
                          )}</p>`
                        : "<p><strong>Resume:</strong> Not provided</p>"
                }
            `,
            attachments: resumeBuffer
                ? [
                      {
                          filename: resumeFile.name,
                          content: resumeBuffer,
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
                <h3>Application Received - Thank you!</h3>
                <p>Dear ${fullName},</p>
                <p>We have received your application for the position of <strong>${desiredPosition}</strong> at Forzo. 
                Thank you for your interest in joining our team!</p>
                <p>Our hiring team will review your application and get back to you if your qualifications match our requirements.</p>
                <br/>
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
        return NextResponse.json({
            success: false,
            message: "Failed to process application",
            error,
        });
    }
}
