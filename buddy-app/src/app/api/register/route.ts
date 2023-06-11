//@ts-nocheck

import { PrismaClient } from "@prisma/client";
// import { NextResponse as res } from "next/server";
import { NextResponse } from "next/server";
// export const config = {};
// import { prisma } from "../..db";

const prisma = new PrismaClient();

// // export default async function handler(req) {
// //   if (req.method === "POST") {
// //     try {
// //       const request = await req.body;

// //       // Create a new user using the Prisma client
// //       const newUser = await prisma.user.create({
// //         data: req,
// //       });

// //       res.status(201).json(newUser);
// //     } catch (error) {
// //       console.error("Error creating user:", error);
// //       res.status(500).json({ error: "Failed to create user" });
// //     }
// //   } else {
// //     res.status(405).json({ error: "Method Not Allowed, not working" });
// //   }
// // }

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.error(new Error("Only POST requests allowed"), {
      status: 405,
    });
  }
  if (req.method === "POST") {
    try {
      // return NextResponse.json({ message: "Hello World" });

      // console.log(req);
      const body = await req.json();
      // // console.log(body);
      // const userData = req.body;
      // // const userData = JSON.parse(req.body.userData);
      // // console.log(userData);
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

// import { PrismaClient } from "@prisma/client";
// import { NextApiRequest, NextApiResponse } from "next";
// // import bcrypt from "bcrypt";
// import { prisma } from "../db";
// import { NextResponse as res } from "next/server";

// export const config = {};
// export async function POST(req) {
//   //
//   //   if (req.method !== "POST") {
//   //     return res.status(405).json({ message: "Method not allowed" });
//   //   }

//   const body = await req.json();
//   console.log(body);

//   const { email, password } = body;

//   console.log("This is the email ", email);

//   const user = await prisma.user.findFirst({
//     where: { email },
//     select: { email: true, password: true },
//   });

//   console.log(user);

//   if (user) {
//     // const isPasswordMatch = await bcrypt.compare(password, user.password);

//     // if (isPasswordMatch) {

//     return res.json({ message: "Authentication successful" });
//     // }
//   }

//   return res.json({ message: "Authentication failed" });
// }
