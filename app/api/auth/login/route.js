import connectionToDb from "@/lib/mongodb.connect";
import User from "@/models/users";
import { NextResponse } from "next/server";

export async function POST() {
    await connectionToDb();
    console.log("Connected to Db")
}
