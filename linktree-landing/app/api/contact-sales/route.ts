import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Define a Zod schema for the contact sales form data
const ContactSalesSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  company: z.string().optional(),
  phone: z.string().optional(), // Optional phone number
  message: z.string().min(10, { message: "Message must be at least 10 characters long" }),
});

export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();

    const validationResult = ContactSalesSchema.safeParse(requestBody);

    if (!validationResult.success) {
      return NextResponse.json(
        { 
          message: 'Invalid contact form data', 
          errors: validationResult.error.flatten().fieldErrors 
        },
        { status: 400 }
      );
    }

    const validatedData = validationResult.data;

    // Log the contact request (replace with email service or other storage as needed)
    console.log('Contact sales request received:', {
      ...validatedData,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({ message: "Your contact request has been received. We will get back to you shortly!" }, { status: 200 });

  } catch (error) {
    if (error instanceof SyntaxError) {
        return NextResponse.json({ message: 'Invalid JSON format in request body'}, {status: 400 });
    }
    console.error("Contact Sales API Error:", error);
    let errorMessage = "An unexpected error occurred.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ message: "Error submitting contact request.", error: errorMessage }, { status: 500 });
  }
} 