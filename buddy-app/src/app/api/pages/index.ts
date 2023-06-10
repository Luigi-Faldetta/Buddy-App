// import NextAuth, { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// const authOptions: NextAuthOptions = {
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     CredentialsProvider({
//       type: "credentials",
//       credentials: {},
//       authorize(credentials, req) {
//         const { email, password } = credentials as {
//           email: string;
//           password: string;
//         };
//         if (email !== "john@gmail.com" || password !== "1234") {
//           return null;
//         }

//         return { id: "1234", name: "John Doe", email: "john@gmail.com" };
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/",
//   },
// };

// export default NextAuth(authOptions);

// auth.ts

//@ts-nocheck

import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
// import bcrypt from "bcrypt";
import { prisma } from "../../db";

// const prisma = new PrismaClient();

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
    // const isPasswordMatch = await bcrypt.compare(password, user.password);

    // if (isPasswordMatch) {
    return res.status(200).json({ message: "Authentication successful" });
    // }
  }

  return res.status(401).json({ message: "Authentication failed" });
}
