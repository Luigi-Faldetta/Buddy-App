//@ts-nocheck

import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../db";

export default async function handler(req, res) {
  console.log(arguments);
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { email },
    select: { email: true, password: true },
  });

  console.log(user);

  if (user) {
    return res.status(200).json({ message: "Authentication successful" });
  }

  return res.status(401).json({ message: "Authentication failed" });
}
