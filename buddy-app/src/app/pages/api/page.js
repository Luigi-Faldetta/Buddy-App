import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      const user = req.body;
      const post = await prisma.post.create({
        data: {
          user,
        },
      });
      res.status(201).json(post);
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end("Method ${method} Not Allowed");
  }
}
