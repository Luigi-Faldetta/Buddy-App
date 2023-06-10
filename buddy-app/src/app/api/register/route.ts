//@ts-nocheck

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// export default async function handler(req) {
//   if (req.method === "POST") {
//     try {
//       const request = await req.body;

//       // Create a new user using the Prisma client
//       const newUser = await prisma.user.create({
//         data: req,
//       });

//       res.status(201).json(newUser);
//     } catch (error) {
//       console.error("Error creating user:", error);
//       res.status(500).json({ error: "Failed to create user" });
//     }
//   } else {
//     res.status(405).json({ error: "Method Not Allowed, not working" });
//   }
// }

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const userData = req.body.userData;

      // Create a new user using the Prisma client
      const newUser = await prisma.user.create({
        data: userData,
      });

      res.status(201).json(newUser);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Failed to create user" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
