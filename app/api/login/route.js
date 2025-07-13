import connectToDb from '@/lib/mongodb.connect';
import User from '@/models/users';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json();
  const { email, password } = body;

  try {
    await connectToDb();
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        message: 'Login Successful',
        user: { email: user.email, id: user._id },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error occurred:', error);
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}
