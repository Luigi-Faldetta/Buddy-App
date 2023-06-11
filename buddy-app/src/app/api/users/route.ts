//@ts-nocheck

import { prisma } from "../../db";
import { NextResponse as res } from "next/server";

export async function GET(req) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const users = await prisma.user.findMany();
    return res.json(users);
  } catch (error) {
    console.error(error);
    return res.json({ message: "Server Error" });
  }
}
