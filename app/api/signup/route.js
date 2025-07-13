import connectToDb from '@/lib/mongodb.connect';
import User from '@/models/users';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

import { signupSchema } from '@/lib/validations/auth';

export async function POST(req) {
  try {
    const body = await req.json();

    // Validate input
    const validation = signupSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.issues[0].message },
        { status: 400 }
      );
    }

    const { email, password } = validation.data;

    await connectToDb();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ email, password: hashedPassword });

    return NextResponse.json(
      { message: 'User created successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error occurred:', error);
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}
