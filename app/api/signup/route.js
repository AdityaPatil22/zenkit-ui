import connectToDb from '@/lib/mongodb.connect';
import User from '@/models/users';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await connectToDb();
    await User.create({ email, password: hashedPassword });

    return NextResponse.json(
      { message: 'User Created successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error occurred:', error);
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}
