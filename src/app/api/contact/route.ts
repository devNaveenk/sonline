import { NextResponse } from "next/server";
import { getDbPool, isDbConfigured } from "@/lib/db";

interface ContactPayload {
  firstName: string;
  lastName: string;
  workEmail: string;
  organization?: string;
  interest?: string;
  details?: string;
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<ContactPayload>;
  const { firstName, lastName, workEmail, organization, interest, details } = body;

  if (!firstName || !lastName || !workEmail) {
    return NextResponse.json(
      { error: "First name, last name, and work email are required." },
      { status: 400 },
    );
  }

  if (!isDbConfigured()) {
    return NextResponse.json(
      {
        error:
          "The contact database isn't configured on this environment yet. Please email support@sonline.us directly.",
      },
      { status: 503 },
    );
  }

  try {
    const pool = getDbPool();
    await pool.execute(
      `INSERT INTO contact_submissions
        (first_name, last_name, work_email, organization, interest, details)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [firstName, lastName, workEmail, organization ?? null, interest ?? null, details ?? null],
    );
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong saving your message. Please try again or email us directly." },
      { status: 500 },
    );
  }
}
