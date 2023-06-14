//@ts-nocheck

import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../db";
import { NextResponse as res } from "next/server";

export const config = {};
export async function POST(req) {
  const body = await req.json();
  console.log(body);

  const { email, password } = body;

  console.log("This is the email ", email);

  const user = await prisma.user.findFirst({
    where: { email, password },
    select: {
      email: true,
      password: true,
      firstName: true,
      location: true,
      radius: true,
      matched: true,
      image: true,
      tags: true,
    },
  });

  console.log(user);

  if (user) {
    return res.json({ user });
  }

  return res.json({ message: "Authentication failed" });
}
