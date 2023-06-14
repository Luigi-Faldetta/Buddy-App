//@ts-nocheck

import { PrismaClient } from "@prisma/client";

import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.error(new Error("Only POST requests allowed"), {
      status: 405,
    });
  }
  if (req.method === "POST") {
    try {
      const body = await req.json();

      // // Create a new user using the Prisma client
      const newUser = await prisma.user.create({
        data: body,
      });

      return NextResponse.json(body);
    } catch (error) {
      console.error("Error creating user:", error);
      NextResponse.json({ error: "Failed to create user" });
    }
  } else {
    NextResponse.json({ error: "Method Not Allowed" });
  }
}
