//@ts-nocheck
// import { PrismaClient } from "@prisma/client";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createMockUser = async () => {
  const mockUser = {
    firstName: "James",
    lastName: "Smith",
    email: "johndoe@example.com",
    password: "password123",
    ownDescription: "Hi, I'm John",
    buddyDescription: "They need to be clean",
    budget: 1000,
    date: "2021 - 10 - 18",
    roomType: "Single",
    location: "Brighton",
    radius: 5,
    tags: ["clean", "quiet"],
    looking: true,
    matched: false,
  };

  const user = await prisma.user.create({
    data: mockUser,
  });

  return user;
};

createMockUser();
