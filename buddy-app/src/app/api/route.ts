//@ts-nocheck

import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
// import bcrypt from "bcrypt";
import { prisma } from "../db";
import { NextResponse as res } from "next/server";

export const config = {};
export async function POST(req) {
  //
  //   if (req.method !== "POST") {
  //     return res.status(405).json({ message: "Method not allowed" });
  //   }

  const body = await req.json();
  console.log(body);

  const { email, password } = body;

  console.log("This is the email ", email);

  const user = await prisma.user.findFirst({
    where: { email },
    select: { email: true, password: true },
  });

  console.log(user);

  if (user) {
    // const isPasswordMatch = await bcrypt.compare(password, user.password);

    // if (isPasswordMatch) {

    return res.json({ message: "Authentication successful" });
    // }
  }

  return res.json({ message: "Authentication failed" });
}
