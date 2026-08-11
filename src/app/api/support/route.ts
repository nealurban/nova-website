import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NOVA_SUPPORT_EMAIL,
        pass: process.env.NOVA_SUPPORT_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Nova Website" <${process.env.NOVA_SUPPORT_EMAIL}>`,
      to: process.env.NOVA_SUPPORT_EMAIL,
      replyTo: email,
      subject: `Nova Support: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Nova support form error:", error);

    return NextResponse.json(
      { error: "Unable to send message." },
      { status: 500 }
    );
  }
}