//@ts-nocheck

import { prisma } from "../../db";
import { NextResponse as res } from "next/server";

export async function PUT(req) {
  console.log(req);
  if (req.method !== "PUT") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const body = await req.json();
  const { email, matched } = body;

  try {
    const user = await prisma.user.update({
      where: { email },
      data: { matched: true },
    });

    res.json({ message: "Invitation status updated successfully" });
  } catch (error) {
    console.error(error);
    res.json({ error: "Failed to update invitation status" });
  }
}
