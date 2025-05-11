// pages/api/waitlist.js
import { connectToDatabase } from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  try {
    const db = await connectToDatabase();
    const collection = db.collection("email");

    const existing = await collection.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "Email already registered" });
    }

    await collection.insertOne({ email, createdAt: new Date() });
    res.status(201).json({ message: "Successfully added to waitlist" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
