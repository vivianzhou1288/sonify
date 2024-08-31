import { NextResponse } from "next/server";
import { db } from "../../../firebase.js";
import { collection, addDoc } from "firebase/firestore";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    await addDoc(collection(db, "waitlistEmails"), {
      email,
      timestamp: new Date(),
    });

    return NextResponse.json(
      { message: "Email added successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding document:", error);
    return NextResponse.json({ error: "Failed to add email" }, { status: 500 });
  }
}
