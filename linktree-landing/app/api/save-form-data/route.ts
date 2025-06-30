import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod'; // Import Zod

// Define a Zod schema for the expected form data
const FormDataSchema = z.object({
  // Adjust these fields based on your actual form data
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  // Add other fields as necessary, for example:
  // message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();

    // Validate the request body using Zod
    const validationResult = FormDataSchema.safeParse(requestBody);

    if (!validationResult.success) {
      return NextResponse.json(
        { 
          message: 'Invalid form data', 
          errors: validationResult.error.flatten().fieldErrors 
        },
        { status: 400 }
      );
    }

    // Use the validated data
    const validatedData = validationResult.data;
    
    // Log the form submission (replace with email service or other storage as needed)
    console.log('Form submission received:', {
      ...validatedData,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({ message: 'Form submission received successfully' }, { status: 200 });
  } catch (error) {
    // Catch errors from request.json() if body is not valid JSON
    if (error instanceof SyntaxError) {
        return NextResponse.json({ message: 'Invalid JSON format in request body'}, {status: 400 });
    }
    console.error('Error saving form data:', error);
    return NextResponse.json({ message: 'Error saving data', error: (error as Error).message }, { status: 500 });
  }
} 